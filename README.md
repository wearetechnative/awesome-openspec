# Awesome OpenSpec [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of awesome OpenSpec resources, tools, and Spec-Driven Development (SDD) resources.

[OpenSpec](https://github.com/Fission-AI/OpenSpec/) is a lightweight,
open-source spec-driven development framework that helps AI coding assistants
follow instructions more effectively. It works with 30+ tools including Claude
Code, Cursor, GitHub Copilot, and more.

## Contents

- [Key Concepts](#key-concepts)
- [Official Resources](#official-resources)
- [UI's](#uis)
- [Tools](#tools)
- [OpenSpec as integration or plugin](#openspec-as-integration-or-plugin)
- [Schemas & Extensions](#schemas--extensions)
- [GitHub Actions](#github-actions)
- [Videos](#videos)
- [Articles & Tutorials](#articles--tutorials)
- [Community](#community)
- [Exotic Use Cases](#exotic-use-cases)
- [Competitors & Comparisons](#competitors--comparisons)
- [Related Projects](#related-projects)

## Key Concepts

### What is Spec-Driven Development?

Spec-Driven Development (SDD) is a methodology where you and your AI coding assistant agree on what to build before any code is written. OpenSpec implements this through:

- **Proposals** - Structured change requests with technical designs
- **Specifications** - Living documentation that captures functional requirements
- **Task Checklists** - Implementation tasks with AI guidance
- **Archives** - Completed changes preserved for reference

### Core Workflow

```
/opsx:new → /opsx:ff or /opsx:continue → /opsx:apply → /opsx:verify → /opsx:archive
```

### Why OpenSpec?

- **Universal** - Works with 30+ AI coding assistants
- **Open Source** - MIT licensed, no vendor lock-in
- **No API Keys** - Runs locally without external dependencies
- **Brownfield-First** - Designed for mature codebases, not just greenfield projects
- **Persistent Context** - Specs live in your repo alongside code

## Official Resources

- [OpenSpec](https://github.com/Fission-AI/OpenSpec/) - Official OpenSpec CLI. Spec-driven development (SDD) for AI coding assistants.
- [OpenSpec Website](https://openspec.dev/) - Official website with documentation and getting started guide.
- [OpenSpec Pro](https://openspec.pro/) - Additional OpenSpec resources and documentation.
- [npm Package](https://www.npmjs.com/package/@fission-ai/openspec) - Official npm package for installation.
- [Getting Started Guide](https://github.com/Fission-AI/OpenSpec/blob/main/docs/getting-started.md) - Official documentation to get started with OpenSpec.

## UI's

- [OpenSpecUI](https://github.com/jixoai/openspecui) - Web interface for OpenSpec workflows with live mode and static export support.
- [openspec-ui](https://github.com/ToruAI/openspec-ui) - Real-time Kanban dashboard for tracking OpenSpec changes across multiple repositories, built with React and Rust.
- [Spek](https://github.com/kewang/spek) - Lightweight read-only viewer for OpenSpec content with BDD syntax highlighting, task progress tracking, and full-text search. Available as web app, VS Code extension, and IntelliJ plugin.
- [Specboard](https://github.com/sflueckiger/specboard) - Web-based dashboard for monitoring OpenSpec progress across workspaces with swimlane visualization, artifact browsing, and interactive task management.

## Tools

- [ralphy-openspec](https://github.com/wenqingyu/ralphy-openspec) - Combines OpenSpec with Ralph Loop methodology for predictable, iterative AI-assisted coding across Cursor, Claude Code, and OpenCode.
- [spec-gen](https://github.com/clay-good/spec-gen) - Reverse-engineers OpenSpec specifications from existing codebases through static analysis and LLM-powered generation.
- [OpenSpec.sh](https://github.com/biancalana/OpenSpec.sh) - Minimal POSIX shell implementation of OpenSpec CLI for environments without Node.js.
- [openspec-playwright](https://github.com/wxhou/openspec-playwright) - Integrates OpenSpec with Playwright for automated E2E testing using a three-agent pipeline (Planner, Generator, Healer) that generates and self-heals tests from specs.
- [OmniDev Kit](https://github.com/zy-eagle/omnidev-kit) - AI coding assistant enhancement toolkit combining OpenSpec with cross-session memory, project intelligence, and a structured Blueprint-Plan-Develop-Test lifecycle.

## OpenSpec as integration or plugin

- [ClawSpec](https://github.com/bytegh/clawspec) - OpenClaw plugin that brings OpenSpec workflows into chat with visible planning, durable background execution, and channel-scoped project state.
- [claude-plugin-design](https://github.com/joestump/claude-plugin-design) - Claude Code plugin for architecture governance that generates ADRs, OpenSpec-formatted specifications, sprint planning, parallel implementation via worktrees, and code review.
- [opencode-plugin-openspec](https://github.com/Octane0411/opencode-plugin-openspec) - OpenCode plugin that adds a dedicated OpenSpec Architect agent mode, enforcing spec-only writes to keep planning separate from implementation.
- [openspec-mcp](https://github.com/Lumiaqian/openspec-mcp) - MCP server exposing the full OpenSpec CLI as MCP tools for AI assistants, with a real-time web dashboard featuring Kanban board, approval workflows, and QA runner.
- [openspec-for-copilot](https://github.com/atman-33/openspec-for-copilot) - VS Code extension that integrates OpenSpec with GitHub Copilot Chat, providing spec management, prompt generation, and CodeLens-driven task execution.
- [OpenSpec-Zed](https://github.com/uwzis/OpenSpec-Zed) - Zed editor extension written in Rust that adds OpenSpec workflow slash commands to the Zed Assistant panel.
- [vitepress-plugin-openspec](https://github.com/stritti/vitepress-plugin-openspec) - VitePress plugin that renders OpenSpec folders as structured documentation pages with automatic sidebar and nav integration.
- [Flokay](https://github.com/pacaplan/flokay) - Claude Code and Cursor plugin combining OpenSpec with superpowers-inspired agent skills for a two-stage plan-then-implement workflow with subagent dispatch and automated quality gates.
- [opsx-feature-dev](https://github.com/mbertani/opsx-feature-dev) - Claude Code and Copilot plugin with a 7-phase feature development workflow (discovery through archival) using specialized explorer, architect, and reviewer agents.

## Schemas & Extensions

- [openspec-schemas](https://github.com/intent-driven-dev/openspec-schemas) - Custom workflow schemas for OpenSpec including minimalist and event-driven templates.
- [openspec-schemas by kmhalvin](https://github.com/kmhalvin/openspec-schemas) - Workflow schemas for OpenSpec including subagent-driven development for brownfield codebases and QRSPI (Questions, Research, Design, Structure, Plan, Implement) multi-phase reasoning workflows.
- [openspec-reviewed-workflow](https://github.com/griffithkk3-del/openspec-reviewed-workflow) - Workflow extension that adds an evidence-driven review gate between proposal and specs, requiring codebase verification before AI-generated designs can advance.
- [openspec-spec-driven-superpowers](https://github.com/Veath/openspec-spec-driven-superpowers) - Schema that layers superpowers-style planning, readiness gates, and verification discipline on top of the default OpenSpec command surface.

## GitHub Actions

- [OpenSpec Badge Action](https://github.com/wearetechnative/openspec-badge-action) - GitHub Action that generates SVG badges displaying OpenSpec metrics.

## Videos

- [Launch Video](https://youtu.be/N-MftbmnmMo) - An introduction to OpenSpec by Tabish Bidiwale.
- [OpenSpec Video](https://www.youtube.com/watch?v=cQv3ocbsKHY) -  I Found the Simplest AI Dev Tool Ever / OpenSpec short introduction video.
- [OpenSpec: NEW Toolkit Ends Vibe Coding! 100x Better Than Vibe Coding](https://www.youtube.com/watch?v=gHkdrO6IExM) - Full tutorial by WorldofAI covering installation, initialization, and the complete OpenSpec workflow.
- [OpenSpec Video](https://www.youtube.com/watch?v=5oUmpdpbejk) - OpenSpec Changes Everything / No More Vibe Coding (Full Tutorial).

## Articles & Tutorials

- [OpenSpec on Cursor Forum](https://forum.cursor.com/t/openspec-lightweight-portable-spec-driven-framework-for-ai-coding-assistants/134052) - Community discussion about using OpenSpec with Cursor.
- [How to make AI follow your instructions more for free](https://dev.to/webdeveloperhyper/how-to-make-ai-follow-your-instructions-more-for-free-openspec-2c85) - Introduction tutorial on Dev.to.
- [OpenSpec on IntentDriven](https://intent-driven.dev/knowledge/openspec/) - Website about IntentDriven development with a strong focus on using OpenSpec.
- [spec-compare](https://github.com/cameronsjo/spec-compare) - Research comparing six spec-driven development tools (Spec-Kit, Spec Kitty, BMad, OpenSpec, Kiro, Tessl) with decision frameworks and use-case scoring matrices.

## Community

- [Discord](https://discord.gg/YctCnvvshC) - Official OpenSpec Discord community for support and discussions.

## Exotic Use Cases

- [novel-writer-openspec](https://github.com/wordflowlab/novel-writer-openspec) - Applies OpenSpec methodology to fiction writing, treating characters, world-building, and plot as specifications with structured change proposals and validation. (Chinese)
- [OpenSpec-Video](https://github.com/mr7thing/openspec-video) - Spec-as-Code framework for AI video production that compiles structured Markdown specs into executable job queues for AI video generation models.

## Competitors & Comparisons

- [Spec-Kit](https://github.com/github/spec-kit) - GitHub's official spec-driven development toolkit with CLI, templates, directory scaffolding, and AI agent integrations.
- [Spec Kitty](https://github.com/Priivacy-ai/spec-kitty) - SDD CLI workflow for AI coding agents featuring a Kanban dashboard, git worktree isolation, and auto-merge.
- [BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD) - Agile AI-driven development framework using formal specifications (OpenAPI, JSON Schema, Gherkin) as single source of truth.
- [Kiro](https://github.com/kirodotdev/Kiro) - AWS's agentic IDE that converts natural language into structured specifications and coordinates autonomous agents.
- [Tessl SDD Tile](https://github.com/tesslio/spec-driven-development-tile) - Lightweight tile that teaches MCP-compatible AI coding agents to gather requirements and write specifications before coding.
- [Get Shit Done](https://github.com/gsd-build/get-shit-done) - Spec-driven workflow framework with multi-agent orchestration, wave-based parallel execution, and fresh-context-per-task design to prevent context rot.

## Related Projects

- [Awesome AI-Driven Development](https://github.com/eltociear/awesome-AI-driven-development) - Comprehensive curated list of 500+ AI-powered development tools, frameworks, and resources.

## Contributing

Contributions welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first.

## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the authors have waived all copyright and related or neighboring rights to this work.
