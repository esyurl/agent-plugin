# esyURL agent plugin

A plugin for [esyURL](https://esyurl.fyi): short links and QR codes your
agent manages. Shorten URLs, render styled QR codes, change where printed or
shared links point, route visitors by device or country, and read click and
scan stats.

## Install

| Agent | Install |
| --- | --- |
| Claude Code | `/plugin marketplace add esyurl/agent-plugin`, then `/plugin install esyurl@esyurl` |
| Codex | `codex plugin marketplace add esyurl/agent-plugin` |
| GitHub Copilot CLI | `copilot plugin marketplace add esyurl/agent-plugin` |
| VS Code | Add `esyurl/agent-plugin` to `chat.plugins.marketplaces` |
| Gemini CLI | `gemini extensions install https://github.com/esyurl/agent-plugin` |
| Antigravity | `agy plugin install https://github.com/esyurl/agent-plugin` |
| Cursor | Import `esyurl/agent-plugin` as a team marketplace |

The first time a tool runs, your agent opens esyurl.fyi in the browser to sign
in: create an account in one click, sign in with email, or paste an existing
`esy_` key. No key goes in any config file.

## What's inside

| Part | What it does |
| --- | --- |
| [MCP server](.mcp.json) | The hosted esyURL server at `https://esyurl.fyi/mcp` ([tools](https://github.com/esyurl/mcp#tools)) |
| [esyurl-short-links](skills/esyurl-short-links/SKILL.md) | Shorten URLs, custom slugs, change where a shared link points; App Store / Google Play and country, language or device routing; click and scan stats; your own domain |
| [esyurl-qr-codes](skills/esyurl-qr-codes/SKILL.md) | Trackable, editable QR codes; styled with dots, colours, a logo or a photo; PNG or SVG; one code for both app stores; scan counts |

The skills here use only the MCP server's tools, which sign in through
your agent. [esyurl/skills](https://github.com/esyurl/skills) has versions
for other agents, which call the REST API with an API key.

## Maintaining the plugin

Every host's files (`.claude-plugin/`, `.codex-plugin/`, `.cursor-plugin/`,
`plugin.json`, `gemini-extension.json`, the MCP configs and catalogs) are
generated from [`oiap.plugin.ts`](oiap.plugin.ts) with
[OIAP](https://fboldo.github.io/oiap/). Edit the skills in `skills/` or the
definition, then regenerate and commit:

```sh
npm install
npx oiap sync
```

CI fails when the committed files are out of date.

## License

MIT
