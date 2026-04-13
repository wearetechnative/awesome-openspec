## 1. Project Setup

- [x] 1.1 Create `package.json` with `"type": "module"`, dev dependencies (`awesome-lint`, `remark-cli`, `unified-lint-rule`, `unist-util-visit`), and `"lint": "remark readme.md"` script
- [x] 1.2 Run `npm install` to generate `package-lock.json`
- [x] 1.3 Add `node_modules/` to `.gitignore`

## 2. Custom Rules

- [x] 2.1 Create `rules/alphabetical-order.js` — custom remark-lint rule that checks list entries are sorted alphabetically by link text (case-insensitive), skipping non-link sections

## 3. Configuration

- [x] 3.1 Create `.remarkrc.js` that composes awesome-lint preset with the custom alphabetical ordering rule

## 4. CI Integration

- [x] 4.1 Create `.github/workflows/lint.yml` — GitHub Actions workflow that runs `npm ci && npm run lint` on PRs targeting main

## 5. Verification

- [x] 5.1 Run `npm run lint` locally and verify it passes with the current README.md
- [x] 5.2 Temporarily break alphabetical order in a section and verify the custom rule catches it
