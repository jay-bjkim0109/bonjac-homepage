# CLAUDE.md

Company introduction site for Bonjac. Next.js (App Router) exported as static HTML and hosted on AWS S3.

## Language

Always answer the user in Korean (한국어). Code, identifiers, and commit messages stay in English.

## Commands

- `npm run dev` — local dev server
- `npm run build` — static export to `out/`
- `npm run preview` — serve `out/` locally
- Deploy: `aws s3 sync out/ s3://<bucket> --delete`

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
- `app/page.tsx` — the single landing page (hero, About, Services, Contact)
- `app/globals.css` — all styling; plain CSS with color tokens on `:root` and a `prefers-color-scheme: dark` override. No Tailwind or UI library — keep it that way unless asked.

## Notes

- Copy in `app/page.tsx` and the contact email are placeholders until real content is provided.
- S3 website hosting: index document `index.html`, error document `404.html`.
