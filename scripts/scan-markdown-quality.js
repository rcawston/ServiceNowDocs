#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const repo = process.cwd();
const imageExts = new Set([
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.svg',
  '.webp',
  '.avif',
  '.bmp',
  '.ico',
  '.tif',
  '.tiff',
]);
const markdownExts = new Set(['.md', '.markdown']);
const skipDirs = new Set(['.git', 'node_modules', '.DS_Store']);
const reportDir = path.join(repo, 'analysis', 'markdown-quality');
const generatedMarkdownReports = new Set([
  'analysis/markdown-quality/LLM_READABILITY_REPORT_PLAN.md',
  'analysis/markdown-quality/broken-links-report.md',
  'analysis/markdown-quality/inline-code-anomalies-report.md',
  'analysis/markdown-quality/llm-readability-report.md',
  'analysis/markdown-quality/remaining-broken-anchor-candidates.md',
  'analysis/markdown-quality/remaining-broken-markdown-links.md',
]);

const brokenLinksMd = path.join(reportDir, 'broken-links-report.md');
const brokenLinksCsv = path.join(reportDir, 'broken-links-report.csv');
const inlineCodeMd = path.join(reportDir, 'inline-code-anomalies-report.md');
const inlineCodeCsv = path.join(reportDir, 'inline-code-anomalies-report.csv');
const anchorCandidatesMd = path.join(reportDir, 'remaining-broken-anchor-candidates.md');
const anchorCandidatesCsv = path.join(reportDir, 'remaining-broken-anchor-candidates.csv');
const remainingMarkdownMd = path.join(reportDir, 'remaining-broken-markdown-links.md');
const remainingMarkdownCsv = path.join(reportDir, 'remaining-broken-markdown-links.csv');

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

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skipDirs.has(entry.name)) {
      continue;
    }

    const absolute = path.join(dir, entry.name);
    const relative = rel(absolute);

    if (entry.isDirectory()) {
      walk(absolute, out);
    } else if (entry.isFile() && !generatedMarkdownReports.has(relative)) {
      out.push(relative);
    }
  }
  return out;
}

function isEscaped(text, index) {
  let slashCount = 0;
  for (let i = index - 1; i >= 0 && text[i] === '\\'; i--) {
    slashCount += 1;
  }
  return slashCount % 2 === 1;
}

function isFenceLine(line, state) {
  // The generated docs sometimes emit "</table>```javascript"; treat that as
  // a fence too so embedded examples do not become link candidates.
  const match = line.match(/(?:^|\s|>)(`{3,}|~{3,})/);
  if (!match) {
    return false;
  }

  const marker = match[1][0];
  const len = match[1].length;

  if (!state.marker) {
    state.marker = marker;
    state.len = len;
    return true;
  }

  if (state.marker === marker && len >= state.len) {
    state.marker = null;
    state.len = 0;
    return true;
  }

  return false;
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

function inlineCodeAnomaliesForLine(line) {
  const issues = [];
  let index = 0;

  while (index < line.length) {
    const start = line.indexOf('`', index);
    if (start === -1) {
      break;
    }

    if (isEscaped(line, start)) {
      index = start + 1;
      continue;
    }

    let endOfDelimiter = start;
    while (endOfDelimiter < line.length && line[endOfDelimiter] === '`') {
      endOfDelimiter += 1;
    }

    const delimiter = line.slice(start, endOfDelimiter);
    const end = line.indexOf(delimiter, endOfDelimiter);
    if (end === -1) {
      if (delimiter.length < 3) {
        issues.push({
          column: start + 1,
          delimiter,
          issue: delimiter.length === 1
            ? 'unmatched inline backtick'
            : 'unclosed double-backtick inline code span',
        });
      }
      break;
    }

    index = end + delimiter.length;
  }

  return issues;
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

function normalizeRefId(value) {
  return stripMdEscapes(value).trim().replace(/\s+/g, ' ').toLowerCase();
}

function collectReferenceDefinitions(lines) {
  const defs = new Map();
  const fence = { marker: null, len: 0 };

  for (let i = 0; i < lines.length; i += 1) {
    const raw = lines[i];
    if (isFenceLine(raw, fence)) {
      continue;
    }
    if (fence.marker) {
      continue;
    }

    const line = maskInlineCode(raw);
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

function lineHasInlineCodeAnomaly(line) {
  return inlineCodeAnomaliesForLine(line).length > 0;
}

function extractLinksFromFile(file) {
  const absolute = path.join(repo, file);
  const text = fs.readFileSync(absolute, 'utf8');
  const lines = text.split(/\r?\n/);
  const defs = collectReferenceDefinitions(lines);
  const links = [];
  const fence = { marker: null, len: 0 };

  function add(lineNo, syntax, isImage, target, label, raw) {
    links.push({
      source: file,
      line: lineNo,
      syntax,
      isImageSyntax: Boolean(isImage),
      target,
      label: truncate(stripMdEscapes(label || ''), 160),
      raw: truncate(raw || '', 220),
    });
  }

  for (let i = 0; i < lines.length; i += 1) {
    const rawLine = lines[i];
    const lineNo = i + 1;
    const hasInlineCodeAnomaly = lineHasInlineCodeAnomaly(rawLine);

    if (isFenceLine(rawLine, fence)) {
      continue;
    }
    if (fence.marker) {
      continue;
    }

    const line = maskInlineCode(rawLine);
    const def = line.match(/^\s{0,3}\[([^\]]+)\]:\s*(.+?)\s*$/);
    if (def) {
      const target = extractDestination(def[2]);
      if (target) {
        add(lineNo, 'reference-definition', false, target, def[1], rawLine.trim());
      }
      continue;
    }

    const htmlRe = /<(a|img|source)\b[^>]*?\s(href|src)\s*=\s*(["'])(.*?)\3/gi;
    let htmlMatch;
    while ((htmlMatch = htmlRe.exec(line)) !== null) {
      const tag = htmlMatch[1].toLowerCase();
      const attr = htmlMatch[2].toLowerCase();
      add(lineNo, `html-${tag}-${attr}`, tag === 'img' || attr === 'src', htmlMatch[4], '', rawLine.trim());
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
            add(lineNo, isImage ? 'markdown-image' : 'markdown-link', isImage, target, label, rawLine.trim());
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
            add(lineNo, isImage ? 'markdown-image-reference' : 'markdown-link-reference', isImage, defn.target, label, rawLine.trim());
          } else if (!hasInlineCodeAnomaly) {
            links.push({
              source: file,
              line: lineNo,
              syntax: isImage ? 'markdown-image-reference' : 'markdown-link-reference',
              isImageSyntax: Boolean(isImage),
              target: `[${explicit || label}]`,
              label: truncate(stripMdEscapes(label), 160),
              raw: truncate(rawLine.trim(), 220),
              unresolvedReference: true,
            });
          }
          pos = refEnd;
        }
      }
    }
  }

  return links;
}

function htmlDecodeMinimal(value) {
  return String(value ?? '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function splitLocalTarget(target) {
  let text = htmlDecodeMinimal(String(target ?? '').trim());
  if (text.startsWith('<') && text.endsWith('>')) {
    text = text.slice(1, -1).trim();
  }
  text = text.replace(/\\/g, '/');

  let fragment = '';
  const hash = text.indexOf('#');
  if (hash >= 0) {
    fragment = text.slice(hash + 1);
    text = text.slice(0, hash);
  }

  const query = text.indexOf('?');
  if (query >= 0) {
    text = text.slice(0, query);
  }

  try {
    text = decodeURI(text);
    fragment = decodeURIComponent(fragment);
  } catch {
    // Leave undecodable paths as-is.
  }

  return { pathPart: stripMdEscapes(text), fragment };
}

function mapServiceNowUrl(target) {
  let url;
  try {
    url = new URL(htmlDecodeMinimal(String(target).trim()));
  } catch {
    return null;
  }

  const host = url.hostname.toLowerCase();
  const parts = url.pathname.split('/').filter(Boolean);
  let localParts = null;

  if (
    host === 'raw.githubusercontent.com' &&
    parts.length >= 4 &&
    /^servicenow$/i.test(parts[0]) &&
    /^servicenowdocs/i.test(parts[1])
  ) {
    localParts = parts.slice(3);
  } else if (
    (host === 'github.com' || host === 'www.github.com') &&
    parts.length >= 5 &&
    /^servicenow$/i.test(parts[0]) &&
    /^servicenowdocs/i.test(parts[1]) &&
    (parts[2] === 'blob' || parts[2] === 'tree')
  ) {
    localParts = parts.slice(4);
  }

  if (!localParts) {
    return null;
  }

  const localPath = localParts.map((part) => {
    try {
      return decodeURIComponent(part);
    } catch {
      return part;
    }
  }).join('/');

  return {
    pathPart: localPath,
    fragment: url.hash ? decodeURIComponent(url.hash.slice(1)) : '',
    mappedFrom: 'ServiceNowDocs GitHub URL',
  };
}

function isExternalLike(target) {
  const text = String(target).trim();
  return /^[a-z][a-z0-9+.-]*:/i.test(text) || text.startsWith('//');
}

function classifyTarget(link, pathPart, resolvedPath) {
  const ext = path.posix.extname((pathPart || resolvedPath || '').toLowerCase());
  if (link.unresolvedReference) {
    return link.isImageSyntax ? 'image' : 'markdown';
  }
  if (link.isImageSyntax || imageExts.has(ext) || /^html-(img|source)-src$/.test(link.syntax)) {
    return 'image';
  }
  if (markdownExts.has(ext)) {
    return 'markdown';
  }
  if (!pathPart && link.target && String(link.target).startsWith('#')) {
    return 'same-page-anchor';
  }
  return 'other-local';
}

function resolveCandidate(source, pathPart) {
  const sourceDir = path.posix.dirname(source);
  let targetPath = pathPart;
  if (!targetPath) {
    return source;
  }
  if (targetPath.startsWith('/')) {
    targetPath = targetPath.slice(1);
  } else {
    targetPath = path.posix.join(sourceDir === '.' ? '' : sourceDir, targetPath);
  }
  return path.posix.normalize(targetPath).replace(/^\.\//, '');
}

function findExistingTarget(candidate, fileSet, dirSet, lowerFileMap) {
  if (!candidate || candidate === '.') {
    return { exists: true, path: '' };
  }
  if (fileSet.has(candidate)) {
    return { exists: true, path: candidate };
  }
  if (dirSet.has(candidate)) {
    return { exists: true, path: candidate, directory: true };
  }

  const ext = path.posix.extname(candidate);
  if (!ext) {
    for (const suffix of ['.md', '.markdown', '/index.md', '/README.md']) {
      const possible = candidate + suffix;
      if (fileSet.has(possible)) {
        return { exists: true, path: possible, inferred: suffix };
      }
    }
  }

  const lower = candidate.toLowerCase();
  if (lowerFileMap.has(lower)) {
    return { exists: false, caseCandidates: lowerFileMap.get(lower) };
  }

  return { exists: false };
}

function slugifyHeading(value) {
  let text = stripMdEscapes(String(value ?? ''));
  text = text.replace(/`([^`]*)`/g, '$1');
  text = text.replace(/!\[[^\]]*\]\([^)]*\)/g, '');
  text = text.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1');
  text = text.replace(/<[^>]+>/g, '');
  text = htmlDecodeMinimal(text);
  text = text.trim().toLowerCase();
  text = text.replace(/[^\p{L}\p{N}\s_-]/gu, '');
  text = text.replace(/[\s_]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  return text;
}

function createAnchorResolver(fileSet) {
  const anchorCache = new Map();

  function collectAnchors(file) {
    if (anchorCache.has(file)) {
      return anchorCache.get(file);
    }

    const anchors = new Set();
    const rows = [];
    if (!fileSet.has(file) || !markdownExts.has(path.posix.extname(file).toLowerCase())) {
      const empty = { anchors, rows };
      anchorCache.set(file, empty);
      return empty;
    }

    const text = fs.readFileSync(path.join(repo, file), 'utf8');
    const lines = text.split(/\r?\n/);
    const counts = new Map();
    const fence = { marker: null, len: 0 };

    for (let index = 0; index < lines.length; index += 1) {
      const raw = lines[index];
      const line = index + 1;

      if (isFenceLine(raw, fence)) {
        continue;
      }
      if (fence.marker) {
        continue;
      }

      let match;
      const idRe = /\bid\s*=\s*(["'])(.*?)\1/gi;
      while ((match = idRe.exec(raw)) !== null) {
        anchors.add(match[2]);
        rows.push({
          anchor: match[2],
          label: match[2],
          type: 'html-id',
          line,
        });
      }

      const nameRe = /<a\b[^>]*\bname\s*=\s*(["'])(.*?)\1/gi;
      while ((match = nameRe.exec(raw)) !== null) {
        anchors.add(match[2]);
        rows.push({
          anchor: match[2],
          label: match[2],
          type: 'html-name',
          line,
        });
      }

      const attrAnchor = raw.match(/\{#([^}\s]+)\}\s*$/);
      if (attrAnchor) {
        anchors.add(attrAnchor[1]);
        rows.push({
          anchor: attrAnchor[1],
          label: attrAnchor[1],
          type: 'explicit-anchor',
          line,
        });
      }

      const heading = raw.match(/^\s{0,3}#{1,6}\s+(.+?)\s*#*\s*$/);
      if (heading) {
        const level = raw.match(/^\s{0,3}(#{1,6})\s+/)[1].length;
        const label = heading[1].replace(/\s+\{#([^}\s]+)\}\s*$/, '');
        const base = slugifyHeading(label);
        if (base) {
          const count = counts.get(base) || 0;
          const anchor = count === 0 ? base : `${base}-${count}`;
          anchors.add(anchor);
          rows.push({
            anchor,
            label: stripMdEscapes(label).trim(),
            type: `h${level}`,
            line,
          });
          counts.set(base, count + 1);
        }
      }
    }

    const collected = { anchors, rows };
    anchorCache.set(file, collected);
    return collected;
  }

  function anchorsFor(file) {
    return collectAnchors(file).anchors;
  }

  anchorsFor.rowsFor = (file) => collectAnchors(file).rows;

  return anchorsFor;
}

function checkLink(link, context) {
  if (link.unresolvedReference) {
    return {
      ...link,
      targetKind: link.isImageSyntax ? 'image' : 'markdown',
      issue: 'missing reference definition',
      resolved: '',
    };
  }

  const mapped = mapServiceNowUrl(link.target);
  const external = isExternalLike(link.target) && !mapped;
  if (external) {
    return { ...link, targetKind: 'external', issue: null, unchecked: true, resolved: '' };
  }

  const split = mapped || splitLocalTarget(link.target);
  const pathPart = split.pathPart;
  const fragment = split.fragment || '';
  const resolvedCandidate = mapped
    ? path.posix.normalize(pathPart).replace(/^\.\//, '')
    : resolveCandidate(link.source, pathPart);
  const targetKind = classifyTarget(link, pathPart, resolvedCandidate);
  const found = findExistingTarget(
    resolvedCandidate,
    context.fileSet,
    context.dirSet,
    context.lowerFileMap,
  );

  if (!pathPart && fragment) {
    const anchors = context.anchorsFor(link.source);
    if (!anchors.has(fragment)) {
      return {
        ...link,
        targetKind,
        issue: 'missing same-page anchor',
        resolved: `${link.source}#${fragment}`,
        mappedFrom: split.mappedFrom || '',
      };
    }
    return {
      ...link,
      targetKind,
      issue: null,
      resolved: `${link.source}#${fragment}`,
      mappedFrom: split.mappedFrom || '',
    };
  }

  if (!found.exists) {
    return {
      ...link,
      targetKind,
      issue: found.caseCandidates ? 'target path case mismatch' : 'missing target file',
      resolved: resolvedCandidate,
      candidates: found.caseCandidates ? found.caseCandidates.join('; ') : '',
      mappedFrom: split.mappedFrom || '',
    };
  }

  if (fragment && markdownExts.has(path.posix.extname(found.path).toLowerCase())) {
    const anchors = context.anchorsFor(found.path);
    if (!anchors.has(fragment)) {
      return {
        ...link,
        targetKind: 'markdown',
        issue: 'missing target anchor',
        resolved: `${found.path}#${fragment}`,
        mappedFrom: split.mappedFrom || '',
      };
    }
  }

  return {
    ...link,
    targetKind,
    issue: null,
    resolved: fragment ? `${found.path}#${fragment}` : found.path,
    inferred: found.inferred || '',
    mappedFrom: split.mappedFrom || '',
  };
}

function collectInlineCodeAnomalies(markdownFiles) {
  const anomalies = [];

  for (const file of markdownFiles) {
    const lines = fs.readFileSync(path.join(repo, file), 'utf8').split(/\r?\n/);
    const fence = { marker: null, len: 0 };

    for (let i = 0; i < lines.length; i += 1) {
      const raw = lines[i];
      if (isFenceLine(raw, fence)) {
        continue;
      }
      if (fence.marker) {
        continue;
      }

      for (const issue of inlineCodeAnomaliesForLine(raw)) {
        anomalies.push({
          source: file,
          line: i + 1,
          column: issue.column,
          delimiter: issue.delimiter,
          issue: issue.issue,
          text: truncate(raw.trim(), 500),
        });
      }
    }
  }

  return anomalies;
}

function countBy(rows, key) {
  return rows.reduce((acc, row) => {
    const value = row[key];
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function renderSummaryTable(counts) {
  const rows = Object.entries(counts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  if (!rows.length) {
    return '| Item | Count |\n|---|---:|\n| None | 0 |\n';
  }
  return `| Item | Count |\n|---|---:|\n${rows.map(([key, count]) => `| ${escapeMd(key)} | ${count} |`).join('\n')}\n`;
}

function renderBrokenSection(title, rows) {
  let output = `\n## ${title}\n\nCount: ${rows.length}\n\n`;
  if (!rows.length) {
    return `${output}No broken links found in this category.\n`;
  }

  output += '| Source | Line | Target | Resolved target | Issue | Syntax | Link text / alt |\n';
  output += '|---|---:|---|---|---|---|---|\n';
  for (const row of rows) {
    output += `| ${escapeMd(row.source)} | ${row.line} | ${escapeMd(truncate(row.target, 220))} | ${escapeMd(truncate(row.resolved || row.candidates || '', 240))} | ${escapeMd(row.issue)} | ${escapeMd(row.syntax)} | ${escapeMd(truncate(row.label || '', 160))} |\n`;
  }
  return output;
}

function reportName(filePath) {
  return rel(filePath);
}

function writeBrokenLinkReports(summary) {
  const {
    markdownFiles,
    totalLinks,
    checked,
    broken,
    uncheckedExternal,
  } = summary;

  const brokenSorted = broken.sort((a, b) => (
    a.targetKind.localeCompare(b.targetKind) ||
    a.source.localeCompare(b.source) ||
    a.line - b.line ||
    String(a.target).localeCompare(String(b.target))
  ));
  const imageBroken = brokenSorted.filter((row) => row.targetKind === 'image');
  const markdownBroken = brokenSorted.filter((row) => (
    row.targetKind === 'markdown' ||
    row.targetKind === 'same-page-anchor' ||
    row.targetKind === 'reference'
  ));
  const otherBroken = brokenSorted.filter((row) => (
    row.targetKind !== 'image' &&
    row.targetKind !== 'markdown' &&
    row.targetKind !== 'same-page-anchor' &&
    row.targetKind !== 'reference'
  ));

  const filesWithBroken = new Set(broken.map((row) => row.source));
  const uniqueBrokenTargets = new Set(
    broken.map((row) => `${row.targetKind}|${row.target}|${row.resolved || ''}|${row.issue}`),
  );

  let md = '';
  md += '# Broken Link Report\n\n';
  md += `Generated: ${new Date().toISOString()}\n\n`;
  md += `Repository: ${repo}\n\n`;
  md += '## Scope\n\n';
  md += '- Scanned all source `.md` and `.markdown` files in the repository, excluding generated report files.\n';
  md += '- Checked inline Markdown links/images, reference-style link definitions/usages, and simple literal HTML `href`/`src` attributes.\n';
  md += '- Skipped fenced code blocks, including generated fences that begin immediately after an HTML tag, and inline code spans.\n';
  md += '- Validated local relative/root paths, same-page anchors, and anchors in local Markdown targets.\n';
  md += '- Treated ServiceNowDocs raw GitHub and `blob`/`tree` URLs as local-equivalent repository paths.\n';
  md += '- Did not probe third-party external URLs; they are counted as unchecked external links.\n';
  md += '- Suppressed reference-link artifacts on lines reported in the inline-code anomaly report.\n\n';
  md += '## Summary\n\n';
  md += `- Markdown files scanned: ${markdownFiles.length}\n`;
  md += `- Total target-bearing links found: ${totalLinks}\n`;
  md += `- Broken links found: ${broken.length}\n`;
  md += `- Files containing at least one broken link: ${filesWithBroken.size}\n`;
  md += `- Unique broken target/issue combinations: ${uniqueBrokenTargets.size}\n`;
  md += `- Unchecked third-party external links: ${uncheckedExternal.length}\n\n`;
  md += '### Broken Links By Target Type\n\n';
  md += renderSummaryTable(countBy(broken, 'targetKind'));
  md += '\n### Broken Links By Issue\n\n';
  md += renderSummaryTable(countBy(broken, 'issue'));
  md += renderBrokenSection('Broken Image Links', imageBroken);
  md += renderBrokenSection('Broken Markdown Links And Anchors', markdownBroken);
  md += renderBrokenSection('Broken Other Local Links', otherBroken);
  fs.writeFileSync(brokenLinksMd, md, 'utf8');

  const header = [
    'target_kind',
    'issue',
    'source',
    'line',
    'target',
    'resolved_target',
    'syntax',
    'link_text_or_alt',
    'mapped_from',
    'candidates',
  ];
  const csv = [header.map(csvCell).join(',')]
    .concat(brokenSorted.map((row) => [
      row.targetKind,
      row.issue,
      row.source,
      row.line,
      row.target,
      row.resolved || '',
      row.syntax,
      row.label || '',
      row.mappedFrom || '',
      row.candidates || '',
    ].map(csvCell).join(',')))
    .join('\n') + '\n';
  fs.writeFileSync(brokenLinksCsv, csv, 'utf8');

  return {
    checked,
    brokenSorted,
    imageBroken,
    markdownBroken,
    otherBroken,
  };
}

function writeInlineCodeReports(anomalies) {
  let md = '';
  md += '# Inline Code Anomaly Report\n\n';
  md += `Generated: ${new Date().toISOString()}\n\n`;
  md += `Repository: ${repo}\n\n`;
  md += '## Scope\n\n';
  md += '- Scanned all source `.md` and `.markdown` files in the repository, excluding generated report files.\n';
  md += '- Reported unmatched single-backtick spans and unclosed double-backtick inline spans outside fenced code blocks.\n';
  md += '- Did not report triple-backtick fence formatting issues; those are separate from inline code spans.\n\n';
  md += '## Summary\n\n';
  md += `- Inline-code anomalies found: ${anomalies.length}\n`;
  md += `- Files containing anomalies: ${new Set(anomalies.map((row) => row.source)).size}\n\n`;
  md += '### Anomalies By Issue\n\n';
  md += renderSummaryTable(countBy(anomalies, 'issue'));
  md += '\n## Inline Code Anomalies\n\n';

  if (!anomalies.length) {
    md += 'No inline-code anomalies found.\n';
  } else {
    md += '| Source | Line | Column | Issue | Delimiter | Text |\n';
    md += '|---|---:|---:|---|---|---|\n';
    for (const row of anomalies) {
      md += `| ${escapeMd(row.source)} | ${row.line} | ${row.column} | ${escapeMd(row.issue)} | ${escapeMd(row.delimiter)} | ${escapeMd(row.text)} |\n`;
    }
  }

  fs.writeFileSync(inlineCodeMd, md, 'utf8');

  const header = ['issue', 'source', 'line', 'column', 'delimiter', 'text'];
  const csv = [header.map(csvCell).join(',')]
    .concat(anomalies.map((row) => [
      row.issue,
      row.source,
      row.line,
      row.column,
      row.delimiter,
      row.text,
    ].map(csvCell).join(',')))
    .join('\n') + '\n';
  fs.writeFileSync(inlineCodeCsv, csv, 'utf8');
}

function writeRemainingMarkdownReports(markdownBroken) {
  const rows = [...markdownBroken].sort((a, b) => (
    a.issue.localeCompare(b.issue) ||
    a.source.localeCompare(b.source) ||
    a.line - b.line ||
    String(a.target).localeCompare(String(b.target))
  ));

  let md = '';
  md += '# Remaining Broken Markdown Links\n\n';
  md += `Generated: ${new Date().toISOString()}\n\n`;
  md += `Repository: ${repo}\n\n`;
  md += '## Scope\n\n';
  md += '- Excludes image links.\n';
  md += '- Excludes third-party external links.\n';
  md += '- Includes remaining broken Markdown file links, target anchors, and same-page anchors after the local path-fix pass.\n\n';
  md += '## Summary\n\n';
  md += `- Remaining broken Markdown links: ${rows.length}\n`;
  md += `- Files containing remaining broken Markdown links: ${new Set(rows.map((row) => row.source)).size}\n\n`;
  md += '### By Issue\n\n';
  md += renderSummaryTable(countBy(rows, 'issue'));
  md += '\n## Links\n\n';
  md += '| Issue | Source | Line | Target | Resolved target | Syntax | Link text |\n';
  md += '|---|---|---:|---|---|---|---|\n';
  for (const row of rows) {
    md += `| ${escapeMd(row.issue)} | ${escapeMd(row.source)} | ${row.line} | ${escapeMd(truncate(row.target, 220))} | ${escapeMd(truncate(row.resolved || '', 220))} | ${escapeMd(row.syntax)} | ${escapeMd(truncate(row.label || '', 160))} |\n`;
  }
  fs.writeFileSync(remainingMarkdownMd, md, 'utf8');

  const header = [
    'target_kind',
    'issue',
    'source',
    'line',
    'target',
    'resolved_target',
    'syntax',
    'link_text_or_alt',
    'mapped_from',
    'candidates',
  ];
  const csv = [header.map(csvCell).join(',')]
    .concat(rows.map((row) => [
      row.targetKind,
      row.issue,
      row.source,
      row.line,
      row.target,
      row.resolved || '',
      row.syntax,
      row.label || '',
      row.mappedFrom || '',
      row.candidates || '',
    ].map(csvCell).join(',')))
    .join('\n') + '\n';
  fs.writeFileSync(remainingMarkdownCsv, csv, 'utf8');
}

function normalizeTextForMatch(value) {
  return stripMdEscapes(htmlDecodeMinimal(String(value ?? '')))
    .replace(/`([^`]*)`/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');
}

function normalizedAnchorId(value) {
  return slugifyHeading(String(value ?? '').replace(/[_\s]+/g, ' '));
}

function matchTokens(value) {
  return normalizeTextForMatch(value)
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function tokenOverlap(left, right) {
  const leftTokens = new Set(matchTokens(left));
  const rightTokens = new Set(matchTokens(right));
  if (!leftTokens.size || !rightTokens.size) {
    return 0;
  }

  let intersection = 0;
  for (const token of leftTokens) {
    if (rightTokens.has(token)) {
      intersection += 1;
    }
  }

  return intersection / Math.min(leftTokens.size, rightTokens.size);
}

function levenshtein(left, right) {
  if (left === right) {
    return 0;
  }
  if (!left.length) {
    return right.length;
  }
  if (!right.length) {
    return left.length;
  }

  let previous = Array.from({ length: right.length + 1 }, (_, index) => index);
  for (let i = 0; i < left.length; i += 1) {
    const current = [i + 1];
    for (let j = 0; j < right.length; j += 1) {
      current[j + 1] = Math.min(
        current[j] + 1,
        previous[j + 1] + 1,
        previous[j] + (left[i] === right[j] ? 0 : 1),
      );
    }
    previous = current;
  }
  return previous[right.length];
}

function stringSimilarity(left, right) {
  const a = normalizeTextForMatch(left);
  const b = normalizeTextForMatch(right);
  if (!a || !b) {
    return 0;
  }
  const maxLength = Math.max(a.length, b.length);
  return maxLength ? 1 - (levenshtein(a, b) / maxLength) : 0;
}

function scoreAnchorCandidate(row, candidate, requestedAnchor) {
  const reasons = [];
  const requestedId = String(requestedAnchor || '');
  const requestedNorm = normalizedAnchorId(requestedId);
  const candidateId = String(candidate.anchor || '');
  const candidateNorm = normalizedAnchorId(candidateId);
  const linkText = normalizeTextForMatch(row.label || '');
  const candidateLabel = normalizeTextForMatch(candidate.label || candidate.anchor || '');
  const linkSlug = slugifyHeading(row.label || '');
  let score = 0;

  function record(candidateScore, reason) {
    if (candidateScore > score) {
      score = candidateScore;
    }
    if (reason) {
      reasons.push(reason);
    }
  }

  if (requestedId && requestedId === candidateId) {
    record(100, 'exact anchor id');
  } else if (requestedId && requestedId.toLowerCase() === candidateId.toLowerCase()) {
    record(100, 'case-insensitive anchor id match');
  }

  if (requestedNorm && requestedNorm === candidateNorm) {
    record(98, 'normalized requested id match');
  }

  if (linkSlug && linkSlug === candidateNorm) {
    record(97, 'link text slug equals heading anchor');
  }

  if (linkText && candidateLabel && linkText === candidateLabel) {
    record(97, 'link text equals heading text');
  }

  if (linkText && candidateLabel && candidateLabel.includes(linkText)) {
    record(88, 'heading contains link text');
  }

  if (linkText && candidateLabel && linkText.includes(candidateLabel)) {
    record(86, 'link text contains heading');
  }

  if (linkSlug && candidateNorm && candidateNorm.includes(linkSlug)) {
    record(88, 'candidate id contains link text slug');
  }

  if (linkSlug && candidateNorm && linkSlug.includes(candidateNorm)) {
    record(86, 'link text slug contains candidate id');
  }

  const linkCandidateOverlap = tokenOverlap(row.label || '', candidate.label || candidate.anchor || '');
  if (linkCandidateOverlap >= 0.75) {
    record(Math.round(70 + (linkCandidateOverlap * 10)), `link/candidate token overlap ${linkCandidateOverlap.toFixed(2)}`);
  } else if (linkCandidateOverlap >= 0.5) {
    record(Math.round(60 + (linkCandidateOverlap * 10)), `link/candidate token overlap ${linkCandidateOverlap.toFixed(2)}`);
  }

  const requestCandidateOverlap = tokenOverlap(requestedId.replace(/[-_]/g, ' '), candidateId.replace(/[-_]/g, ' '));
  if (requestCandidateOverlap >= 0.6) {
    record(Math.round(65 + (requestCandidateOverlap * 15)), `requested/candidate token overlap ${requestCandidateOverlap.toFixed(2)}`);
  }

  const linkSimilarity = stringSimilarity(row.label || '', candidate.label || candidate.anchor || '');
  if (linkSimilarity >= 0.8) {
    record(Math.round(60 + (linkSimilarity * 10)), `link/candidate text similarity ${linkSimilarity.toFixed(2)}`);
  }

  const idSimilarity = stringSimilarity(requestedNorm, candidateNorm);
  if (idSimilarity >= 0.8) {
    record(Math.round(60 + (idSimilarity * 15)), `requested/candidate id similarity ${idSimilarity.toFixed(2)}`);
  }

  return {
    ...candidate,
    score,
    reasons: [...new Set(reasons)],
  };
}

function anchorConfidence(score) {
  if (score >= 90) {
    return 'high';
  }
  if (score >= 75) {
    return 'medium';
  }
  if (score >= 60) {
    return 'low';
  }
  return 'none';
}

function splitResolvedAnchor(resolved) {
  const text = String(resolved || '');
  const hash = text.indexOf('#');
  if (hash < 0) {
    return { targetFile: text, requestedAnchor: '' };
  }
  return {
    targetFile: text.slice(0, hash),
    requestedAnchor: text.slice(hash + 1),
  };
}

function suggestedAnchorTarget(originalTarget, anchor) {
  if (!anchor) {
    return '';
  }
  const target = String(originalTarget || '');
  const hash = target.indexOf('#');
  const base = hash >= 0 ? target.slice(0, hash) : target;
  return `${base}#${anchor}`;
}

function writeAnchorCandidateReports(markdownBroken, anchorsFor) {
  const anchorRows = [...markdownBroken]
    .filter((row) => row.issue === 'missing target anchor' || row.issue === 'missing same-page anchor')
    .sort((a, b) => (
      a.issue.localeCompare(b.issue) ||
      a.source.localeCompare(b.source) ||
      a.line - b.line ||
      String(a.target).localeCompare(String(b.target))
    ));

  const rows = anchorRows.map((row) => {
    const split = splitResolvedAnchor(row.resolved);
    const targetFile = split.targetFile || row.source;
    const requestedAnchor = split.requestedAnchor || splitLocalTarget(row.target).fragment || '';
    const scored = anchorsFor.rowsFor(targetFile)
      .map((candidate) => scoreAnchorCandidate(row, candidate, requestedAnchor))
      .sort((a, b) => (
        b.score - a.score ||
        a.line - b.line ||
        String(a.anchor).localeCompare(String(b.anchor))
      ));
    const best = scored[0] || {
      anchor: '',
      label: '',
      type: '',
      line: '',
      score: 0,
      reasons: [],
    };
    const second = scored[1] || { anchor: '', score: '' };
    const confidence = anchorConfidence(best.score || 0);
    const suggested = confidence === 'none' ? '' : suggestedAnchorTarget(row.target, best.anchor);

    return {
      confidence,
      candidateScore: best.score || 0,
      issue: row.issue,
      source: row.source,
      line: row.line,
      originalTarget: row.target,
      suggestedTarget: suggested,
      resolvedTarget: row.resolved || '',
      requestedAnchor,
      targetFile,
      linkText: row.label || '',
      candidateAnchor: confidence === 'none' ? '' : best.anchor,
      candidateLabel: confidence === 'none' ? '' : best.label,
      candidateType: confidence === 'none' ? '' : best.type,
      candidateLine: confidence === 'none' ? '' : best.line,
      anchorCount: scored.length,
      reasons: confidence === 'none' ? '' : best.reasons.join('; '),
      secondCandidate: second.anchor,
      secondScore: second.score,
    };
  });

  const confidenceCounts = countBy(rows, 'confidence');
  const issueCounts = countBy(rows, 'issue');
  const targetFiles = new Set(rows.map((row) => row.targetFile).filter(Boolean));
  const high = confidenceCounts.high || 0;
  const medium = confidenceCounts.medium || 0;

  let md = '';
  md += '# Remaining Broken Anchor Candidate Report\n\n';
  md += `Generated: ${new Date().toISOString()}\n\n`;
  md += `Repository: ${repo}\n\n`;
  md += '## Scope\n\n';
  md += '- Scans the remaining `missing target anchor` and `missing same-page anchor` rows from the remaining broken Markdown links report.\n';
  md += '- Compares each requested `#anchor` with actual headings and explicit anchors in the target file.\n';
  md += '- Scores candidates using link text, heading text, anchor IDs, token overlap, and string similarity.\n';
  md += '- Suggested targets are candidates only; high scores are good automatic-fix candidates, medium scores need review.\n\n';
  md += '## Summary\n\n';
  md += `- Broken anchor links scanned: ${rows.length}\n`;
  md += `- High-confidence candidates: ${high}\n`;
  md += `- Reasonable candidates (high + medium): ${high + medium}\n`;
  md += `- Target files scanned: ${targetFiles.size}\n\n`;
  md += '### By Confidence\n\n';
  md += '| Confidence | Count |\n|---|---:|\n';
  for (const confidence of ['high', 'medium', 'low', 'none']) {
    md += `| ${confidence} | ${confidenceCounts[confidence] || 0} |\n`;
  }
  md += '\n### By Issue\n\n';
  md += renderSummaryTable(issueCounts);
  md += '\n## Candidate Links\n\n';
  md += '| Confidence | Score | Issue | Source | Line | Original target | Suggested target | Link text | Candidate label | Candidate line | Reason |\n';
  md += '|---|---:|---|---|---:|---|---|---|---|---:|---|\n';
  for (const row of rows) {
    md += `| ${escapeMd(row.confidence)} | ${row.candidateScore} | ${escapeMd(row.issue)} | ${escapeMd(row.source)} | ${row.line} | ${escapeMd(truncate(row.originalTarget, 180))} | ${escapeMd(truncate(row.suggestedTarget, 180))} | ${escapeMd(truncate(row.linkText, 120))} | ${escapeMd(truncate(row.candidateLabel, 120))} | ${row.candidateLine || ''} | ${escapeMd(truncate(row.reasons, 160))} |\n`;
  }
  fs.writeFileSync(anchorCandidatesMd, md, 'utf8');

  const header = [
    'confidence',
    'candidate_score',
    'issue',
    'source',
    'source_line',
    'original_target',
    'suggested_target',
    'resolved_target',
    'requested_anchor',
    'target_file',
    'link_text',
    'candidate_anchor',
    'candidate_label',
    'candidate_type',
    'candidate_line',
    'anchor_count',
    'reasons',
    'second_candidate',
    'second_score',
  ];
  const csv = [header.map(csvCell).join(',')]
    .concat(rows.map((row) => [
      row.confidence,
      row.candidateScore,
      row.issue,
      row.source,
      row.line,
      row.originalTarget,
      row.suggestedTarget,
      row.resolvedTarget,
      row.requestedAnchor,
      row.targetFile,
      row.linkText,
      row.candidateAnchor,
      row.candidateLabel,
      row.candidateType,
      row.candidateLine,
      row.anchorCount,
      row.reasons,
      row.secondCandidate,
      row.secondScore,
    ].map(csvCell).join(',')))
    .join('\n') + '\n';
  fs.writeFileSync(anchorCandidatesCsv, csv, 'utf8');

  return {
    scanned: rows.length,
    targetFiles: targetFiles.size,
    confidence: confidenceCounts,
    issueCounts,
    high,
    reasonable: high + medium,
  };
}

function main() {
  fs.mkdirSync(reportDir, { recursive: true });

  const allFiles = walk(repo).sort();
  const fileSet = new Set(allFiles);
  const lowerFileMap = new Map();
  for (const file of allFiles) {
    const key = file.toLowerCase();
    if (!lowerFileMap.has(key)) {
      lowerFileMap.set(key, []);
    }
    lowerFileMap.get(key).push(file);
  }

  const dirSet = new Set(['']);
  for (const file of allFiles) {
    let dir = path.posix.dirname(file);
    while (dir && dir !== '.') {
      dirSet.add(dir);
      const next = path.posix.dirname(dir);
      if (next === dir) {
        break;
      }
      dir = next;
    }
  }

  const markdownFiles = allFiles.filter((file) => markdownExts.has(path.posix.extname(file).toLowerCase()));
  const anomalies = collectInlineCodeAnomalies(markdownFiles);

  const allLinks = [];
  for (const file of markdownFiles) {
    try {
      allLinks.push(...extractLinksFromFile(file));
    } catch (error) {
      console.error(`Failed to parse ${file}: ${error.message}`);
    }
  }

  const context = {
    fileSet,
    dirSet,
    lowerFileMap,
    anchorsFor: createAnchorResolver(fileSet),
  };
  const checked = allLinks.map((link) => checkLink(link, context));
  const broken = checked.filter((link) => link.issue);
  const uncheckedExternal = checked.filter((link) => link.unchecked);

  const brokenLinkReports = writeBrokenLinkReports({
    markdownFiles,
    totalLinks: allLinks.length,
    checked,
    broken,
    uncheckedExternal,
  });
  writeRemainingMarkdownReports(brokenLinkReports.markdownBroken);
  const anchorCandidateSummary = writeAnchorCandidateReports(brokenLinkReports.markdownBroken, context.anchorsFor);
  writeInlineCodeReports(anomalies);

  console.log(JSON.stringify({
    markdownFiles: markdownFiles.length,
    totalLinks: allLinks.length,
    brokenLinks: broken.length,
    brokenByKind: countBy(broken, 'targetKind'),
    brokenByIssue: countBy(broken, 'issue'),
    uncheckedExternal: uncheckedExternal.length,
    inlineCodeAnomalies: anomalies.length,
    inlineCodeByIssue: countBy(anomalies, 'issue'),
    anchorCandidates: anchorCandidateSummary,
    reports: [
      reportName(brokenLinksMd),
      reportName(brokenLinksCsv),
      reportName(inlineCodeMd),
      reportName(inlineCodeCsv),
      reportName(anchorCandidatesMd),
      reportName(anchorCandidatesCsv),
      reportName(remainingMarkdownMd),
      reportName(remainingMarkdownCsv),
    ],
  }, null, 2));
}

main();
