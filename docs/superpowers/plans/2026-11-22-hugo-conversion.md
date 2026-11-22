# Hugo Conversion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the PEVO Pilot landing page as a Hugo site whose text lives in per-section Markdown files, deployed to GitHub Pages.

**Architecture:** Headless bundle `content/home/` holds one Markdown file per section; `layouts/home.html` renders them in `weight` order through `layouts/_partials/sections/<layout>.html`. Static assets in `static/`.

**Tech Stack:** Hugo 0.170.0, Bootstrap 5 (vendored), GitHub Actions Pages.

**Spec:** `docs/superpowers/specs/2026-11-22-hugo-conversion-design.md`

## Global Constraints

- Rendered page looks identical to the pre-Hugo version (desktop and 390px phone width).
- Every asset URL goes through `relURL`; site works under `/pevo-web/`.
- Hugo pinned to 0.170.0 locally and in CI.

## Review Focus

- Editor writes `&` or `"` in a title -> renders as text, build passes.
- Editor reorders sections by changing `weight` -> page order follows.
- Future page `content/<name>.md` -> rendered with navbar/footer, menu anchors lead back to the home page.
- Site served under `/pevo-web/` -> no 404 for CSS, JS, fonts, images.
- Broken front matter -> build fails visibly in Actions, live site unchanged.

---

### Task 1: Baseline screenshots
- [ ] Serve the current static site, screenshot full page at 1280px and 390px into the scratchpad.

### Task 2: Hugo skeleton and assets
**Files:** `hugo.toml`, `static/css/*`, `static/js/bootstrap.bundle.min.js`, `static/img/*`, `.gitignore`
- [ ] Move used assets to `static/`, delete unused Bootstrap variants, `js/script.js` and the old `*.html`.
- [ ] `hugo.toml`: baseURL `https://blappm.github.io/pevo-web/`, language `de`, title, `[params]` (brand, github, sponsor, footer), `[menus.main]` Features `/#features`, Kompatibilität `/#tech`.

### Task 3: Templates and content
**Files:** `layouts/baseof.html`, `layouts/home.html`, `layouts/page.html`, `layouts/_partials/{head,navbar,footer}.html`, `layouts/_partials/sections/{hero,features,hardware,software,tech,community}.html`, `content/_index.md`, `content/home/{index,hero,features,hardware,software,tech,community}.md`
- [ ] Port markup 1:1 from the old fragments; texts into front matter / body.
- [ ] `hugo` builds with no warnings.

### Task 4: Verify
- [ ] Screenshots of new build at both widths match Task 1 baseline.
- [ ] Build with `--baseURL http://localhost:PORT/pevo-web/`, serve, check no 404s.
- [ ] Review-focus cases: `&` in a title, swapped weights, a test page.

### Task 5: Workflow, docs, release
- [ ] Workflow: install Hugo 0.170.0, `hugo --gc --minify --baseURL <pages base_url>/`, upload `public/`.
- [ ] README with German editor guide; CHANGES.md first entry.
- [ ] Commit, tag `v1.0.0`, push, create GitHub release.
