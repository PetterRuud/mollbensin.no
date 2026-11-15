# mollbensin.no

Static site for Møll Bensinstasjon / YX Holum. Plain HTML + Tailwind CSS, built with [Vite+](https://viteplus.dev) and hosted on Cloudflare Workers (static assets).

## Develop

```sh
pnpm install
pnpm dev        # local dev server
pnpm build      # build to dist/
pnpm preview    # serve dist/ through Wrangler, like production
pnpm deploy     # build and deploy to Cloudflare
```

## Structure

- `*.html`: one file per page (`verksted.html` is served at `/verksted`)
- `partials/`: shared markup, included with `<!-- @include name -->` (see `vite.config.ts`)
- `src/style.css`: Tailwind entry and theme colors
- `public/`: images, icons and `_headers`, copied as-is
- `wrangler.jsonc`: Cloudflare config
