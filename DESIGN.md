# DESIGN.md

Based on the 29CM design system from https://oh-my-design.kr/design-systems/29cm (condensed). Tokens are implemented in `app/globals.css`.

This file is the only source of design rules. The source page is background on where the values came from, not a second rulebook: when this file is silent on something, don't take a value from the source page or invent one. Ask the user, then add the rule here before using it.

## Design canvas

The page design lives in the Claude Design canvas `bonjac-hompage`: https://claude.ai/artifact/DAeNt7RR7TsVeWH3V2rk3u

The canvas shows what the page looks like (structure, composition, copy); this file holds the rules (tokens, components, constraints). Read both before building or changing a page. Where they disagree, don't pick one: ask the user.

- **MainPage** page: three directions for the landing page, each as Desktop (1440px), Tablet (768px) and Mobile (390px) artboards.
  - A · 타이포 인덱스 — `project/TypeA.dc.html`
  - B · 이미지 매거진 — `project/TypeB.dc.html`
  - C · 두 축과 여정 — `project/TypeC.dc.html`
- **References** page: boards of the source material (Selvatico brand decks, the Accord Seoul 2026 deck, selvatico.co screens, the AI Scent Finder). `project/Ref*.dc.html`.
- Each `Type*.dc.html` holds the full responsive source for its direction. `Type*-Tablet.dc.html` and `Type*-Mobile.dc.html` only import it at a narrower width, so read and edit the base file.

To read it, use the Artifact tool, not a web fetch:

```
Artifact { action: "read", url: "https://claude.ai/artifact/DAeNt7RR7TsVeWH3V2rk3u", path: "project/canvas.json" }   # index: artboards, pages, notes
Artifact { action: "read", url: "https://claude.ai/artifact/DAeNt7RR7TsVeWH3V2rk3u", path: "project/TypeA.dc.html" } # one direction's source
```

The canvas is edited by hand too, so read `project/canvas.json` again each time instead of relying on the list above.

## Colors

| Token | Value | Use |
|---|---|---|
| canvas | `#ffffff` | Page background |
| ink | `#000000` | Text, primary button fill, strong rules |
| ink-secondary | `#303033` | Body copy |
| ink-tertiary | `#474747` | Pressed text of outline buttons, pressed fill of primary buttons |
| muted | `#5d5d5d` | Footer, meta |
| border | `#dddddd` | Outlines, dividers |
| pressed | `#f4f4f4` | Pressed background of outline buttons |
| focus | `#375fff` | Focus outline (1px, 2px offset) |

Black and white are the structural colors; the grays above are the only other neutrals, and `focus` blue appears only on the focus outline. No brand accent color. Light theme only.

## Typography

Pretendard Variable (self-hosted via the `pretendard` npm package and `next/font/local`).

| Role | Size / weight / line-height |
|---|---|
| Hero headline | `clamp(40px, 8vw, 60px)` / 700 / 1.2 |
| Section title | 40px / 700 / 60px (mobile: 28px / 700 / 42px) |
| Logo | 23px / 700 |
| Card title | 23px / 600 / 29.9px |
| Body | 16px / 400 / 24px |
| Button, nav | 14px / 700 |
| Eyebrow | 13px / 700 / 18.2px |
| Footer | 12px / 400 / 16.3px |
| Card label | 11px / 700 / 15px |

- The hero headline is our own addition for a corporate landing page. It scales only inside the mobile range and is a fixed 60px from 750px up, so tablet and desktop match.
- Sizes are the same on mobile and tablet unless a mobile value is given.
- Eyebrow and card label are Latin text set in uppercase with no added letter-spacing. Korean text is never letter-spaced.
- Korean text breaks between words, not inside them (`word-break: keep-all`).

## Shape and spacing

- Spacing scale (inside and between components): 2, 4, 8, 16, 24, 28px
- Layout spacing (page-level only): 60px header height; section padding 80px (mobile: 60px); hero padding 120px (mobile: 80px)
- Radius: 0px for surfaces and cards, 4px for buttons
- No shadows

## Layout

- Three layouts: mobile, tablet and desktop. All must work fully. They are designed at 390px, 768px and 1440px, the artboard widths in the design canvas.
- Breakpoint: below 768px viewport width is mobile. That is the only breakpoint: from 768px up the layout is fluid, and desktop is the same layout grown to the full container width, with no values of its own.
- Container: max-width 1200px, centered, 24px side padding. On a viewport wider than that the page stays at 1200px and the margins grow.
- Text measure: hero lead max-width 560px; section paragraphs max-width 640px. These hold on desktop too: text does not stretch to the container width.
- Card grid: one column on mobile. From 768px up, as many equal columns as fit with a 320px minimum column width (two on tablet, up to three on desktop), 24px gap. Cards stretch to fill the row when there are fewer cards than columns.
- Type, spacing and component sizes are the same on tablet and desktop. Desktop gains width and columns, nothing else.
- Rules: the header bottom and the footer top are 1px `ink`; dividers between sections are 1px `border`.

## Components

- **Header**: sticky at the top, white fill, 60px high, 1px `ink` bottom rule. Logo on the left, nav on the right. The nav stays inline on mobile (no hamburger menu); link gap 24px (mobile: 16px).
- **Primary button**: black fill, white 14px/700 text, 4px radius, 52px height, 24px horizontal padding; pressed `#474747` fill
- **Outline button**: white fill, black 14px/700 text, 1px `#dddddd` border, 4px radius, 52px height, 24px horizontal padding; pressed `#f4f4f4` with `#474747` text
- **Card**: transparent, 1px `#dddddd` border, 0px radius, 28px padding
- **Nav link**: black, no underline; underline on hover
- **Text link** (a link inside body copy): black, always underlined, no hover change
- **External link**: opens in a new tab; a button that leaves the site ends with a text arrow (`→`)
- Buttons have no hover state; pressed and focus are the only state changes.
- **Footer**: `muted` text, 28px vertical padding, 1px `ink` top rule.
- **404 page**: reuses the hero pattern and adds no new component: eyebrow `404`, hero headline, one line of body copy, one primary button back to `/`. Not built yet.
- **Form fields**: not defined. The site has no form; Contact is a mail link. A form needs a design pass and a rule here first.

## Icons

- No icons and no icon library. The page is type and rules.
- The `→` on external buttons is a text character, not an icon.

## Imagery

- Use only assets the user provides (brand PDFs in `references/`, files they hand over). Don't generate images or use stock photos or illustrations.
- This covers the favicon and the Open Graph image too: don't create either until the user provides the file.
- Images are square-cornered, with no shadows, gradients, or color overlays.
- Until assets are provided, a section works as type and rules alone; don't add placeholder visuals.
- `references/` is local only and is never linked from the site. An image the site uses is exported from there into `public/images/` (WebP or JPEG; PNG only when transparency is needed), at twice its displayed width and no wider than 1536px, because `next/image` runs unoptimized.

## Motion

- No transitions, animations, or scroll effects. State changes are instant.
- One exception: smooth scrolling for in-page anchor links (`scroll-behavior: smooth`), turned off under `prefers-reduced-motion: reduce`.

## Accessibility

- Text contrast is at least 4.5:1. Every text token above passes on `canvas`; don't put `muted` or lighter text on `pressed`.
- Buttons and nav links have a tap target at least 44px high. Text links inside body copy are exempt.
- Every interactive element shows the focus outline from Colors on `:focus-visible`. Don't remove it.
- When an accessibility finding can be fixed with the tokens and rules in this file, fix it. When the fix would need a new or changed token (for example a thicker focus outline), don't change it: tell the user what the finding needs.

## Don'ts

- Don't add accent colors, gradients, or shadows
- Don't round cards or surfaces
- Don't add motion beyond the Motion section
- Don't add icons

## Skills

Use the `impeccable` and `unslop` skills for UI work on this site. This file is the brief for both: where a skill's defaults disagree with the tokens and rules above, this file wins.

| Task | Skill | Who runs it |
|---|---|---|
| New section or page, layout, hierarchy, responsive behavior | `impeccable` (`shape`, `layout`, `adapt`) | `bonjac-designer`, while designing |
| Copy and labels | `impeccable` (`clarify`), then the `unslop` copy pass | `bonjac-designer`, while designing |
| Check that the design does not read as a template | `unslop` | `bonjac-designer`, before publishing the artifact |
| Review before shipping | `impeccable` (`audit`, `polish`), then `unslop` | Main session, on the built page after implementing an approved design |

Small fixes that this file already decides (a spacing value, a token, copy) need no skill: change the code and run the build.

### impeccable

- Treat every request as refinement of the existing system, not a redesign. Keep the 29CM identity.
- Don't run `colorize`, `bolder`, `overdrive`, `delight`, or `animate` unless the user asks for it by name. They work against the Colors and Motion rules above.
- If the user does ask for something this file forbids, the designer may show it as a labeled exploration (see `.claude/agents/bonjac-designer.md`). Nothing outside these rules goes into `app/` until the user approves it and this file is updated first.
- Don't regenerate or reformat this file with `document`, and don't write `.impeccable/design.json`, unless asked. This file intentionally stays in its current short format.

### unslop

- Run it in polish mode: fix only what the audit finds and take the direction from this file. Palette, type family, and component shapes are not open for change.
- Passes that apply as written: copy, layout.
- Passes overridden by this file:
  - **Spacing**: fix uneven spacing, but only with the values in Shape and spacing. The layout spacing values (60, 80, 120px) are intended.
  - **Color**: no tinted neutral ramp and no accent. Use the tokens in Colors as they are, including the solid `#dddddd` border.
  - **Icons**: follow Icons. Don't add an icon set or swap text for icons.
  - **Type**: keep Pretendard and the weights in Typography (600 and 700 are intended). The uppercase eyebrow and card label are intended; they carry no letter-spacing.
  - **Details**: radius stays 0px for cards and surfaces, 4px for buttons. Ignore the 8–16px radius guidance.
  - **Visuals**: don't generate a hero visual or any other image. Follow Imagery.
  - **Motion**: follow Motion. Remove anything beyond it, and don't add durations or easings from unslop's tokens.
- Light theme only, so skip anything about dark themes.
- Site copy is Korean. The copy rules still apply (no exclamation marks, no hype words, no unverified claims, no trailing period on short strings); the sentence-case rule applies only to Latin text.
