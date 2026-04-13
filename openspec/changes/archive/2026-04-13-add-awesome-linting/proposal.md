## Why

Formatting issues keep creeping in as entries are added to the awesome list. A linting setup with custom rules would catch violations automatically — both in CI and when Claude is making edits. This prevents regressions on alphabetical ordering, entry format, and awesome list guidelines compliance.

## What Changes

- Add `package.json` with `awesome-lint` and `remark-cli` as dev dependencies
- Create custom remark-lint rules for project-specific checks (alphabetical ordering within sections)
- Add a `.remarkrc.js` config that composes awesome-lint's standard rules with custom rules
- Add a GitHub Actions workflow to run linting on PRs
- Add a `lint` npm script that Claude (and contributors) can run locally

## Capabilities

### New Capabilities

- `standard-linting`: Run awesome-lint's built-in checks (badge, contributing, license, list-item format, TOC, duplicate links).
- `custom-rules`: Custom remark-lint rules for alphabetical ordering of entries within sections.
- `ci-integration`: GitHub Actions workflow that runs linting on every PR targeting main.

### Modified Capabilities

## Impact

- New files: `package.json`, `.remarkrc.js`, `rules/`, `.github/workflows/lint.yml`
- New dev dependencies: `awesome-lint`, `remark-cli`, `unified-lint-rule`, `unist-util-visit`
- Contributors will see lint errors on PRs that violate formatting rules
