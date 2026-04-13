# ci-integration Specification

## Purpose
TBD - created by archiving change add-awesome-linting. Update Purpose after archive.
## Requirements
### Requirement: GitHub Actions lint workflow
A GitHub Actions workflow SHALL run linting on every pull request targeting the main branch.

#### Scenario: PR with lint errors
- **WHEN** a pull request is opened with an unsorted section
- **THEN** the lint workflow SHALL fail and display the violations

#### Scenario: PR with no lint errors
- **WHEN** a pull request is opened with correctly formatted content
- **THEN** the lint workflow SHALL pass

