## Context

The awesome-openspec list has no automated linting. Formatting issues (wrong plurals, unsorted entries, duplicate names) are caught manually. The awesome-lint ecosystem provides standard checks, but project-specific rules like alphabetical ordering require custom remark-lint plugins.

## Goals / Non-Goals

**Goals:**
- Automated linting via `npm run lint` for local use and CI
- Standard awesome-lint checks out of the box
- Custom alphabetical ordering rule for list sections
- GitHub Actions workflow for PR validation

**Non-Goals:**
- Spell checking (too noisy for a list with many project names)
- Auto-fixing (lint reports only; fixes are manual or via Claude)
- Enforcing description length limits

## Decisions

1. **Use remark-cli with awesome-lint preset, not awesome-lint CLI directly**
   - awesome-lint CLI doesn't support custom config files
   - remark-cli with `.remarkrc.js` allows composing awesome-lint preset + custom rules
   - Alternative: fork awesome-lint — rejected as too heavy to maintain

2. **Write custom alphabetical rule as a local plugin in `rules/`**
   - Existing `remark-lint-alphabetize-lists` doesn't understand awesome list structure (sorts by full line including URL, not display name)
   - Local rule sorts by link text only, case-insensitive
   - Kept in-repo rather than published as npm package — simpler for a single-repo use case

3. **ESM modules throughout**
   - remark ecosystem is ESM-only
   - `package.json` uses `"type": "module"`

4. **GitHub Actions runs on PR only, not on push to main**
   - Avoids double runs when PRs are merged
   - Contributors see lint results before merge

## Risks / Trade-offs

- [awesome-lint may update rules that conflict with custom config] → Pin major version in package.json
- [Node.js required for contributors running lint locally] → Acceptable since OpenSpec CLI already requires Node.js
- [Custom rule maintenance burden] → Rule is simple (~50 lines), unlikely to need changes
