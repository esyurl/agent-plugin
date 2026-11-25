import { definePlugin, pluginFiles, skillsFrom } from "@oiap/core";

const description =
  "Short links and trackable QR codes with esyURL: shorten URLs, render styled QR codes, change where printed or shared links point, route visitors by device or country, and read click and scan stats.";

export default definePlugin({
  manifest: {
    id: "esyurl",
    name: "esyurl",
    displayName: "esyURL",
    version: "0.1.0",
    description,
    homepage: "https://esyurl.fyi",
    repository: "https://github.com/esyurl/agent-plugin",
    license: "MIT",
    author: { name: "esyURL", url: "https://esyurl.fyi" },
    keywords: ["short-links", "url-shortener", "qr-code", "redirects", "analytics", "mcp"],
    logo: "assets/icon.png",
    categories: ["productivity"],
    supportedTargets: [
      "agent-plugins",
      "claude-code",
      "codex",
      "cursor",
      "gemini-cli",
      "antigravity",
      "github-copilot-cli",
      "vscode-copilot-chat",
    ],
    marketplace: {
      name: "esyurl",
      owner: { name: "esyURL", url: "https://esyurl.fyi" },
      description: "esyURL plugins for AI agents: short links and QR codes your agent manages.",
      entry: {
        description:
          "Short links and trackable QR codes: editable after printing, device and country routing, click and scan stats.",
      },
    },
    targetMetadata: {
      "claude-code": { privacyPolicyUrl: "https://esyurl.fyi/legal/privacy" },
      // Codex and Cursor read the same .mcp.json as Claude Code.
      codex: { mcpServers: "./.mcp.json" },
      cursor: { mcpServers: "./.mcp.json" },
    },
  },
  // The hosted esyURL MCP server; each host signs the user in when a tool first runs.
  tools: [
    {
      id: "esyurl",
      // Codex and Cursor share Claude Code's .mcp.json (see targetMetadata).
      targets: ["agent-plugins", "claude-code", "gemini-cli", "antigravity"],
      transport: "mcp-http",
      tools: [],
      server: { url: "https://esyurl.fyi/mcp" },
    },
  ],
  skills: skillsFrom("skills"),
  // The logo the manifests point at.
  resources: pluginFiles("assets", { prefix: "assets" }),
});
