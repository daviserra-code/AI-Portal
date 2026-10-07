# AI-Portal

Source for [ai-portal.si](https://ai-portal.si): a friendly, human-edited guide to AI and super intelligence. English only.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000, drafts visible
npm run check        # typecheck + editorial content gate
npm run build        # production build, drafts hidden
SHOW_DRAFTS=1 npm run build   # preview build that includes drafts (noindex)
```

## How publishing works

Content lives in `content/` as Markdown with frontmatter:

| Folder | What | URL |
| --- | --- | --- |
| `content/articles/` | Articles; `pillar` decides the section | `/<pillar>/<file-name>` |
| `content/glossary/` | Glossary entries | `/glossary/<file-name>` |
| `content/authors/` | Named people who sign articles | `/authors/<file-name>` |
| `content/pages/` | About and the three policy pages | `/about`, `/editorial-policy`, `/ai-policy`, `/corrections` |
| `content/observatory.json` | Dated, sourced SI Observatory entries | `/super-intelligence/observatory` |

Every article starts as `status: draft`. Drafts are hidden from the production site, the sitemap, the RSS feed and `llms.txt`, and carry `noindex` in previews. Drafts arrive in a pull request, and the editor gets a Telegram message about it (`notify.yml`, needs the secrets `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID`). To publish, the editor runs the pre-publish checklist from the Editorial Handbook, removes every `[EDITOR: ...]` note, then comments `/publish` on the pull request. The Publish workflow (`publish.yml`) acts only on the repository owner's comment: it sets `status: approved` and `approvedBy` on each draft, runs the content check and the build, merges and deploys. If the check fails, it replies with the problems and publishes nothing. Editing the frontmatter by hand still works too. `npm run check:content` (also run in CI) refuses an approved article with notes or placeholders left, without sources, or with a banned AI phrase.

## Domains

All domains point at the same deployment; `next.config.ts` redirects them (308) to one canonical site:

| Domain | Goes to |
| --- | --- |
| `ai-portal.si` | the site (canonical) |
| `www.ai-portal.si` | same path on `ai-portal.si` |
| `si-portal.si` | `ai-portal.si/super-intelligence` |
| `superintelligenceobservatory.cloud` | `ai-portal.si/super-intelligence/observatory` |

## Design

Tokens and rules are in `design-system/ai-portal/MASTER.md` (curated from ui-ux-pro-max-skill) and mirrored in `app/globals.css`. The look is temporary; the logo is a text placeholder.

## Deploying

Every push to `main` runs `.github/workflows/deploy.yml`: it builds the Docker image (which also runs the content check), copies it to the Hetzner server over SSH, starts a trial container, checks it answers, then swaps it in as the `ai-portal` container on `127.0.0.1:3010`. A failed check leaves the running site untouched.

One-time setup:

1. In GitHub, Settings > Secrets and variables > Actions, add `HETZNER_HOST`, `HETZNER_USER` and `HETZNER_SSH_KEY` (a private key used only for deploys; its public half goes in that user's `~/.ssh/authorized_keys`). Add `HETZNER_PORT` only if SSH is not on 22. Until these exist the deploy job is skipped, not failed.
2. Once the domains point at the server, add `deploy/nginx-ai-portal.conf` to the server's nginx and run the certbot line in its header. If the server uses Caddy instead, a two-line `reverse_proxy 127.0.0.1:3010` site block does the same.

To redeploy without a code change, run the Deploy workflow from the Actions tab.
