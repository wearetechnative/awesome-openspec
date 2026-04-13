## ADDED Requirements

### Requirement: awesome-lint standard checks
The project SHALL include awesome-lint as a dev dependency and run its standard rule set via remark-cli.

#### Scenario: Running lint catches standard violations
- **WHEN** `npm run lint` is executed
- **THEN** awesome-lint's built-in rules (badge, contributing, license, list-item format, TOC, duplicate links) SHALL be evaluated against README.md

### Requirement: Lint script in package.json
The project SHALL provide an `npm run lint` script that runs all linting checks.

#### Scenario: Lint script exists and works
- **WHEN** a contributor runs `npm run lint`
- **THEN** remark-cli SHALL execute with the project's `.remarkrc.js` configuration
