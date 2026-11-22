# PEVO Pilot website -> Hugo

## Intent

Make the PEVO Pilot landing page maintainable by non-developers. Most changes
are text edits, done in GitHub's web editor; a few extra pages may come later.
The site keeps its current look exactly.

- **Goals:** every visible text on the page lives in a small Markdown file an
  editor can find and change without touching HTML; a commit to `main`
  rebuilds and deploys to GitHub Pages; adding a page is "add one `.md` file".
- **Non-goals:** visual redesign, multiple languages, blog/news, a
  click-to-edit CMS (Decap could be added on top later).
- **Anti-goals:** editors having to read Bootstrap markup; the rendered page
  looking different from today's.

## Approaches

- **A. One Markdown file per section (chosen).** Short labels as named
  front-matter fields, main paragraph as Markdown body; markup in templates.
- B. All text in `data/home.yaml` -- long prose in YAML is error-prone for
  non-developers and does not extend to new pages.
- C. Ready-made theme + Decap CMS -- loses the current design and needs an
  OAuth service GitHub Pages cannot host.

## Design

- **Content:** `content/_index.md` (page title/description) plus a headless
  bundle `content/home/` with one file per section: `hero.md`,
  `features.md`, `hardware.md`, `software.md`, `tech.md`, `community.md`.
  Each has `weight` (order on the page) and `layout` (which section template
  renders it). Repeating items (feature cards, list items, tech boxes) are
  front-matter lists with `icon`, `title`, `text`.
- **Site-wide text** (navbar links, GitHub/Sponsor URLs, footer lines):
  `hugo.toml` `[params]` and `[menus]`.
- **Templates:** `layouts/baseof.html`, `layouts/home.html` (loops over the
  section files by weight), `layouts/page.html` (plain page for future
  pages, same navbar/footer), one partial per section type under
  `layouts/_partials/sections/`. Markup copied 1:1 from today's fragments.
- **Assets** go to `static/`, referenced with `relURL` so the site works
  under `/pevo-web/`. Only files the page uses are kept:
  `bootstrap.min.css`, `bootstrap-icons.min.css` + `fonts/`, `style.css`,
  `bootstrap.bundle.min.js`, the two images. The other Bootstrap variants
  (`.map`, RTL, grid, non-minified, ESM; ~9 MB) are deleted.
- **`js/script.js` is removed:** Hugo assembles the page at build time, the
  community block becomes `community.md`, and the fan gets its animation
  class directly in the template.
- **Workflow:** install pinned Hugo 0.170.0 (extended), build with
  `hugo --minify --baseURL <url from configure-pages>`, upload `public/`.
- **`.gitignore`:** `public/`, `resources/_gen/`, `.hugo_build.lock`,
  `.playwright-mcp/`.
- **README:** short German "Inhalte bearbeiten" section for editors (which
  file holds which section, how to edit on GitHub, where to see a failed
  build) plus local preview with `hugo server`.

## Calls made by Claude (check these)

- The decorative code snippet in the "Regelwerk" section stays as an HTML
  field (`code_html`) to keep its colours; editors rarely need it.
- Editor guide in German, rest of README in English.
- The "Community Forum" button currently links to `https://github.com`
  (placeholder) -- kept as-is in `community.md`, flagged for the owner.

## Verification

`hugo` builds without warnings; screenshots of the old and new page
(desktop + phone width) look identical; all assets load under a
`/pevo-web/` base path.
