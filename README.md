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

Every article starts as `status: draft`. Drafts are hidden from the production site, the sitemap, the RSS feed and `llms.txt`, and carry `noindex` in previews. To publish, the editor runs the pre-publish checklist from the Editorial Handbook, removes every `[EDITOR: ...]` note, then sets `status: approved` and `approvedBy: <name>`. `npm run check:content` (also run in CI) refuses an approved article with notes or placeholders left, without sources, or with a banned AI phrase.

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
