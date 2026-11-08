# cokoentertainment.com

The CoKo Entertainment studio site. It's built with [Astro](https://astro.build) and hosted free on GitHub Pages. The domain stays registered at Squarespace.

## Everyday use

```bash
npm install        # once
npm run dev        # live preview at http://localhost:4321 (shows drafts too)
npm run build      # build the site into dist/
```

**Post news:** add a Markdown file to `src/content/news/`. The file name becomes the address: `steam-page-is-live.md` is published at `/news/steam-page-is-live/`.

```markdown
---
title: "The Steam page is live"
date: 2026-12-01
summary: "One line that shows in the news list and RSS."
game: harness-the-elements   # optional: also lists it on the game's page
draft: false                 # true = shows in `npm run dev` only
---

Write the post here. Images can go in public/ and be linked as /my-image.png.
```

Commit and push to `main`. GitHub builds and publishes the site in about a minute.

**Shared facts** (studio email, game pitch, Steam app ID) are in `src/site.ts`. Once the Steam store page exists, put its app ID in `steamAppId`, and every "Steam page coming soon" button becomes "Wishlist on Steam".

## Layout

| Path | What it is |
| --- | --- |
| `src/pages/index.astro` | Home page |
| `src/pages/games/harness-the-elements.astro` | Game page |
| `src/pages/news/` | News list and post pages |
| `src/pages/press.astro` | Press kit (downloads are in `public/press/`) |
| `src/pages/rss.xml.ts` | RSS feed |
| `src/layouts/Base.astro` | Header, footer and meta tags shared by every page |
| `src/styles/global.css` | Colors and fonts (the game's palette) |
| `src/assets/` | Images. Astro turns these into resized WebP files at build time |

## First-time setup: publishing on GitHub Pages

1. Create a **public** repository on GitHub (free GitHub Pages needs a public repo), for example `cokoentertainment-site`, and push this folder to it.
2. In the repo, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**. The workflow in `.github/workflows/deploy.yml` then publishes every push to `main`.
3. On the same page, under **Custom domain**, enter `cokoentertainment.com` and save. (The `public/CNAME` file sets this too.)
4. Optional, but recommended: verify the domain under your GitHub account's **Settings → Pages → Add a domain**, so nobody else can claim it on GitHub. GitHub gives you a TXT record to add in Squarespace.

## DNS at Squarespace (email keeps working)

In Squarespace go to **Domains → cokoentertainment.com → DNS → DNS Settings**.

**Don't touch** the Google Workspace records. These are the **MX** records (`smtp.google.com` or `aspmx.l.google.com`...), the **TXT** records for SPF (`v=spf1 include:_spf.google.com ~all`) and Google site verification, and the **DKIM** TXT record (`google._domainkey`). Leave them exactly as they are.

**Remove** the records that point the site at Squarespace. This is usually the "Squarespace Defaults" preset: four `@` A records with `198.185.159.x` / `198.49.23.x` addresses, and a `www` CNAME to `ext-cust.squarespace.com`.

**Add:**

| Host | Type | Value |
| --- | --- | --- |
| `@` | A | `185.199.108.153` |
| `@` | A | `185.199.109.153` |
| `@` | A | `185.199.110.153` |
| `@` | A | `185.199.111.153` |
| `@` | AAAA | `2606:50c0:8000::153` |
| `@` | AAAA | `2606:50c0:8001::153` |
| `@` | AAAA | `2606:50c0:8002::153` |
| `@` | AAAA | `2606:50c0:8003::153` |
| `www` | CNAME | `<your-github-username>.github.io` |

DNS changes can take from a few minutes to a few hours to spread. Once GitHub's Pages settings show the domain check as passed, tick **Enforce HTTPS**. The certificate can take up to an hour to appear.

If you also pay for a Squarespace **website** plan, you can cancel it after the new site is live. The domain registration and its DNS are billed separately and keep working.
