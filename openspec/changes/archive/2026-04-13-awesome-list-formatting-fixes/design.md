## Context

The awesome-openspec README.md has grown organically through many additions. It now has formatting inconsistencies that violate the sindresorhus/awesome list guidelines. The CONTRIBUTING.md also contradicts the actual ordering convention used in the list.

## Goals / Non-Goals

**Goals:**
- Full compliance with awesome list PR template checklist
- Consistent formatting across all sections
- Alphabetical ordering within every section
- CONTRIBUTING.md reflects actual conventions

**Non-Goals:**
- Content changes (no adding/removing entries)
- Restructuring sections or moving entries between sections
- Changing the awesome list badge or license

## Decisions

1. **Alphabetical sorting is case-insensitive** — entries starting with lowercase (e.g., `openspec-ui`) sort alongside uppercase equivalents. This matches common awesome list conventions.

2. **Video entries get unique descriptive names** — instead of generic "OpenSpec Video", use the actual video title or a distinguishing subtitle. This improves scanability and avoids confusion.

3. **Title case for all section headers** — "OpenSpec as Integration or Plugin" rather than lowercase. Consistent with other headers in the list.

## Risks / Trade-offs

- [Reordering entries may cause merge conflicts] → Low risk since this is a small repo with few contributors. Accept the one-time churn.
- [Renaming video entries changes anchor links] → Videos section has no deep links from external sources, so safe to rename.
