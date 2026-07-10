# Grace Gameros — Portfolio

A premium, interactive portfolio site for an Industrial Design Engineer / Packaging Design Specialist — now redesigned around Grace's own personal brand identity. Built with plain HTML, CSS, and JavaScript — no build step, no frameworks.

## Files

```
index.html      All markup and content
styles.css      Design system (tokens, type, layout, components)
script.js       Interactions (loader, nav, reveals, filters, lightbox, dark mode, counters)
assets/images/  Photography, logo, and packaging imagery (compressed JPEGs)
```

## Design language (v2 — "Estilo Grace")

The palette was sampled programmatically (via color quantization, not eyeballed) from two of Grace's own reference images:

- **"Estilo Grace"** mood board → violet `#8E2FC9`, magenta `#C6296B`, amber `#E8A93C`, lime `#6FA82E` — used as a soft blurred gradient mesh (CSS-generated, not the raw image, for performance) behind the hero, and as the accent color for links, buttons, active states, and the About-section photo frame.
- **Gigi's Atelier logo** → the exact cutting-mat teal `#16544C` is used as the background of the Gigi's Atelier section specifically, so that section reads as its own sub-brand within the same family.

Neutrals were warmed to a blush/plum family (`--paper`, `--ink`, `--line`) rather than generic gray, so the accent colors feel native to the whole page rather than "brand colors dropped onto a template." Every text/background pairing was checked against WCAG AA (4.5:1) — see the table in this README's history / ask if you want the numbers again.

Typography adds one font to the previous system: **Caveat** (handwritten) is used *sparingly* — a signature-style "— Grace" under the hero quote, and the "atelier" mark next to the Gigi's Atelier logo — echoing the hand-written sticky note in the real logo art. Fraunces (display), Inter (body), and IBM Plex Mono (spec/utility labels) are unchanged.

## What's real vs. placeholder

**Real, from your uploads / your live site:**
- Your portrait (About section, custom framed treatment)
- Gigi's Atelier logo mark and packaging mockup photography
- Gigi's Atelier mission / vision / philosophy copy, Instagram (`@gigisatelier_`), LinkedIn company page, website, and email — pulled from your live `gamerosgrace.github.io/gigis-atelier.github.io` site
- Three packaging case studies (Baja Tomatoes, Fresh Strawberries, Gourmet Asparagus) from the previous round

**Still placeholder** (marked `[INSERT ... HERE]` or bracketed):
- Your personal email/LinkedIn in the main Contact section (not supplied yet)
- Two open slots in the Gigi's Atelier gallery for additional packaging/label work
- Case study years, results metrics, and remaining sketch/prototype gallery slots

Search for `[INSERT` to find every remaining placeholder.

## Customizing

1. **Swap in more Atelier work** — replace any `<div class="g-item placeholder-block">` inside `#atelier-gallery-grid` with `<div class="g-item" data-full="assets/images/your-file.jpg"><img src="assets/images/your-file.jpg" alt="..."></div>`.
2. **Your personal contact info** — update the `mailto:` and LinkedIn `href="#"` in the Contact section once you share them.
3. **Colors/type** — all defined as CSS custom properties at the top of `styles.css` under `:root`.
4. **Add a 4th+ case study** — copy one `<article class="case-study">` block and its `data-cat` filter tags.

## Features included

Smooth scrolling · scroll-reveal animations · project filtering · animated dieline-fold loading screen · sticky nav that hides on scroll down / shows on scroll up · scroll progress bar · animated process timeline · animated counters · language proficiency bars · Estilo-Grace gradient mesh hero · framed About photo · Gigi's Atelier packaging gallery with lightbox · dark/light mode toggle (respects system preference) · mobile drawer menu · back-to-top button · full keyboard focus states · reduced-motion support.

## Browser support

Modern evergreen browsers (Chrome, Firefox, Safari, Edge). Uses `color-mix()` and `backdrop-filter`; solid-color fallbacks are declared immediately before every `color-mix()` rule for older engines.

## GitHub Pages deployment

This is a static site with only relative paths — no build step needed. To deploy:
1. Push this folder's contents to the root of a GitHub repository (or to a `/docs` folder, or a `gh-pages` branch).
2. In the repo's Settings → Pages, point GitHub Pages at that location.
3. No config file, base path, or asset rewriting is required — every reference in `index.html`/`styles.css`/`script.js` is already a relative path (`assets/images/...`, `styles.css`, `script.js`).

