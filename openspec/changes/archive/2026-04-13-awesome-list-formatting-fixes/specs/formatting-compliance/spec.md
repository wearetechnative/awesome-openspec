## ADDED Requirements

### Requirement: Plural nouns without apostrophes
Section headers and TOC entries SHALL use correct English plurals without apostrophes (e.g., "UIs" not "UI's").

#### Scenario: UIs section header
- **WHEN** viewing the UIs section header and TOC entry
- **THEN** both SHALL read "UIs" without an apostrophe

### Requirement: Single space after dash in list entries
Every list entry SHALL have exactly one space between the dash and the opening bracket: `- [Name]`.

#### Scenario: Video entry with extra space
- **WHEN** viewing the video entry for "I Found the Simplest AI Dev Tool Ever"
- **THEN** it SHALL have exactly one space after the dash

### Requirement: Title case for section headers
All section headers SHALL use title case formatting.

#### Scenario: Integration section header
- **WHEN** viewing the integrations section header
- **THEN** it SHALL read "OpenSpec as Integration or Plugin"

### Requirement: Unique entry names
Every list entry SHALL have a unique, descriptive name that distinguishes it from other entries.

#### Scenario: Two OpenSpec video entries
- **WHEN** viewing the Videos section
- **THEN** each video entry SHALL have a distinct name based on its actual title
