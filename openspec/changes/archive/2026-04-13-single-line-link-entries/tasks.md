## 1. Custom Lint Rule

- [x] 1.1 Create `rules/list-item-length.js` following the `alphabetical-order.js` pattern: visit `listItem` nodes, check if they start with a link, stringify the source line, warn if it exceeds 150 characters
- [x] 1.2 Register the new rule in `.remarkrc.js` alongside `alphabeticalOrder`
- [x] 1.3 Run `npm run lint` to verify the rule fires on current long entries

## 2. Shorten Existing Entries

- [x] 2.1 Rewrite all README.md list-item entries exceeding 150 characters with concise descriptions while preserving link targets and essential meaning
- [x] 2.2 Run `npm run lint` to confirm all entries pass the new rule

## 3. Documentation

- [x] 3.1 Add the 150-character limit guideline to CONTRIBUTING.md in the formatting rules section

## 4. Verification

- [x] 4.1 Run full `npm run lint` and confirm zero warnings from both the new rule and existing rules
