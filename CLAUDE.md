# CLAUDE.md

Company introduction site for Bonjac (주식회사 본작). Next.js (App Router) exported as static HTML and hosted on AWS S3.

## Company context

- Bonjac runs the fragrance brand **Selvatico** and is preparing to become a **Beauty-Tech** company.
- https://selvatico.co/ — brand page (online store)
- https://obbu.app/ — IT service page
- As a first step toward Beauty-Tech, Bonjac supported the Accord Seoul 2026 perfume fair (Seongsu, 2026-10-17) with its IT service.
- This site is the corporate page that introduces the company and links to both. Site copy is in Korean.

## Language

Always answer the user in Korean (한국어). Commit messages are in Korean too. Code and identifiers stay in English.

## Commands

- `npm run dev` — local dev server
- `npm run build` — static export to `out/`
- `npm run preview` — serve `out/` locally
- `npm run deploy` — builds with the base path cleared, then runs `aws s3 sync out/ s3://bonjac-homepage --delete`. It changes the live site: run it only when the user asks.
- GitHub Pages: pushing `develop` runs `.github/workflows/pages.yml`, which builds with `NEXT_PUBLIC_BASE_PATH=/<repo>` and publishes `out/` at `https://jay-bjkim0109.github.io/bonjac-homepage/`. The S3 build leaves that variable unset, so the site stays at the domain root there.

There are no tests or linter; verify changes with `npm run build`.

## Static export constraints

`next.config.ts` sets `output: "export"`, so there is no server at runtime. Do not add anything that needs one:

- No API routes / route handlers, Server Actions, middleware/proxy, cookies/headers, ISR or redirects/rewrites in config
- Dynamic routes need `generateStaticParams`
- `next/image` runs unoptimized (`images.unoptimized`)
- `trailingSlash: true` is required so S3 resolves `/about/` to `about/index.html` — keep it
- Forms or other dynamic behavior must call an external service from the client

## Structure

- `app/layout.tsx` — root layout and site metadata
- `app/b/page.tsx`, `app/c/page.tsx` — the two landing-page directions being compared (`/b`, `/c`), built from canvas artboards TypeB and TypeC. Both are `noindex`.
- `app/site.tsx` — parts shared by `/b` and `/c` (header, footer, store lists, Beauty-Tech section).
- `app/page.tsx` — the root renders direction C by re-exporting the `/c` page component, with no redirect; `/b` and `/c` keep their own pages. It does not take `/c`'s `noindex`, so the root is indexable.
- `app/sitemap.ts`, `app/robots.ts` — build `sitemap.xml` and `robots.txt`; the production origin they use is in `app/site-url.ts`.
- `app/asset.ts` — `asset()` puts the base path in front of files from `public/`. Use it for every image `src`; a bare `/images/...` breaks on GitHub Pages.
- `app/globals.css` — all styling; plain CSS with color tokens on `:root`. No Tailwind or UI library — keep it that way unless asked.
- `DESIGN.md` — design system (based on 29CM) and the only source of design rules. Read it before any UI change and keep `app/globals.css` in sync with it: if a value changes in one, change the other in the same edit. When it is silent on something, ask the user and add the rule there first; don't take values from the 29CM source page.
- Claude Design canvas `bonjac-hompage` (https://claude.ai/artifact/DAeNt7RR7TsVeWH3V2rk3u) — the page design the site is based on: landing-page directions A/B/C and reference boards. Not in the repo; read it with the Artifact tool as `DESIGN.md` (Design canvas) describes.
- `public/images/` — images the site uses, exported from `references/` as `DESIGN.md` (Imagery) describes. Create the folder when the first asset is added.
- `reference.md` — press coverage and notes about Bonjac. Use it, not memory, for company facts.
- `references/` — brand decks and the Accord Seoul PDF. Local only (gitignored, large files).
- `.claude/agents/bonjac-designer.md` — design-only subagent.

## Design workflow

- For a new page or section, or a visual change the user should see before it is built, delegate to the `bonjac-designer` agent. It publishes a design artifact and never edits the repository. For the landing page, give it the `bonjac-hompage` canvas URL so it revises that canvas instead of creating a new artifact.
- The designer cannot run shell commands. When a design needs an image out of a PDF in `references/`, export it to `public/images/` in the main session first and give the designer the path.
- Once the user approves the design, implement it in the main session in `app/` from the canvas artboard and following `DESIGN.md`, then run `npm run build`.
- After implementing an approved design, review the built page with `impeccable` (`audit`, `polish`) and then `unslop`, under the overrides in the Skills section of `DESIGN.md`.
- Small fixes that `DESIGN.md` already decides (a spacing value, a token, copy) go straight to code without a design pass and without the review skills.
- If the user asks for something `DESIGN.md` forbids, the designer can show it as a labeled exploration. Build it only after the user approves it and `DESIGN.md` is updated in the same change.

## Notes

- Copy in `/b` and `/c` comes from the design canvas and is a draft; the obbu description is not confirmed by the user. Company details in the footer come from the selvatico.co footer.
- S3 website hosting: index document `index.html`, error document `404.html`. There is no `app/not-found.tsx` yet, so the export ships the Next.js default 404; `DESIGN.md` (Components) has the rule for the page when it is built.
- The favicon is `app/icon.svg` (Next.js file convention) and the header logo is `public/images/bonjac-logo.svg`, both from the user's SVGs. The Open Graph image is `public/images/og-image.png`, a PNG of the icon; its URL must be absolute, so `app/layout.tsx` takes the origin from `NEXT_PUBLIC_SITE_ORIGIN` (set in `pages.yml`) or `app/site-url.ts`.
