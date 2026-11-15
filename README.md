# mollbensin.no

Static site for Møll Bensinstasjon / YX Holum. Plain HTML + Tailwind CSS v4, built with [Vite+](https://viteplus.dev) and hosted on Cloudflare Workers as static assets (no Worker script).

## Develop

Requires Node and pnpm (the pinned pnpm version is downloaded automatically).

```sh
pnpm install
pnpm dev        # local dev server
pnpm check      # format and lint (Vite+)
pnpm build      # build to dist/
pnpm preview    # serve dist/ through Wrangler, like production (run build first)
pnpm deploy     # build and deploy to Cloudflare
```

## Structure

- `*.html`: one file per page, served without the extension (`verksted.html` → `/verksted`, `index.html` → `/`). `404.html` is shown for unknown URLs.
- `partials/`: shared markup (`head`, `header`, `footer`, `contact`, `map`), included with `<!-- @include name -->`.
- `src/style.css`: Tailwind entry and theme colors.
- `public/`: images, icons, `site.webmanifest` and `_headers`, copied as-is to `dist/`.
- `vite.config.ts`: build config and the small partials plugin.
- `wrangler.jsonc`: Cloudflare config.

## Adding a page

1. Create `newpage.html` in the project root. Copy an existing page to get the `head`, `header` and `footer` includes plus a `<title>` and meta description.
2. Add a nav link in `partials/header.html` with the `data-nav` attribute, e.g. `<a data-nav href="/newpage">`. The plugin marks the link for the current page with `aria-current="page"`.

Every top-level `.html` file is picked up as a build entry automatically.
