## Context

Our awesome list entries currently reach 274 characters. GitHub renders README content at roughly 1012px wide in a standard viewport, which fits approximately 120-130 monospace-equivalent characters before wrapping. The reference awesome list (sindresorhus/awesome) keeps entries under ~145 characters. We already have a custom lint rule infrastructure (`rules/`, `.remarkrc.js`, `unified-lint-rule`, `unist-util-visit`) and a CI workflow that runs `npm run lint`.

## Goals / Non-Goals

**Goals:**
- Enforce a maximum character count per list-item entry via a custom remark-lint rule
- Shorten all existing entries that exceed the limit
- Document the guideline in CONTRIBUTING.md

**Non-Goals:**
- Changing the link format itself (still `- [Name](url) - Description.`)
- Enforcing line length on non-list-item lines (headings, paragraphs, etc.)
- Pixel-perfect rendering — we use a character proxy, not actual rendered width

## Decisions

### 1. Character limit: 150 characters per list-item line

**Rationale:** sindresorhus/awesome tops out at ~145 chars. A 150-char limit gives a small buffer while still fitting comfortably within GitHub's ~1012px content area. GitHub uses a proportional font, so character count is an approximation — but URLs and code-like text (which make up most of the line) are fairly uniform width.

**Alternative considered:** 120 chars (too aggressive — would force cryptic descriptions) or 200 chars (still wraps on many viewports).

### 2. Implement as a custom remark-lint rule following existing pattern

**Rationale:** We already have `rules/alphabetical-order.js` as a pattern. The new rule follows the same structure: use `unified-lint-rule` + `unist-util-visit`, visit `listItem` nodes, stringify the content, and check length. No new dependencies needed.

**Alternative considered:** A standalone script or pre-commit hook — rejected because remark integration gives us consistent error reporting and CI integration for free.

### 3. Measure raw Markdown line length (source characters)

**Rationale:** The Markdown source is what we can lint. The rendered width depends on font, viewport, and GitHub CSS — none of which we control. Raw character count is deterministic, reproducible, and easy to understand. Since URLs are the main length driver and render as link text (shorter), the source-length limit is actually conservative.

**Alternative considered:** Measuring rendered text length (link text + description only, excluding URL) — more accurate but harder to implement and explain to contributors.

## Risks / Trade-offs

- **[Approximation]** Character count doesn't perfectly map to rendered width → Mitigation: 150 chars is conservative enough to handle proportional font variance.
- **[Description quality]** Forcing shorter descriptions may lose useful context → Mitigation: Contributors can link to more detailed docs. The awesome list format is designed for discoverability, not documentation.
- **[Long URLs]** Some entries may have long URLs that eat into the character budget → Mitigation: URL shortening is not ideal; instead, the rule could optionally exclude URL length from the count in a future iteration. For now, most GitHub URLs are reasonable length.
