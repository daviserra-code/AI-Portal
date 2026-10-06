# AI-Portal design system (MASTER)

Source of truth for every page. Started from ui-ux-pro-max-skill v2.15.0 (`--design-system`, News/Media category), then curated on 2026-10-06: the generated breaking-news red palette and Roboto body were replaced because they signal urgency, not friendliness. The untouched tool output is in GENERATED-original.md. Preview: https://claude.ai/artifact/UM9aYNNKAo3txUKvn88HHq

Status: draft, awaiting Elgreco's approval.

## Colour tokens

| Token | Light | Dark | Use |
|---|---|---|---|
| --bg | #FAFAF7 | #141412 | page background |
| --surface | #FFFFFF | #1C1C19 | cards, article body |
| --fg | #1C1917 | #F5F5F4 | body text (16.7:1) |
| --muted | #57534E | #A8A29E | bylines, captions (7.3:1) |
| --line | #E7E5E4 | #2E2D2A | borders, rules |
| --teal | #0F766E | #5EEAD4 | links, buttons, accent (5.2:1 on bg) |
| --teal-tint | #E6F4F2 | #12302C | "Short answer" box, chips |
| --amber | #B45309 | #FBBF24 | AI disclosure, focus ring (5.0:1) |
| --amber-tint | #FDF3E7 | #33270F | "How this was made" box |
| --on-teal | #FFFFFF | #0B2421 | text on teal buttons |

## Type

- Display: Newsreader 400/500/600 (headlines, decks)
- Body: Public Sans 400/500/600, 17-19 px reading, 15 px UI, line-height 1.6, measure about 68ch
- Utility: JetBrains Mono 400/500 (labels, dates, model names), uppercase labels letter-spacing .08em

## Spacing, radius, motion

- Spacing scale 4 / 8 / 16 / 24 / 32 / 48 / 64 px
- Radius: 8 px controls, 10 px callouts, 14 px page cards; no shadows by default
- Motion: fade only (opacity, 8-12 px offset, 300 ms), disabled under prefers-reduced-motion; never hide content until scroll

## Article template (required blocks)

1. Kicker (pillar + format), H1, dek
2. Byline: named editor, date, read time (dateModified shown when edited)
3. "Short answer" box: two to three sentences that answer the headline
4. Body with glossary terms linked to /glossary/<term>
5. "How this was made" disclosure box linking to /ai-policy
6. Sources list

## Pre-delivery checklist (from the tool, kept)

- WCAG 2.2 AA contrast, visible focus, 44 px touch targets, skip link
- SVG icons from Lucide only; no emoji icons
- Responsive at 375 / 768 / 1024 / 1440; no horizontal scroll
- Images with width/height or aspect-ratio (CLS < 0.1), WebP/AVIF, lazy below the fold
- prefers-reduced-motion respected; nothing crawl-relevant rendered only after JS
