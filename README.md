# opsapi.org website

The public website for **OpsAPI** at **https://opsapi.org**: product pages, features,
architecture, the live demo guide, technotes and blog. Next.js (App Router) static
export, served from GitHub Pages behind the wslproxy edge.

## Related repositories

| Repo | What | Visibility |
|---|---|---|
| [bwalia/opsapi](https://github.com/bwalia/opsapi) | The OpsAPI platform (API, dashboard, Helm charts). This site used to live in its `website/` folder | Private |
| [bwalia/daybook-website](https://github.com/bwalia/daybook-website) | daybook.co.uk, the product site for UK accountancy practices built on OpsAPI | Private |

Links to `github.com/bwalia/opsapi` on this site are for people with access. Page copy
that describes OpsAPI must stay accurate to the code in the platform repo.

## Develop

```bash
npm ci
npm run dev        # http://localhost:3110
npm run build      # static export to out/
```

Content lives in `src/content/` (JSON and JS) and `src/app/` (pages). The brochure
source is in `brochure-src/`.

## Deploy

A push to `main` runs `.github/workflows/pages.yml`: build, check internal links,
publish to GitHub Pages (`https://bwalia.github.io/opsapi-website/`), then check the
live site through the edge.

The edge owns the hostname:

```
browser -> opsapi.org --(Cloudflare, DNS only)--> lon.pop0.uk (lon1 + lon2 wslproxy edges, Let's Encrypt)
        -> rule opsapi-website-pages: 305 to https://bwalia.github.io/opsapi-website (Host bwalia.github.io)
```

Pages has **no custom domain** (no `CNAME` file): a custom domain would redirect back
to opsapi.org in a loop. `www.opsapi.org` 301s to the apex at the edge. The site has
no `basePath`; the edge adds the `/opsapi-website` prefix. This repo must stay
**public** for GitHub Pages to serve it on the current plan.

## Licence

Copyright (c) 2000-2026 Balinder Singh Walia. All rights reserved. See [LICENSE](LICENSE). Copyright, licensing and permission enquiries: balinder.walia@gmail.com.
