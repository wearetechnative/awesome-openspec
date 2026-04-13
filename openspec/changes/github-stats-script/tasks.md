## 1. README Parsing

- [ ] 1.1 Create `scripts/fetch-github-stats.js` with main structure and CLI entry point
- [ ] 1.2 Implement README reader that tracks current `## Section` headers
- [ ] 1.3 Implement regex extraction of GitHub `owner/repo` from markdown links, capturing display name
- [ ] 1.4 Handle file-path URLs (strip `/blob/...`, `/tree/...` paths to repo root)
- [ ] 1.5 Deduplicate repos, keeping first occurrence

## 2. GitHub API Integration

- [ ] 2.1 Implement `fetchRepoData(owner, repo)` using Node.js built-in `fetch`
- [ ] 2.2 Add `GITHUB_TOKEN` support via Authorization header with startup warning if missing
- [ ] 2.3 Map API response fields to output schema (stars, pushed_at, description, language, license, topics, archived, open_issues_count)
- [ ] 2.4 Handle error cases: 404 (include with null metadata + error field), 403/rate-limit (stop and output collected data)
- [ ] 2.5 Add sequential processing loop with progress logging (`[n/total] Fetching owner/repo...`)

## 3. JSON Output

- [ ] 3.1 Create `data/` directory if missing (using `fs.mkdirSync` with `recursive: true`)
- [ ] 3.2 Assemble final JSON structure with `generated_at` timestamp and `repos` array
- [ ] 3.3 Write `data/repos.json` with 2-space indented pretty-print
- [ ] 3.4 Log summary on completion (total repos, successful, failed, output path)

## 4. Finishing

- [ ] 4.1 Add `data/repos.json` to `.gitignore` (generated file, should not be committed)
- [ ] 4.2 Test full script run with and without `GITHUB_TOKEN`
