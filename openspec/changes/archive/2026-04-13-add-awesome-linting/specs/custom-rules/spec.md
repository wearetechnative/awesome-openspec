## ADDED Requirements

### Requirement: Alphabetical ordering rule
A custom remark-lint rule SHALL verify that list entries within each awesome list section are sorted alphabetically by their link text, using case-insensitive comparison.

#### Scenario: Unsorted section triggers warning
- **WHEN** a section contains entries where "Zebra Tool" appears before "Alpha Tool"
- **THEN** the linter SHALL report a warning identifying the out-of-order entry

#### Scenario: Sorted section passes
- **WHEN** all entries in a section are alphabetically ordered by link text
- **THEN** the linter SHALL report no warnings for that section

### Requirement: Rule ignores non-list sections
The alphabetical ordering rule SHALL only check sections that contain awesome list entries (bulleted links with descriptions), skipping sections like Key Concepts and Contributing.

#### Scenario: Key Concepts section is not checked
- **WHEN** the Key Concepts section contains non-link bullet items
- **THEN** the alphabetical ordering rule SHALL not report warnings for that section
