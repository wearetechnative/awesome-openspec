## Why

Link entries in our awesome list are 200-274 characters long, causing them to wrap onto multiple lines when rendered on GitHub. The reference awesome list (sindresorhus/awesome) keeps entries at ~60-145 characters so every link fits on a single rendered line, making the list scannable and visually clean. We need to enforce concise descriptions and add a lint rule to prevent regressions.

## What Changes

- Add a custom remark-lint rule that warns when a list-item link entry exceeds a configurable character limit (default ~150 chars).
- Shorten existing README.md descriptions that exceed the limit so every entry fits on one rendered line on GitHub (~1000px viewport).
- Update CONTRIBUTING.md to document the single-line guideline with a character budget.

## Capabilities

### New Capabilities
- `link-line-length-rule`: Custom remark-lint rule that enforces a maximum character count on list-item link entries (`- [Name](url) - Description.`), integrated into `npm run lint`.

### Modified Capabilities

_(none)_

## Impact

- `rules/` — new custom lint rule file
- `.remarkrc.js` — register the new rule
- `README.md` — rewrite long descriptions to fit within limit
- `CONTRIBUTING.md` — add guidance on description brevity
