# Production publishing path — blog content (VEN-156)

Status as of 2026-05-30 (CTO). This documents the **one working production
publish path** per the Astro redesign repo, what is landed, and the exact gate
that must be cleared to make blog posts reach users at a live URL.

## Scrubby (this repo) — diagnosed and scaffolded

**Current production:** `scrubby.io` is served by **legacy WordPress / LiteSpeed
(PHP 8.2)**. The Astro redesign in this repo has never been deployed. Posts added
by the daily-blog routine (Apr 13 → May 12) are built into `dist/` but 404 in
prod because nothing deploys `dist/` anywhere.

**Build health:** `npm run build` → 192 pages, all 118 blog posts. Deploy-ready.

**What is landed in this repo (CTO, within `repo,workflow` reach):**
- `.github/workflows/deploy.yml` — builds Astro on every push to `main` and
  uploads the rendered site as a CI artifact (proves the pipeline). A Pages
  deploy job is present but **dormant**, gated on repo variable
  `DEPLOY_TARGET=pages`, so it does not spam failing runs before a host exists.

**Why it is not yet live — the hard gate (NOT solvable with current access):**
GitHub Pages, the cheapest in-repo host, is **refused** on this repo:

    $ gh api -X POST repos/anirudhwalia/scrubby-website/pages -f build_type=workflow
    422  "Your current plan does not support GitHub Pages for this repository."

Cause: the owner account `anirudhwalia` is on the **Free** plan (`gh api user` →
`plan: null`) and this repo is **private**. Pages requires the repo be **public**
OR the account on **Pro/Team/Enterprise**. Separately, landing on `scrubby.io`
(not a `*.github.io` URL) requires **DNS control** of scrubby.io.

Verified the CTO agent holds **no** Netlify/Cloudflare/Vercel/DNS/WordPress
credentials in this environment (env scan empty; no `netlify`/`vercel`/`wrangler`/
`aws` CLIs). So the cutover cannot be executed from this checkout.

### Three viable shapes for Scrubby — pick ONE (decision needed)

| # | Path | New cost / change | Who must act |
|---|------|-------------------|--------------|
| A | **Make repo public** + GitHub Pages + Actions deploy | Source code becomes public (disclosure decision) | Owner approves making public; DNS owner adds CNAME for scrubby.io |
| B | **GitHub Pro** ($4/mo) + Pages (repo stays private) + Actions deploy | ~$4/mo billing | Owner upgrades billing; DNS owner adds CNAME |
| C | **External host** (Netlify / Cloudflare Pages / Vercel) build-from-repo | Host account + deploy token | Whoever holds host creds wires it; DNS owner points domain |
| D | **Publish daily posts into live WordPress** instead of Astro | none to infra | WordPress admin creds holder |

All of A/B/C also need **DNS** to reach `scrubby.io`; until then they land on a
`*.github.io` / `*.netlify.app` staging URL. D keeps the current WP frontend.

### Activation steps once a path is chosen
- **A or B:** `gh api -X POST .../pages -f build_type=workflow` →
  `gh variable set DEPLOY_TARGET --body pages` → add `public/CNAME` =
  `scrubby.io` → DNS: `CNAME`/`ALIAS` to `anirudhwalia.github.io`.
- **C:** create site from repo on the host, build cmd `npm run build`, publish
  dir `dist`; the existing `public/_redirects` + `public/_headers` are already
  Netlify/Cloudflare-format. Point DNS at the host.
- **D:** repoint the daily-blog routine at the WP REST API; this repo is not the
  prod target.

## Other 4 sites — confirm per site (not in this repo)

Each lives in its own repo / host; not checked out here, so not actionable from
this checkout. Recommended as child issues of VEN-156:
- **Vendisys** — newest real post ~Apr 13; likely redesign-not-deployed (same as
  Scrubby). Confirm repo + host.
- **CAM (getcam.io)** & **Kali (trykali.com)** — newest ~May 8; may be *deployed*
  sites whose pipeline broke May 8 (different failure — verify the pipeline, not
  a cold cutover).
- **Underfive (under5.io)** — no blog section exists at any path; decide the blog
  domain/path or confirm it has none yet (nowhere for posts to land).

## Hand-back to the daily-blog routine (CMO)
Once a path is live per site, the canonical "publish target + public URL pattern"
is: Scrubby → `https://scrubby.io/blog/<slug>/` (path A/B/C) or WP permalink (D).
The routine's live-URL-200 gate can then be re-enabled per site — and must NOT be
re-enabled for a site until one post is verified HTTP 200 at its public URL.
