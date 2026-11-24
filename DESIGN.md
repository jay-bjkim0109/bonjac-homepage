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
| border | `#dddddd` | Outlines, dividers; pressed fill of gray buttons |
| pressed | `#f4f4f4` | Pressed background of outline buttons; fill of gray buttons; hover background of a block link, a linked media card or a news panel |
| focus | `#375fff` | Focus outline (1px, 2px offset) |

Black and white are the structural colors; the grays above are the only other neutrals, and `focus` blue appears only on the focus outline. No brand accent color. Light theme only.

## Typography

Pretendard Variable (self-hosted via the `pretendard` npm package and `next/font/local`).

| Role | Size / weight / line-height |
|---|---|
| Hero headline | `clamp(40px, 8vw, 60px)` / 700 / 1.2 |
| Section title | 40px / 700 / 60px (mobile: 28px / 700 / 42px) |
| Card title | 23px / 600 / 29.9px |
| Body | 16px / 400 / 24px |
| Item title (news card) | 16px / 600 / 24px |
| Button, nav | 14px / 700 |
| Eyebrow, date | 13px / 700 / 18.2px |
| Source meta | 13px / 400 / 18.2px, `muted` |
| Footer | 12px / 400 / 16.3px |
| Card label | 11px / 700 / 15px |

- The hero headline is our own addition for a corporate landing page. It scales only inside the mobile range and is a fixed 60px from 750px up, so tablet and desktop match.
- Direction B (`/b`) follows its canvas artboard and lets the hero headline grow to 72px (`clamp(40px, 8vw, 72px)`). This holds only while the directions are compared; settle on one value when a direction is chosen.
- The card title style is also used for a lead paragraph (About in `/b`) and for the value in a fact card.
- Dates are not uppercase text, so they take the eyebrow size and weight as they are.
- Sizes are the same on mobile and tablet unless a mobile value is given.
- Eyebrow and card label are Latin text set in uppercase with no added letter-spacing. Korean text is never letter-spaced.
- Korean text breaks between words, not inside them (`word-break: keep-all`).

## Shape and spacing

- Spacing scale (inside and between components): 2, 4, 8, 16, 24, 28px
- Layout spacing (page-level only): 60px header height; section padding 80px (mobile: 60px), except Contact, a one-line section, which takes 40px on every layout; hero padding 120px (mobile: 80px)
- Radius: 0px for surfaces and cards, 4px for buttons
- No shadows

## Layout

- Three layouts: mobile, tablet and desktop. All must work fully. They are designed at 390px, 768px and 1440px, the artboard widths in the design canvas.
- Breakpoint: below 768px viewport width is mobile. That is the only breakpoint: from 768px up the layout is fluid, and desktop is the same layout grown to the full container width, with no values of its own.
- Container: max-width 1200px, centered, 24px side padding. On a viewport wider than that the page stays at 1200px and the margins grow.
- Text measure: hero lead max-width 560px; section paragraphs max-width 640px. These hold on desktop too: text does not stretch to the container width.
- Card grid: one column on mobile. From 768px up, as many equal columns as fit with a 320px minimum column width (two on tablet, up to three on desktop), 24px gap. Cards stretch to fill the row when there are fewer cards than columns.
- Type, spacing and component sizes are the same on tablet and desktop. Desktop gains width and columns, nothing else.
- Other grids use the same rule with a different minimum column width: 200px for fact cards, 260px for the four image tiles in `/c`.
- Split row: two blocks side by side with a 24px gap, each at least 320px wide; when both don't fit, they stack. A photo stays above its text when stacked. A section whose title sits beside its content (About in `/c`, Contact in `/b` and `/c`) is a split row with the title column at least 280px and the content column twice as wide. The title and the first line of the content sit on the same baseline.
- Rules: the header bottom and the footer top are 1px `ink`; dividers between sections are 1px `border`.

## Components

- **Header**: sticky at the top, white fill, 60px high, 1px `ink` bottom rule. Logo on the left, nav on the right. The logo is the wordmark image `public/images/bonjac-logo.svg` (BONJAC 本作), 28px high, in its own color `#231815`; it is not set in type. The nav stays inline on mobile (no hamburger menu) and never wraps; link gap 24px (mobile: 16px). When the links don't fit beside the logo (the five-link nav of `/b` and `/c` on mobile), the logo stays fixed and the nav scrolls sideways by drag, with no scrollbar, arrows or fade: the link cut off at the right edge is the cue.
- **Primary button**: black fill, white 14px/700 text, 4px radius, 52px height, 24px horizontal padding; pressed `#474747` fill
- **Outline button**: white fill, black 14px/700 text, 1px `#dddddd` border, 4px radius, 52px height, 24px horizontal padding; pressed `#f4f4f4` with `#474747` text
- **Gray button**: `#f4f4f4` fill, black 14px/700 text, no border, 4px radius, 52px height, 24px horizontal padding; pressed `#dddddd` fill. Used for the two in-page buttons under the hero (`브랜드 보기`, `뷰티테크 보기`), which carry equal weight.
- **Card**: transparent, 1px `#dddddd` border, 0px radius, 28px padding
- **Panel**: a card used for facts and news items: same border, radius and 28px padding, 8px gap between its lines. A news panel is one link (whole card), opens in a new tab, and ends with the source and a text arrow in `muted`. On hover it fills with `pressed`.
- **Media card**: 1px `#dddddd` border, 0px radius, photo flush to the top edge, then a 28px-padded body with an 8px gap: card label, card title, body copy, and an optional button. A media card that links out (ACCORD SEOUL to its obbu page, AI Scent Finder to scentid.store, both in a new tab) is one link across the whole card; on hover the card fills with `pressed` behind its text, and the photo does not change.
- **Image tile**: a photo with card label, card title and body copy under it; no border, 16px between photo and text.
- **Photo**: always cropped to a fixed ratio with `object-fit: cover`: 4:3 for brand photos, 16:9 for the store photo, 16:10 inside service cards. The full-width hero photo in `/b` is `clamp(280px, 45vw, 640px)` high.
- **Rule list**: the Stores and Online lists beside the store photo, with no box around them. A head row holds the card label alone; under it a 1px `ink` rule, then one item per row with 8px vertical padding and a 1px `border` rule below each. The two lists sit side by side (24px gap, each at least 200px wide) and stack on mobile. Stores is one block link as a whole. In Online each row is its own link to that shop (new tab): the name alone, with no arrow, and the `pressed` fill on hover.
- **Block link**: a whole block that is one link, with no underline. On hover the block fills with `pressed` (`#f4f4f4`), reaching 8px beyond the text on every side; the text keeps its position and colors. Used for the Stores list (label and store names), which opens the selvatico.co store page in a new tab.
- **Nav link**: black, no underline; underline on hover
- **Title link**: a section title that links out (the Selvatico title, to selvatico.co in a new tab). Same as a nav link: black, no underline; underline on hover. No arrow and no icon.
- **Text link** (a link inside body copy): black, always underlined, no hover change
- **Copy link**: the email address and phone number in Contact. Each looks like a text link (black, underlined, body size) but is a button: a click copies the value, and for one second the clicked value turns transparent and `Copied` shows in its place, centered, 13px/700, with no background fill. It appears and disappears instantly and moves nothing else. It does not open the mail or phone app. The two sit on one line with a `muted` middle dot (`·`) between them, 8px on each side, as in the footer, and wrap (8px between lines) only when the line is too narrow; the click area is 32px high.
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
- This covers the favicon and the Open Graph image too. The favicon is the user's square mark, `app/icon.svg` (its fill turns white in dark mode so it shows on a dark tab bar). The Open Graph image is `public/images/og-image.png`, an 800px PNG of the same mark on white (link previews don't render SVG); don't design a separate one until the user provides the file.
- The logo files are the user's SVGs: `public/images/bonjac-logo.svg` (wordmark, viewBox cropped to the glyphs so it lines up with the container edge) and `app/icon.svg` (square mark, viewBox cropped to the glyphs with a 2% margin).
- Images are square-cornered, with no shadows, gradients, or color overlays.
- Until assets are provided, a section works as type and rules alone; don't add placeholder visuals.
- The photos in `public/images/` now come from the design canvas, where the user's brand and event images are uploaded as assets. Download them with the Artifact tool (`action: "read"`, `path`: the 32-character id in the artboard's `/_blob/<id>` URL), then size them by the rule below.
- `references/` is local only and is never linked from the site. An image the site uses is exported from there into `public/images/` (WebP or JPEG; PNG only when transparency is needed), at twice its displayed width and no wider than 1536px, because `next/image` runs unoptimized. One exception: the full-width hero photo of `/b` (`selvatico-perfume.jpg`) spans the whole viewport, so it may be up to 2400px wide.

## Motion

- No transitions, animations, or scroll effects. State changes are instant.
- One exception: smooth scrolling for in-page anchor links (`scroll-behavior: smooth`), turned off under `prefers-reduced-motion: reduce`.

## Accessibility

- Text contrast is at least 4.5:1. Every text token above passes on `canvas`; `muted` on `pressed` also passes (about 6:1), which the hovered news panel relies on for its source line; don't put anything lighter than `muted` on `pressed`.
- Buttons and nav links have a tap target at least 44px high. Text links inside body copy are exempt, and so are the copy links in Contact (32px).
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
