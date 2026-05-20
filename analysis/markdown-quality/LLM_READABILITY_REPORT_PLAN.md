# LLM Readability Report Plan

## Goal

Create a repeatable quality report that identifies documentation patterns likely to reduce LLM retrieval, grounding, summarization, and citation quality.

## Scope

- Scan repository Markdown source files.
- Exclude generated analysis artifacts.
- Focus on issues that can be detected mechanically without changing technical meaning.
- Produce a human-readable Markdown report and CSV data for triage.

## Analysis Areas

### Page Identity

- Missing H1 headings.
- Multiple H1 headings in one file.
- Duplicate H1 headings across files.
- Generic H1 headings, such as `Overview`, `Configure`, `Create`, or `Example`.
- Low overlap between filename/path terms and the first H1.

### Heading Structure

- Skipped heading levels, such as H1 directly to H4.
- Duplicate heading anchors within a page.
- Generic headings repeated across the corpus.
- Very long sections with no lower-level subheadings.

### Chunkability

- Very large files that should be split or summarized carefully.
- Very large sections that exceed practical retrieval chunk sizes.
- Large Markdown tables.
- HTML tables embedded in Markdown.
- Long lists that can dominate a chunk.

### Link Text Quality

- Weak links such as `here`, `this topic`, `learn more`, or `more information`.
- Identical link text pointing to multiple different targets.
- Links where the text gives little information about the destination.

### Markdown Validity

- Unclosed fenced code blocks.
- Code fences without language tags.
- Markdown tables with inconsistent column counts.
- Raw HTML table structures.

### Image Context

- Images with empty or generic alt text.
- Text that depends on omitted visuals, such as `shown below` or `following image`.

### Navigation And Index Consistency

- Markdown files absent from `llms.txt`.
- `llms.txt` duplicate entries.
- `llms.txt` entries that do not resolve to local files.

### Duplication

- Exact duplicate normalized page bodies.
- Repeated boilerplate-heavy pages that may dilute retrieval quality.

### Code And API Readability

- Code fences without language tags.
- Parameter-like tables that are missing expected columns such as type or description.
- API or code-heavy pages with weak structure.

## Outputs

- `analysis/markdown-quality/llm-readability-report.md`
- `analysis/markdown-quality/llm-readability-issues.csv`
- `analysis/markdown-quality/llm-readability-page-metrics.csv`
- `scripts/scan-llm-readability.js`

## Initial Triage Priorities

1. Missing, duplicate, or generic H1s.
2. Very large files and sections.
3. Weak link text and repeated ambiguous link text.
4. Markdown table and fence issues.
5. Image-dependent procedural content.
