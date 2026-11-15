import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, type Plugin } from "vite-plus";

const root = import.meta.dirname;
const partialsDir = resolve(root, "partials");

// Every top-level .html file is a page: index.html -> /, verksted.html -> /verksted
const pages = Object.fromEntries(
  readdirSync(root)
    .filter((file) => file.endsWith(".html"))
    .map((file) => [file.replace(/\.html$/, ""), resolve(root, file)]),
);

/**
 * Replaces `<!-- @include name -->` with partials/name.html, and marks the
 * nav link for the current page with aria-current="page".
 */
function partials(): Plugin {
  return {
    name: "mollbensin:partials",
    transformIndexHtml: {
      order: "pre",
      handler(html, ctx) {
        const current = ctx.path.replace(/(index)?\.html$/, "").replace(/(.)\/$/, "$1") || "/";
        return html
          .replace(/<!--\s*@include ([\w-]+)\s*-->/g, (_, name: string) =>
            readFileSync(resolve(partialsDir, `${name}.html`), "utf8"),
          )
          .replace(/\bdata-nav(\s+)href="([^"]*)"/g, (match, space: string, href: string) =>
            href === current ? `data-nav aria-current="page"${space}href="${href}"` : match,
          );
      },
    },
    configureServer(server) {
      server.watcher.add(partialsDir);
      server.watcher.on("change", (file) => {
        if (file.startsWith(partialsDir)) server.ws.send({ type: "full-reload" });
      });
    },
  };
}

export default defineConfig({
  plugins: [partials(), tailwindcss()],
  build: {
    rollupOptions: { input: pages },
  },
  fmt: {},
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
  },
});
