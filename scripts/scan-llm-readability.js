#!/usr/bin/env node
'use strict';

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const repo = process.cwd();
const reportDir = path.join(repo, 'analysis', 'markdown-quality');
const markdownExts = new Set(['.md', '.markdown']);
const skipDirs = new Set(['.git', 'node_modules', 'analysis']);
const sourceDocsRoot = 'markdown/';

const reportMd = path.join(reportDir, 'llm-readability-report.md');
const issuesCsv = path.join(reportDir, 'llm-readability-issues.csv');
const pageMetricsCsv = path.join(reportDir, 'llm-readability-page-metrics.csv');

const genericTitles = new Set([
  'about',
  'additional information',
  'configuration',
  'configure',
  'create',
  'example',
  'examples',
  'getting started',
  'introduction',
  'overview',
  'reference',
  'release notes',
  'result',
  'setup',
  'summary',
  'task',
]);

const weakLinkTexts = new Set([
  'click here',
  'here',
  'learn more',
  'link',
  'more',
  'more information',
  'page',
  'read more',
  'see here',
  'see more',
  'this',
  'this article',
  'this document',
  'this page',
  'this section',
  'this topic',
  'topic',
]);

const genericAltTexts = new Set([
  'diagram',
  'graphic',
  'image',
  'logo',
  'picture',
  'screenshot',
  'screen shot',
]);

const stopwords = new Set([
  'a',
  'about',
  'an',
  'and',
  'are',
  'as',
  'by',
  'for',
  'from',
  'in',
  'into',
  'is',
  'it',
  'its',
  'of',
  'on',
  'or',
  'the',
  'to',
  'use',
  'using',
  'with',
]);

function toPosix(filePath) {
  return filePath.split(path.sep).join('/');
}

function rel(filePath) {
  return toPosix(path.relative(repo, filePath));
}

function escapeMd(value) {
  return String(value ?? '')
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\|/g, '\\|')
    .replace(/\r?\n/g, ' ');
}

function csvCell(value) {
  return `"${String(value ?? '').replace(/"/g, '""').replace(/\r?\n/g, ' ')}"`;
}

function truncate(value, max = 180) {
  const text = String(value ?? '');
  return text.length > max ? `${text.slice(0, max - 3)}...` : text;
}

function stripMdEscapes(value) {
  return String(value ?? '').replace(/\\([\\`*{}_[\]()#+\-.!<>])/g, '$1');
}

function normalizeWhitespace(value) {
  return String(value ?? '').trim().replace(/\s+/g, ' ');
}

function normalizeText(value) {
  return stripMdEscapes(String(value ?? ''))
    .replace(/`([^`]*)`/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');
}

function textTokens(value) {
  return normalizeText(value)
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .split(/\s+/)
    .filter((token) => token && !stopwords.has(token));
}

function wordCount(value) {
  return normalizeText(value)
    .replace(/[^\p{L}\p{N}_-]+/gu, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .length;
}

function slugifyHeading(value) {
  let text = stripMdEscapes(String(value ?? ''));
  text = text.replace(/`([^`]*)`/g, '$1');
  text = text.replace(/!\[[^\]]*\]\([^)]*\)/g, '');
  text = text.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1');
  text = text.replace(/<[^>]+>/g, '');
  text = text.trim().toLowerCase();
  text = text.replace(/[^\p{L}\p{N}\s_-]/gu, '');
  text = text.replace(/[\s_]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  return text;
}

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skipDirs.has(entry.name)) {
      continue;
    }

    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(absolute, out);
    } else if (entry.isFile() && markdownExts.has(path.extname(entry.name).toLowerCase())) {
      out.push(rel(absolute));
    }
  }
  return out;
}

function isEscaped(text, index) {
  let slashCount = 0;
  for (let i = index - 1; i >= 0 && text[i] === '\\'; i -= 1) {
    slashCount += 1;
  }
  return slashCount % 2 === 1;
}

function findFenceMarker(line) {
  const match = line.match(/(?:^|\s|>)(`{3,}|~{3,})(.*)$/);
  if (!match) {
    return null;
  }
  return {
    marker: match[1][0],
    len: match[1].length,
    info: normalizeWhitespace(match[2] || ''),
  };
}

function maskInlineCode(line) {
  const chars = line.split('');
  let index = 0;

  while (index < chars.length) {
    if (line[index] !== '`' || isEscaped(line, index)) {
      index += 1;
      continue;
    }

    let endOfDelimiter = index;
    while (endOfDelimiter < line.length && line[endOfDelimiter] === '`') {
      endOfDelimiter += 1;
    }

    const delimiter = line.slice(index, endOfDelimiter);
    const end = line.indexOf(delimiter, endOfDelimiter);
    if (end === -1) {
      break;
    }

    for (let i = index; i < end + delimiter.length; i += 1) {
      chars[i] = ' ';
    }
    index = end + delimiter.length;
  }

  return chars.join('');
}

function findMatchingBracket(line, start) {
  let depth = 0;
  for (let i = start; i < line.length; i += 1) {
    const ch = line[i];
    if (isEscaped(line, i)) {
      continue;
    }
    if (ch === '[') {
      depth += 1;
    } else if (ch === ']') {
      depth -= 1;
      if (depth === 0) {
        return i;
      }
    }
  }
  return -1;
}

function findMatchingParen(line, start) {
  let depth = 0;
  let quote = null;

  for (let i = start; i < line.length; i += 1) {
    const ch = line[i];
    if (isEscaped(line, i)) {
      continue;
    }
    if (quote) {
      if (ch === quote) {
        quote = null;
      }
      continue;
    }
    if (ch === '"' || ch === "'") {
      quote = ch;
      continue;
    }
    if (ch === '(') {
      depth += 1;
    } else if (ch === ')') {
      depth -= 1;
      if (depth === 0) {
        return i;
      }
    }
  }

  return -1;
}

function extractDestination(content) {
  const text = content.trim();
  if (!text) {
    return '';
  }

  if (text[0] === '<') {
    const end = text.indexOf('>');
    return end >= 0 ? text.slice(1, end).trim() : text.slice(1).trim();
  }

  let quote = null;
  let parenDepth = 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (quote) {
      if (ch === quote && !isEscaped(text, i)) {
        quote = null;
      }
      continue;
    }
    if ((ch === '"' || ch === "'") && !isEscaped(text, i)) {
      quote = ch;
      continue;
    }
    if (ch === '(' && !isEscaped(text, i)) {
      parenDepth += 1;
      continue;
    }
    if (ch === ')' && !isEscaped(text, i) && parenDepth > 0) {
      parenDepth -= 1;
      continue;
    }
    if (/\s/.test(ch) && parenDepth === 0) {
      return text.slice(0, i).trim();
    }
  }

  return text.trim();
}

function normalizeRefId(value) {
  return stripMdEscapes(value).trim().replace(/\s+/g, ' ').toLowerCase();
}

function collectReferenceDefinitions(lines) {
  const defs = new Map();
  const fence = { marker: null, len: 0 };

  for (let i = 0; i < lines.length; i += 1) {
    const marker = findFenceMarker(lines[i]);
    if (marker && !fence.marker) {
      fence.marker = marker.marker;
      fence.len = marker.len;
      continue;
    }
    if (marker && fence.marker === marker.marker && marker.len >= fence.len) {
      fence.marker = null;
      fence.len = 0;
      continue;
    }
    if (fence.marker) {
      continue;
    }

    const line = maskInlineCode(lines[i]);
    const match = line.match(/^\s{0,3}\[([^\]]+)\]:\s*(.+?)\s*$/);
    if (!match) {
      continue;
    }

    const id = normalizeRefId(match[1]);
    const target = extractDestination(match[2]);
    if (id && target && !defs.has(id)) {
      defs.set(id, { target, line: i + 1, label: match[1] });
    }
  }

  return defs;
}

function extractLinksFromLines(lines, source) {
  const defs = collectReferenceDefinitions(lines);
  const links = [];
  const fence = { marker: null, len: 0 };

  function add(line, isImage, target, label, syntax) {
    links.push({
      source,
      line,
      isImage,
      target,
      label: normalizeWhitespace(stripMdEscapes(label || '')),
      syntax,
    });
  }

  for (let i = 0; i < lines.length; i += 1) {
    const lineNo = i + 1;
    const marker = findFenceMarker(lines[i]);
    if (marker && !fence.marker) {
      fence.marker = marker.marker;
      fence.len = marker.len;
      continue;
    }
    if (marker && fence.marker === marker.marker && marker.len >= fence.len) {
      fence.marker = null;
      fence.len = 0;
      continue;
    }
    if (fence.marker) {
      continue;
    }

    const rawLine = lines[i];
    const line = maskInlineCode(rawLine);
    const def = line.match(/^\s{0,3}\[([^\]]+)\]:\s*(.+?)\s*$/);
    if (def) {
      const target = extractDestination(def[2]);
      if (target) {
        add(lineNo, false, target, def[1], 'reference-definition');
      }
      continue;
    }

    const htmlRe = /<(a|img|source)\b[^>]*?\s(href|src)\s*=\s*(["'])(.*?)\3/gi;
    let htmlMatch;
    while ((htmlMatch = htmlRe.exec(line)) !== null) {
      const tag = htmlMatch[1].toLowerCase();
      const attr = htmlMatch[2].toLowerCase();
      add(lineNo, tag === 'img' || attr === 'src', htmlMatch[4], '', `html-${tag}-${attr}`);
    }

    for (let pos = 0; pos < line.length; pos += 1) {
      if (line[pos] !== '[' || isEscaped(line, pos)) {
        continue;
      }

      const isImage = pos > 0 && line[pos - 1] === '!' && !isEscaped(line, pos - 1);
      const close = findMatchingBracket(line, pos);
      if (close < 0) {
        continue;
      }

      const label = line.slice(pos + 1, close);
      const next = close + 1;
      if (line[next] === '(') {
        const end = findMatchingParen(line, next);
        if (end >= 0) {
          const target = extractDestination(line.slice(next + 1, end));
          if (target) {
            add(lineNo, isImage, target, label, isImage ? 'markdown-image' : 'markdown-link');
          }
          pos = end;
        }
      } else if (line[next] === '[') {
        const refEnd = findMatchingBracket(line, next);
        if (refEnd >= 0) {
          const explicit = line.slice(next + 1, refEnd);
          const refId = normalizeRefId(explicit || label);
          const defn = defs.get(refId);
          if (defn) {
            add(lineNo, isImage, defn.target, label, isImage ? 'markdown-image-reference' : 'markdown-link-reference');
          }
          pos = refEnd;
        }
      }
    }
  }

  return links;
}

function splitLocalTarget(target) {
  let text = String(target ?? '').trim();
  if (text.startsWith('<') && text.endsWith('>')) {
    text = text.slice(1, -1).trim();
  }
  text = text.replace(/\\/g, '/');

  const hash = text.indexOf('#');
  if (hash >= 0) {
    text = text.slice(0, hash);
  }
  const query = text.indexOf('?');
  if (query >= 0) {
    text = text.slice(0, query);
  }
  try {
    text = decodeURI(text);
  } catch {
    // Leave undecodable paths as-is.
  }
  return stripMdEscapes(text);
}

function isExternalLike(target) {
  const text = String(target).trim();
  return /^[a-z][a-z0-9+.-]*:/i.test(text) || text.startsWith('//');
}

function resolveLocalTarget(source, target) {
  const pathPart = splitLocalTarget(target);
  if (!pathPart || isExternalLike(pathPart)) {
    return '';
  }
  const sourceDir = path.posix.dirname(source);
  const targetPath = pathPart.startsWith('/')
    ? pathPart.slice(1)
    : path.posix.join(sourceDir === '.' ? '' : sourceDir, pathPart);
  return path.posix.normalize(targetPath).replace(/^\.\//, '');
}

function splitTableCells(line) {
  let text = line.trim();
  if (text.startsWith('|')) {
    text = text.slice(1);
  }
  if (text.endsWith('|')) {
    text = text.slice(0, -1);
  }

  const cells = [];
  let cell = '';
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === '|' && !isEscaped(text, i)) {
      cells.push(cell.trim());
      cell = '';
    } else {
      cell += text[i];
    }
  }
  cells.push(cell.trim());
  return cells;
}

function isTableSeparator(line) {
  const cells = splitTableCells(line);
  return cells.length > 1 && cells.every((cell) => /^:?-{3,}:?$/.test(cell.trim()));
}

function collectTables(lines) {
  const tables = [];
  const fence = { marker: null, len: 0 };
  let i = 0;

  while (i < lines.length) {
    const marker = findFenceMarker(lines[i]);
    if (marker && !fence.marker) {
      fence.marker = marker.marker;
      fence.len = marker.len;
      i += 1;
      continue;
    }
    if (marker && fence.marker === marker.marker && marker.len >= fence.len) {
      fence.marker = null;
      fence.len = 0;
      i += 1;
      continue;
    }
    if (fence.marker) {
      i += 1;
      continue;
    }

    if (i + 1 < lines.length && lines[i].includes('|') && isTableSeparator(lines[i + 1])) {
      const start = i + 1;
      const headerCells = splitTableCells(lines[i]).length;
      let end = i + 2;
      while (end < lines.length && lines[end].includes('|') && lines[end].trim()) {
        end += 1;
      }

      const inconsistent = [];
      for (let row = i + 2; row < end; row += 1) {
        const cells = splitTableCells(lines[row]).length;
        if (cells !== headerCells) {
          inconsistent.push({ line: row + 1, cells });
        }
      }

      tables.push({
        start,
        end,
        rows: end - i - 2,
        columns: headerCells,
        inconsistent,
        header: splitTableCells(lines[i]).join(' | '),
      });
      i = end;
      continue;
    }

    i += 1;
  }

  return tables;
}

function pathTitleOverlap(file, title) {
  const pathTerms = textTokens(file
    .replace(/^markdown\//, '')
    .replace(/\.[^.]+$/, '')
    .replace(/[\/_-]+/g, ' '));
  const titleTerms = new Set(textTokens(title));
  if (!pathTerms.length || !titleTerms.size) {
    return 0;
  }
  const shared = pathTerms.filter((token) => titleTerms.has(token)).length;
  return shared / Math.min(pathTerms.length, titleTerms.size);
}

function addIssue(issues, issue) {
  issues.push({
    severity: issue.severity || 'P3',
    category: issue.category,
    issue: issue.issue,
    source: issue.source || '',
    line: issue.line || '',
    heading: issue.heading || '',
    detail: truncate(issue.detail || '', 500),
    recommendation: truncate(issue.recommendation || '', 500),
  });
}

function bodyHash(text) {
  const normalized = normalizeText(text)
    .replace(/\[[^\]]+\]\([^)]*\)/g, ' ')
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (wordCount(normalized) < 80) {
    return '';
  }
  return crypto.createHash('sha256').update(normalized).digest('hex');
}

function analyzeFile(file, fileSet, h1Index, linkTextIndex, duplicateBodyIndex) {
  const absolute = path.join(repo, file);
  const text = fs.readFileSync(absolute, 'utf8');
  const lines = text.split(/\r?\n/);
  const issues = [];
  const headings = [];
  const headingSlugCounts = new Map();
  const links = extractLinksFromLines(lines, file);
  const tables = collectTables(lines);
  const metrics = {
    file,
    h1: '',
    h1Count: 0,
    headingCount: 0,
    lineCount: lines.length,
    wordCount: wordCount(text),
    linkCount: links.filter((link) => !link.isImage).length,
    imageCount: links.filter((link) => link.isImage).length,
    codeFenceCount: 0,
    missingLanguageFenceCount: 0,
    tableCount: tables.length,
    htmlTableCount: 0,
    issueCount: 0,
  };

  let fence = { marker: null, len: 0, start: 0 };
  for (let i = 0; i < lines.length; i += 1) {
    const lineNo = i + 1;
    const raw = lines[i];
    const marker = findFenceMarker(raw);
    if (marker && !fence.marker) {
      fence = { marker: marker.marker, len: marker.len, start: lineNo };
      metrics.codeFenceCount += 1;
      if (!marker.info) {
        metrics.missingLanguageFenceCount += 1;
        addIssue(issues, {
          severity: 'P3',
          category: 'markdown-validity',
          issue: 'code_fence_missing_language',
          source: file,
          line: lineNo,
          detail: 'Code fence has no language tag.',
          recommendation: 'Add a language tag where the content is code; use text for plain output.',
        });
      }
      continue;
    }
    if (marker && fence.marker === marker.marker && marker.len >= fence.len) {
      fence = { marker: null, len: 0, start: 0 };
      continue;
    }
    if (fence.marker) {
      continue;
    }

    if (/<table\b/i.test(raw)) {
      metrics.htmlTableCount += 1;
      addIssue(issues, {
        severity: 'P3',
        category: 'chunkability',
        issue: 'html_table',
        source: file,
        line: lineNo,
        detail: 'Raw HTML table found in Markdown.',
        recommendation: 'Prefer Markdown tables or provide a nearby prose summary for retrieval.',
      });
    }

    const heading = raw.match(/^\s{0,3}(#{1,6})\s+(.+?)\s*#*\s*$/);
    if (heading) {
      const level = heading[1].length;
      const title = normalizeWhitespace(stripMdEscapes(heading[2].replace(/\s+\{#([^}\s]+)\}\s*$/, '')));
      const baseSlug = slugifyHeading(title);
      const count = headingSlugCounts.get(baseSlug) || 0;
      headingSlugCounts.set(baseSlug, count + 1);
      headings.push({ level, title, line: lineNo, slug: baseSlug, duplicateIndex: count });
      if (level === 1) {
        metrics.h1Count += 1;
        if (!metrics.h1) {
          metrics.h1 = title;
        }
      }
    }

    if (/\b(as shown below|shown below|as shown in|shown in the following|following image|image below|screenshot below)\b/i.test(raw)) {
      addIssue(issues, {
        severity: 'P3',
        category: 'image-context',
        issue: 'visual_dependency_phrase',
        source: file,
        line: lineNo,
        detail: truncate(raw.trim(), 240),
        recommendation: 'Add the key visual facts in prose so the page remains useful without images.',
      });
    }
  }

  if (fence.marker) {
    addIssue(issues, {
      severity: 'P1',
      category: 'markdown-validity',
      issue: 'unclosed_code_fence',
      source: file,
      line: fence.start,
      detail: 'A fenced code block is opened but not closed before end of file.',
      recommendation: 'Close the code fence to avoid swallowing the rest of the page.',
    });
  }

  metrics.headingCount = headings.length;

  if (!metrics.h1Count) {
    addIssue(issues, {
      severity: 'P2',
      category: 'page-identity',
      issue: 'missing_h1',
      source: file,
      detail: 'File has no H1 heading.',
      recommendation: 'Add one specific H1 that names the page topic.',
    });
  } else {
    h1Index.set(normalizeText(metrics.h1), [...(h1Index.get(normalizeText(metrics.h1)) || []), file]);
  }

  if (metrics.h1Count > 1) {
    addIssue(issues, {
      severity: 'P2',
      category: 'page-identity',
      issue: 'multiple_h1',
      source: file,
      detail: `File has ${metrics.h1Count} H1 headings.`,
      recommendation: 'Keep one page-level H1 and demote the others.',
    });
  }

  if (metrics.h1 && genericTitles.has(normalizeText(metrics.h1))) {
    addIssue(issues, {
      severity: 'P2',
      category: 'page-identity',
      issue: 'generic_h1',
      source: file,
      heading: metrics.h1,
      detail: 'H1 is generic and weak as a retrieval label.',
      recommendation: 'Make the H1 specific to the product, object, API, or workflow.',
    });
  }

  if (metrics.h1) {
    const overlap = pathTitleOverlap(file, metrics.h1);
    if (overlap < 0.2 && textTokens(metrics.h1).length >= 2) {
      addIssue(issues, {
        severity: 'P3',
        category: 'page-identity',
        issue: 'low_path_title_overlap',
        source: file,
        heading: metrics.h1,
        detail: `Path/title token overlap is ${overlap.toFixed(2)}.`,
        recommendation: 'Check whether the filename or H1 should be made more descriptive and aligned.',
      });
    }
  }

  for (let i = 1; i < headings.length; i += 1) {
    if (headings[i].level > headings[i - 1].level + 1) {
      addIssue(issues, {
        severity: 'P3',
        category: 'heading-structure',
        issue: 'skipped_heading_level',
        source: file,
        line: headings[i].line,
        heading: headings[i].title,
        detail: `Heading level jumps from H${headings[i - 1].level} to H${headings[i].level}.`,
        recommendation: 'Use consecutive heading levels to preserve document hierarchy.',
      });
    }
  }

  for (const heading of headings) {
    if (heading.duplicateIndex > 0) {
      addIssue(issues, {
        severity: 'P2',
        category: 'heading-structure',
        issue: 'duplicate_heading_anchor',
        source: file,
        line: heading.line,
        heading: heading.title,
        detail: `Duplicate generated heading anchor base: ${heading.slug}`,
        recommendation: 'Make repeated headings more specific so anchor links and chunks are easier to distinguish.',
      });
    }
  }

  for (let i = 0; i < headings.length; i += 1) {
    const current = headings[i];
    let endLine = lines.length;
    let hasChildHeading = false;
    for (let j = i + 1; j < headings.length; j += 1) {
      if (headings[j].level > current.level) {
        hasChildHeading = true;
      }
      if (headings[j].level <= current.level) {
        endLine = headings[j].line - 1;
        break;
      }
    }
    const sectionText = lines.slice(current.line, endLine).join('\n');
    const tokens = wordCount(sectionText);
    if (!hasChildHeading && tokens > 1500) {
      addIssue(issues, {
        severity: tokens > 3000 ? 'P1' : 'P2',
        category: 'chunkability',
        issue: tokens > 3000 ? 'very_large_section' : 'large_section',
        source: file,
        line: current.line,
        heading: current.title,
        detail: `Section has about ${tokens} words and no lower-level subheadings.`,
        recommendation: 'Split into specific subsections or add a concise summary before the long body.',
      });
    }
  }

  if (metrics.wordCount > 12000) {
    addIssue(issues, {
      severity: 'P1',
      category: 'chunkability',
      issue: 'very_large_file',
      source: file,
      detail: `File has about ${metrics.wordCount} words.`,
      recommendation: 'Split the page, add navigable headings, or provide a compact summary.',
    });
  } else if (metrics.wordCount > 6000) {
    addIssue(issues, {
      severity: 'P2',
      category: 'chunkability',
      issue: 'large_file',
      source: file,
      detail: `File has about ${metrics.wordCount} words.`,
      recommendation: 'Consider splitting or adding stronger section summaries.',
    });
  }

  for (const table of tables) {
    if (table.rows > 80 || table.columns > 8) {
      addIssue(issues, {
        severity: table.rows > 150 || table.columns > 12 ? 'P2' : 'P3',
        category: 'chunkability',
        issue: 'large_markdown_table',
        source: file,
        line: table.start,
        detail: `Table has ${table.rows} data rows and ${table.columns} columns.`,
        recommendation: 'Add a short prose summary before large tables and consider splitting very large tables.',
      });
    }

    for (const inconsistent of table.inconsistent.slice(0, 3)) {
      addIssue(issues, {
        severity: 'P2',
        category: 'markdown-validity',
        issue: 'table_inconsistent_columns',
        source: file,
        line: inconsistent.line,
        detail: `Table row has ${inconsistent.cells} cells; header has ${table.columns}.`,
        recommendation: 'Fix the table so Markdown parsers preserve the row structure.',
      });
    }

    const header = normalizeText(table.header);
    if (/\b(parameter|field|property|attribute)\b/.test(header) && !/\b(description|type|required)\b/.test(header)) {
      addIssue(issues, {
        severity: 'P3',
        category: 'code-api-readability',
        issue: 'parameter_table_missing_expected_columns',
        source: file,
        line: table.start,
        detail: `Parameter-like table header is: ${table.header}`,
        recommendation: 'For API and parameter tables, include clear type, required, and description columns where applicable.',
      });
    }
  }

  for (const link of links) {
    const label = normalizeText(link.label);
    if (link.isImage) {
      if (!label) {
        addIssue(issues, {
          severity: 'P2',
          category: 'image-context',
          issue: 'image_empty_alt_text',
          source: file,
          line: link.line,
          detail: `Image target: ${link.target}`,
          recommendation: 'Add alt text that states the meaningful UI or concept shown.',
        });
      } else if (genericAltTexts.has(label)) {
        addIssue(issues, {
          severity: 'P3',
          category: 'image-context',
          issue: 'image_generic_alt_text',
          source: file,
          line: link.line,
          detail: `Alt text is: ${link.label}`,
          recommendation: 'Replace generic alt text with the specific visual meaning.',
        });
      }
      continue;
    }

    if (weakLinkTexts.has(label)) {
      addIssue(issues, {
        severity: 'P2',
        category: 'link-text-quality',
        issue: 'weak_link_text',
        source: file,
        line: link.line,
        detail: `Link text "${link.label}" points to ${link.target}.`,
        recommendation: 'Replace weak link text with the target topic or action name.',
      });
    }

    if (label) {
      const key = label;
      if (!linkTextIndex.has(key)) {
        linkTextIndex.set(key, []);
      }
      linkTextIndex.get(key).push({
        source: file,
        line: link.line,
        target: link.target,
        label: link.label,
      });
    }
  }

  const hash = bodyHash(text);
  if (hash) {
    duplicateBodyIndex.set(hash, [...(duplicateBodyIndex.get(hash) || []), file]);
  }

  return { issues, metrics, headings, links, tables };
}

function analyzeLlms(fileSet) {
  const issues = [];
  const llmsPath = path.join(repo, 'llms.txt');
  if (!fs.existsSync(llmsPath)) {
    addIssue(issues, {
      severity: 'P1',
      category: 'navigation-index',
      issue: 'llms_txt_missing',
      detail: 'The repository does not contain llms.txt.',
      recommendation: 'Add an llms.txt index for model-oriented navigation.',
    });
    return { issues, indexedFiles: new Set(), duplicateTargets: 0, missingTargets: 0 };
  }

  const lines = fs.readFileSync(llmsPath, 'utf8').split(/\r?\n/);
  const links = extractLinksFromLines(lines, 'llms.txt').filter((link) => !link.isImage);
  const indexedFiles = new Set();
  const targetRows = new Map();

  for (const link of links) {
    const resolved = resolveLocalTarget('llms.txt', link.target);
    if (!resolved || isExternalLike(link.target)) {
      continue;
    }

    indexedFiles.add(resolved);
    if (!targetRows.has(resolved)) {
      targetRows.set(resolved, []);
    }
    targetRows.get(resolved).push(link);

    if (!fileSet.has(resolved)) {
      addIssue(issues, {
        severity: 'P2',
        category: 'navigation-index',
        issue: 'llms_target_missing_file',
        source: 'llms.txt',
        line: link.line,
        detail: `llms.txt target does not resolve: ${link.target}`,
        recommendation: 'Update or remove the stale llms.txt entry.',
      });
    }
  }

  for (const [target, rows] of targetRows) {
    if (rows.length > 1) {
      addIssue(issues, {
        severity: 'P3',
        category: 'navigation-index',
        issue: 'llms_duplicate_target',
        source: 'llms.txt',
        line: rows[0].line,
        detail: `${target} appears ${rows.length} times in llms.txt.`,
        recommendation: 'Keep one canonical entry unless duplicates are intentional.',
      });
    }
  }

  for (const file of [...fileSet].filter((item) => item.startsWith(sourceDocsRoot))) {
    if (!indexedFiles.has(file)) {
      addIssue(issues, {
        severity: 'P3',
        category: 'navigation-index',
        issue: 'markdown_file_absent_from_llms_txt',
        source: file,
        detail: 'Markdown source file is not indexed in llms.txt.',
        recommendation: 'Decide whether llms.txt should be comprehensive or intentionally curated; add this file if it should be model-visible.',
      });
    }
  }

  return {
    issues,
    indexedFiles,
    duplicateTargets: [...targetRows.values()].filter((rows) => rows.length > 1).length,
    missingTargets: issues.filter((issue) => issue.issue === 'llms_target_missing_file').length,
  };
}

function countBy(rows, key) {
  return rows.reduce((acc, row) => {
    const value = row[key] || '';
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function sortedCountRows(counts) {
  return Object.entries(counts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

function renderCountTable(counts, keyLabel = 'Item') {
  const rows = sortedCountRows(counts);
  if (!rows.length) {
    return `| ${keyLabel} | Count |\n|---|---:|\n| None | 0 |\n`;
  }
  return `| ${keyLabel} | Count |\n|---|---:|\n${rows.map(([key, count]) => `| ${escapeMd(key)} | ${count} |`).join('\n')}\n`;
}

function writeReports({ markdownFiles, issues, metrics, llmsSummary }) {
  fs.mkdirSync(reportDir, { recursive: true });

  const issueOrder = { P1: 1, P2: 2, P3: 3 };
  const sortedIssues = [...issues].sort((a, b) => (
    (issueOrder[a.severity] || 9) - (issueOrder[b.severity] || 9) ||
    a.category.localeCompare(b.category) ||
    a.issue.localeCompare(b.issue) ||
    a.source.localeCompare(b.source) ||
    Number(a.line || 0) - Number(b.line || 0)
  ));

  const metricByFile = new Map(metrics.map((row) => [row.file, row]));
  for (const issue of issues) {
    const metric = metricByFile.get(issue.source);
    if (metric) {
      metric.issueCount += 1;
    }
  }

  const largestFiles = [...metrics].sort((a, b) => b.wordCount - a.wordCount).slice(0, 25);
  const highestIssueFiles = [...metrics].sort((a, b) => b.issueCount - a.issueCount || b.wordCount - a.wordCount).slice(0, 25);
  const weakLinks = sortedIssues.filter((issue) => issue.issue === 'weak_link_text').slice(0, 25);
  const markdownValidity = sortedIssues.filter((issue) => issue.category === 'markdown-validity').slice(0, 25);
  const pageIdentity = sortedIssues.filter((issue) => issue.category === 'page-identity').slice(0, 25);

  let md = '';
  md += '# LLM Readability Report\n\n';
  md += `Generated: ${new Date().toISOString()}\n\n`;
  md += `Repository: ${repo}\n\n`;
  md += '## Scope\n\n';
  md += '- Scans source Markdown files outside generated analysis artifacts.\n';
  md += '- Focuses on patterns that reduce LLM retrieval, grounding, summarization, or citation quality.\n';
  md += '- Reports mechanical findings only; some low-severity findings require human judgment before editing.\n\n';
  md += '## Summary\n\n';
  md += `- Markdown files scanned: ${markdownFiles.length}\n`;
  md += `- Issues found: ${sortedIssues.length}\n`;
  md += `- Files with at least one issue: ${new Set(sortedIssues.map((issue) => issue.source).filter(Boolean)).size}\n`;
  md += `- Files indexed by llms.txt: ${llmsSummary.indexedFiles.size}\n`;
  md += `- llms.txt missing targets: ${llmsSummary.missingTargets}\n`;
  md += `- llms.txt duplicate targets: ${llmsSummary.duplicateTargets}\n\n`;
  if (llmsSummary.indexedFiles.size < markdownFiles.length) {
    md += 'Note: `llms.txt` coverage findings are reported as P3 because a curated index may intentionally omit many source files.\n\n';
  }
  md += '### By Severity\n\n';
  md += renderCountTable(countBy(sortedIssues, 'severity'), 'Severity');
  md += '\n### By Category\n\n';
  md += renderCountTable(countBy(sortedIssues, 'category'), 'Category');
  md += '\n### By Issue Type\n\n';
  md += renderCountTable(countBy(sortedIssues, 'issue'), 'Issue');

  md += '\n## Highest Issue Files\n\n';
  md += '| File | Issues | Words | H1 | Links | Images |\n|---|---:|---:|---|---:|---:|\n';
  for (const row of highestIssueFiles) {
    md += `| ${escapeMd(row.file)} | ${row.issueCount} | ${row.wordCount} | ${escapeMd(truncate(row.h1, 100))} | ${row.linkCount} | ${row.imageCount} |\n`;
  }

  md += '\n## Largest Files\n\n';
  md += '| File | Words | Lines | Headings | H1 |\n|---|---:|---:|---:|---|\n';
  for (const row of largestFiles) {
    md += `| ${escapeMd(row.file)} | ${row.wordCount} | ${row.lineCount} | ${row.headingCount} | ${escapeMd(truncate(row.h1, 100))} |\n`;
  }

  md += '\n## Page Identity Samples\n\n';
  md += '| Severity | Issue | Source | Line | Heading | Detail |\n|---|---|---|---:|---|---|\n';
  for (const issue of pageIdentity) {
    md += `| ${issue.severity} | ${escapeMd(issue.issue)} | ${escapeMd(issue.source)} | ${issue.line || ''} | ${escapeMd(truncate(issue.heading, 100))} | ${escapeMd(truncate(issue.detail, 140))} |\n`;
  }

  md += '\n## Markdown Validity Samples\n\n';
  md += '| Severity | Issue | Source | Line | Detail |\n|---|---|---|---:|---|\n';
  for (const issue of markdownValidity) {
    md += `| ${issue.severity} | ${escapeMd(issue.issue)} | ${escapeMd(issue.source)} | ${issue.line || ''} | ${escapeMd(truncate(issue.detail, 160))} |\n`;
  }

  md += '\n## Weak Link Text Samples\n\n';
  md += '| Source | Line | Detail |\n|---|---:|---|\n';
  for (const issue of weakLinks) {
    md += `| ${escapeMd(issue.source)} | ${issue.line || ''} | ${escapeMd(truncate(issue.detail, 180))} |\n`;
  }

  md += '\n## Recommended Next Fixes\n\n';
  md += '1. Fix `P1` Markdown validity and chunkability findings first, especially unclosed fences and very large sections.\n';
  md += '2. Improve missing, duplicate, and generic H1s because they directly affect retrieval labels.\n';
  md += '3. Replace weak link text with destination-specific labels.\n';
  md += '4. Add prose summaries before large tables and image-dependent procedures.\n';
  md += '5. Review files absent from `llms.txt` and decide whether they should be indexed.\n\n';
  md += '## Output Files\n\n';
  md += `- ${rel(reportMd)}\n`;
  md += `- ${rel(issuesCsv)}\n`;
  md += `- ${rel(pageMetricsCsv)}\n`;

  fs.writeFileSync(reportMd, md, 'utf8');

  const issueHeader = ['severity', 'category', 'issue', 'source', 'line', 'heading', 'detail', 'recommendation'];
  const issueCsv = [issueHeader.map(csvCell).join(',')]
    .concat(sortedIssues.map((issue) => issueHeader.map((key) => csvCell(issue[key])).join(',')))
    .join('\n') + '\n';
  fs.writeFileSync(issuesCsv, issueCsv, 'utf8');

  const metricHeader = [
    'file',
    'h1',
    'h1_count',
    'heading_count',
    'line_count',
    'word_count',
    'link_count',
    'image_count',
    'code_fence_count',
    'missing_language_fence_count',
    'table_count',
    'html_table_count',
    'issue_count',
  ];
  const metricCsv = [metricHeader.map(csvCell).join(',')]
    .concat(metrics
      .sort((a, b) => a.file.localeCompare(b.file))
      .map((row) => [
        row.file,
        row.h1,
        row.h1Count,
        row.headingCount,
        row.lineCount,
        row.wordCount,
        row.linkCount,
        row.imageCount,
        row.codeFenceCount,
        row.missingLanguageFenceCount,
        row.tableCount,
        row.htmlTableCount,
        row.issueCount,
      ].map(csvCell).join(',')))
    .join('\n') + '\n';
  fs.writeFileSync(pageMetricsCsv, metricCsv, 'utf8');
}

function main() {
  fs.mkdirSync(reportDir, { recursive: true });
  const markdownFiles = walk(repo).sort();
  const fileSet = new Set(markdownFiles);
  const allIssues = [];
  const allMetrics = [];
  const h1Index = new Map();
  const linkTextIndex = new Map();
  const duplicateBodyIndex = new Map();

  for (const file of markdownFiles) {
    const analysis = analyzeFile(file, fileSet, h1Index, linkTextIndex, duplicateBodyIndex);
    allIssues.push(...analysis.issues);
    allMetrics.push(analysis.metrics);
  }

  for (const [h1, files] of h1Index) {
    if (h1 && files.length > 1) {
      for (const file of files) {
        addIssue(allIssues, {
          severity: 'P2',
          category: 'page-identity',
          issue: 'duplicate_h1_across_files',
          source: file,
          heading: h1,
          detail: `H1 appears in ${files.length} files.`,
          recommendation: 'Make the H1 specific enough to distinguish this page from sibling topics.',
        });
      }
    }
  }

  for (const [text, rows] of linkTextIndex) {
    const targets = new Set(rows.map((row) => row.target));
    if (targets.size >= 3 && rows.length >= 5 && text.length <= 40) {
      addIssue(allIssues, {
        severity: weakLinkTexts.has(text) ? 'P2' : 'P3',
        category: 'link-text-quality',
        issue: 'same_link_text_multiple_targets',
        detail: `"${rows[0].label}" points to ${targets.size} distinct targets across ${rows.length} links.`,
        recommendation: 'Use destination-specific link text where repeated labels could confuse retrieval.',
      });
    }
  }

  for (const [hash, files] of duplicateBodyIndex) {
    if (files.length > 1) {
      for (const file of files) {
        addIssue(allIssues, {
          severity: 'P2',
          category: 'duplication',
          issue: 'exact_duplicate_page_body',
          source: file,
          detail: `Normalized page body matches ${files.length - 1} other file(s).`,
          recommendation: 'Confirm whether duplicated pages are intentional; consolidate or differentiate if not.',
        });
      }
    }
  }

  const llmsSummary = analyzeLlms(fileSet);
  allIssues.push(...llmsSummary.issues);

  writeReports({
    markdownFiles,
    issues: allIssues,
    metrics: allMetrics,
    llmsSummary,
  });

  console.log(JSON.stringify({
    markdownFiles: markdownFiles.length,
    issues: allIssues.length,
    bySeverity: countBy(allIssues, 'severity'),
    byCategory: countBy(allIssues, 'category'),
    topIssues: Object.fromEntries(sortedCountRows(countBy(allIssues, 'issue')).slice(0, 20)),
    llms: {
      indexedFiles: llmsSummary.indexedFiles.size,
      duplicateTargets: llmsSummary.duplicateTargets,
      missingTargets: llmsSummary.missingTargets,
    },
    reports: [
      rel(reportMd),
      rel(issuesCsv),
      rel(pageMetricsCsv),
    ],
  }, null, 2));
}

main();
