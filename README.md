# Awesome OpenSpec [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of awesome OpenSpec resources, tools, and Spec-Driven Development (SDD) resources.

[OpenSpec](https://github.com/Fission-AI/OpenSpec/) is a lightweight,
open-source spec-driven development framework that helps AI coding assistants
follow instructions more effectively. It works with 30+ tools including Claude
Code, Cursor, GitHub Copilot, and more.

## Contents

- [Official Resources](#official-resources)
- [Tools](#tools)
- [Schemas & Extensions](#schemas--extensions)
- [GitHub Actions](#github-actions)
- [Videos](#videos)
- [Articles & Tutorials](#articles--tutorials)
- [Community](#community)
- [Related Projects](#related-projects)

## Official Resources

- [OpenSpec](https://github.com/Fission-AI/OpenSpec/) - Official OpenSpec CLI. Spec-driven development (SDD) for AI coding assistants.
- [OpenSpec Website](https://openspec.dev/) - Official website with documentation and getting started guide.
- [OpenSpec Pro](https://openspec.pro/) - Additional OpenSpec resources and documentation.
- [npm Package](https://www.npmjs.com/package/@fission-ai/openspec) - Official npm package for installation.
- [Getting Started Guide](https://github.com/Fission-AI/OpenSpec/blob/main/docs/getting-started.md) - Official documentation to get started with OpenSpec.

## Tools

- [OpenSpecUI](https://github.com/jixoai/openspecui) - Web interface for OpenSpec workflows with live mode and static export support.
- [ralphy-openspec](https://github.com/wenqingyu/ralphy-openspec) - Combines OpenSpec with Ralph Loop methodology for predictable, iterative AI-assisted coding across Cursor, Claude Code, and OpenCode.
- [spec-gen](https://github.com/clay-good/spec-gen) - Reverse-engineers OpenSpec specifications from existing codebases through static analysis and LLM-powered generation.
- [OpenSpec.sh](https://github.com/biancalana/OpenSpec.sh) - Minimal POSIX shell implementation of OpenSpec CLI for environments without Node.js.

## Schemas & Extensions

- [openspec-schemas](https://github.com/intent-driven-dev/openspec-schemas) - Custom workflow schemas for OpenSpec including minimalist and event-driven templates.

## GitHub Actions

- [OpenSpec Badge Action](https://github.com/wearetechnative/openspec-badge-action) - GitHub Action that generates SVG badges displaying OpenSpec metrics.

## Videos

- [OpenSpec Video](https://www.youtube.com/watch?v=cQv3ocbsKHY) -  I Found the Simplest AI Dev Tool Ever / OpenSpec short introduction video.
- [OpenSpec: NEW Toolkit Ends Vibe Coding! 100x Better Than Vibe Coding](https://www.youtube.com/watch?v=gHkdrO6IExM) - Full tutorial by WorldofAI covering installation, initialization, and the complete OpenSpec workflow.
- [OpenSpec Video](https://www.youtube.com/watch?v=5oUmpdpbejk) - OpenSpec Changes Everything / No More Vibe Coding (Full Tutorial).

## Articles & Tutorials

- [OpenSpec on Cursor Forum](https://forum.cursor.com/t/openspec-lightweight-portable-spec-driven-framework-for-ai-coding-assistants/134052) - Community discussion about using OpenSpec with Cursor.
- [How to make AI follow your instructions more for free](https://dev.to/webdeveloperhyper/how-to-make-ai-follow-your-instructions-more-for-free-openspec-2c85) - Introduction tutorial on Dev.to.
- [OpenSpec on IntentDriven](https://intent-driven.dev/knowledge/openspec/) - Website about IntentDriven development with a strong focus on using OpenSpec.

## Community

- [Discord](https://discord.gg/YctCnvvshC) - Official OpenSpec Discord community for support and discussions.

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

## Related Projects

- [Awesome AI-Driven Development](https://github.com/eltociear/awesome-AI-driven-development) - Comprehensive curated list of 500+ AI-powered development tools, frameworks, and resources.

## Contributing

Contributions welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first.

## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the authors have waived all copyright and related or neighboring rights to this work.
