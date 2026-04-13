# link-line-length-rule Specification

## Purpose
TBD - created by archiving change single-line-link-entries. Update Purpose after archive.
## Requirements
### Requirement: Lint rule enforces maximum list-item line length
The system SHALL provide a custom remark-lint rule named `awesome-openspec:list-item-length` that reports a warning when any list-item line in the Markdown source exceeds a configurable maximum character count. The default maximum SHALL be 150 characters. The rule SHALL only check list items that start with a Markdown link (`[text](url)`), matching the awesome-list entry format.

#### Scenario: Entry within limit passes
- **WHEN** a list-item entry is 150 characters or fewer
- **THEN** the rule SHALL NOT report a warning

#### Scenario: Entry exceeding limit fails
- **WHEN** a list-item entry is 151 characters or more
- **THEN** the rule SHALL report a warning including the actual character count and the maximum allowed

#### Scenario: Non-link list items are ignored
- **WHEN** a list item does not start with a Markdown link (e.g., a TOC entry or plain text bullet)
- **THEN** the rule SHALL NOT check its length

### Requirement: Rule is integrated into the lint pipeline
The rule SHALL be registered in `.remarkrc.js` alongside existing custom rules. Running `npm run lint` SHALL execute this rule as part of the standard lint pass.

#### Scenario: CI catches long entries
- **WHEN** a pull request adds a list-item entry exceeding the maximum length
- **THEN** `npm run lint` in CI SHALL fail with a descriptive warning

### Requirement: Existing entries comply with the limit
All list-item entries in README.md SHALL be rewritten to fit within the 150-character maximum while preserving the link target and conveying the essential purpose of each resource.

#### Scenario: All current entries pass after rewrite
- **WHEN** `npm run lint` is run against the updated README.md
- **THEN** no list-item-length warnings SHALL be reported

### Requirement: Contributing guidelines document the limit
CONTRIBUTING.md SHALL state that list-item entries must not exceed 150 characters and SHALL provide guidance on writing concise descriptions.

#### Scenario: Contributor reads formatting rules
- **WHEN** a contributor reads CONTRIBUTING.md
- **THEN** they SHALL find the 150-character limit documented alongside the existing format rules

