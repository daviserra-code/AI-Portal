# AI-Portal design system (MASTER): "Field Notes"

Source of truth for every page. Chosen by Elgreco on 2026-10-06 from three directions built with ui-ux-pro-max-skill (https://claude.ai/artifact/Q8H1Lfbg5SEKvpbSE5mkNK). Field Notes starts from the skill's "Brutalism" style (picked by its variance-8 design system for editorial and tech blogs): visible thick borders, sharp corners, flat colour, bold type. It is softened with a hyperlegible body font, warm paper and one highlight per screen. Light and dark themes; dark follows the system setting unless the reader picks one with the header toggle (saved in localStorage).

The earlier teal/amber draft and the untouched tool output are kept for reference in GENERATED-original.md.

## Principles

- Question first: every page leads with a reader's question and answers it in the yellow "short answer" block.
- The disclosure is a brand feature: the "Checked by a human" stamp appears only on approved pieces ("Awaiting the editor" on drafts).
- One loud thing per screen: the sun-yellow block. Everything else is ink, paper and small pastel tags.
- No rounded corners, no gradients, no soft drop shadows. Offset hard shadows only on buttons, cards on hover, and the short answer.

## Colour tokens

| Token | Light | Dark | Use / contrast |
|---|---|---|---|
| --paper | #FFFDF6 | #14130F | page background |
| --surface | #FFFFFF | #1E1C16 | cards, table heads |
| --ink | #121212 | #F3EEE0 | text and every border (18.4:1 / 16.0:1) |
| --muted | #4A4A4A | #BDB6A4 | deks, bylines (8.7:1 / 9.2:1) |
| --hairline | #DEDAD0 | #3A372E | table row rules only |
| --sun | #FFD23F | #F2C230 | short answer, highlights; text on it is always #121212 (13.0:1 / 11.2:1) |
| --sky | #3B5BFD | #3B5BFD | primary button; white text 5.1:1 |
| --link | #2A48E8 | #9FB1FF | links (6.5:1 / 9.0:1) |
| --focus | #3B5BFD | #9FB1FF | 3 px focus outline |
| --shadow | #121212 | #F2C230 | hard offset shadows |
| --band / --on-band | #121212 / #FFFDF6 | #2A2720 / #F3EEE0 | footer, Observatory ticker |

Section tags (dark text #121212 in both themes, 11 to 13:1): Understand mint #B8F2D0, Use periwinkle #CFD8FF, Live with it pink #FFB3C7, What's new sun, Super Intelligence lilac #E3D0FF, Glossary surface.

## Type

- Display: Bricolage Grotesque 800 (500 for rare light display), letter-spacing -0.025 to -0.035em, line-height 0.95 to 1.05
- Body: Atkinson Hyperlegible 400/700, 17 px base, line-height 1.6, measure about 68ch
- Utility: JetBrains Mono 400/600, uppercase labels and tags, letter-spacing .06 to .08em

## Shape, spacing, motion

- Borders: 3 px for structure (header, hero, cards, notes), 2 px for controls and tags. Radius 0, except the speech-bubble dot in the logo.
- Spacing scale 4 / 8 / 16 / 24 / 32 / 48 / 64 px
- Motion: 120 ms lift on buttons and cards (translate -2 px, shadow grows). Nothing else moves; all off under prefers-reduced-motion.

## Logo (sketch, to be finalised by Elgreco)

Wordmark "Ai-Portal" in Bricolage Grotesque 800; the dot of the i is a small sun-yellow speech bubble with an ink outline ("AI, explained"). The accessible name stays "AI-Portal".

## Home template

1. Hero: tag (section · format), headline question, dek, sky "Read the full answer" button; right column is the yellow short answer with the stamp and editor credit
2. Notes strip: up to three more pieces in boxed columns with section tags
3. Ticker band: the two latest SI Observatory entries
4. "Find your way": section cards

## Article template (required blocks)

1. Section tag + format label, H1, dek
2. Byline between two 2 px rules: named editor, date, read time (dateModified shown when edited)
3. Short answer: yellow block, 3 px border, hard shadow; two to three sentences that answer the headline
4. Body with glossary terms linked to /glossary/<term>; bold text gets a sun underline highlight
5. Sources list
6. "How this was made": dashed box with the stamp, linking to /ai-policy

## Pre-delivery checklist (from ui-ux-pro-max, kept)

- WCAG 2.2 AA contrast in both themes, visible focus, 44 px touch targets, skip link
- SVG icons from Lucide only; no emoji icons
- Responsive at 375 / 768 / 1024 / 1440; no horizontal page scroll (the phone nav scrolls inside its own row)
- Images with width/height or aspect-ratio (CLS < 0.1), WebP/AVIF, lazy below the fold
- prefers-reduced-motion respected; nothing crawl-relevant rendered only after JS; saved theme applied before first paint
