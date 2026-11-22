# CLAUDE.md

Guidance for Claude Code in this repository.

## What this is

The **opsapi.org** marketing and documentation website for OpsAPI: a Next.js static
export (`output: 'export'`, `trailingSlash: true`, no `basePath`), published to GitHub
Pages and served at opsapi.org by the wslproxy edge. Read `AGENTS.md` before writing
Next.js code: this Next.js version has breaking changes.

## Related repositories

- **bwalia/opsapi** (private): the OpsAPI platform. Until 2026-11 this site lived in
  its `website/` folder; it moved here so the platform repo could go private. When
  site copy describes a feature, module, endpoint or demo, check it against that repo
  (`lapis/`, `opsapi-dashboard/`, `CLAUDE.md`, `docs/`). Don't claim anything the code
  doesn't do.
- **bwalia/daybook-website** (private): daybook.co.uk, the accountant-facing brand built
  on OpsAPI. opsapi.org's /ai-tax-filing page points practices there.

## Commands

`npm ci`, `npm run dev` (port 3110), `npm run build` (static export to `out/`).

## Deploy and hosting

- Push to `main` → `.github/workflows/pages.yml` builds, checks internal links, deploys to
  Pages (`https://bwalia.github.io/opsapi-website/`), then checks https://opsapi.org.
- Edge: Cloudflare DNS (DNS only) → `lon.pop0.uk` (lon1 + lon2) → rule
  `opsapi-website-pages`, a 305 to `https://bwalia.github.io/opsapi-website` with
  Host `bwalia.github.io`. Never add a `CNAME` file (redirect loop).
- **Keep this repo public.** GitHub Pages on the current plan needs a public repo; if it
  goes private, Pages is removed and opsapi.org goes down (it happened to daybook-website).

## Content and conventions

- Content: `src/content/*` (features, site, demo, ai-tax-filing JSON); pages in `src/app/`.
- British English, plain words, no marketing superlatives.
- Licence: all rights reserved (see `LICENSE`); OpsAPI is proprietary.
