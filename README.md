# Grace Gameros — Portfolio

A premium, interactive portfolio site for an Industrial Design Engineer / Packaging Design Specialist. Built with plain HTML, CSS, and JavaScript — no build step, no frameworks.

## Files

```
index.html      All markup and content
styles.css      Design system (tokens, type, layout, components)
script.js       Interactions (loader, nav, reveals, filters, lightbox, dark mode, counters)
assets/images/  Project photography (renamed, compressed to JPEG for fast loading)
```

## Design language

The visual identity is drawn directly from the subject matter: structural packaging engineering.

- **Dieline motif** — solid lines mean "cut," dashed lines mean "fold," exactly as in real corrugate dielines. This shows up in section dividers, the loading animation, spec tables, and hover states.
- **Registration marks** (small + crosshairs) reference print registration marks, used as accents on project media and the eyebrow labels.
- **Color** — Paper (#F6F4EF), Ink (#17191A), Structural Teal (#1F4C56, pulled from the real Baja Tomatoes box), Kraft (#B98450), and Signal Red (#C1432B) used sparingly for accents.
- **Type** — Fraunces (display/editorial), Inter (body), IBM Plex Mono (spec labels, eyebrows, figure numbers — echoing real packaging spec-sheet typography).

## What's real vs. placeholder

Three featured case studies (Baja Premium Tomatoes, Fresh Strawberries, Gourmet Asparagus) use the product photography you supplied as studio, retail, and field imagery. Everything else — years, results, additional sketches/renders/prototypes, gallery placeholders, contact links, social handles — is marked with `[INSERT ... HERE]` or bracketed placeholder text so you can drop in your own content and photography.

Search the codebase for `[INSERT` to find every placeholder that needs your input, and for `#` `href="#" data-external` to find social/website links that need real URLs.

## Customizing

1. **Add real photography** — drop new files into `assets/images/`, then swap the `src` in `index.html`. Keep images compressed (JPEG, ~1200–1600px wide) for fast loading.
2. **Add a 4th+ project** — copy one `<article class="case-study">` block and its `data-cat` filter tags.
3. **Update the gallery** — replace any `<div class="g-item placeholder-block">` with `<div class="g-item" data-full="path.jpg"><img src="path.jpg" alt="..."><span class="g-tag">Label</span></div>`.
4. **Real links** — update every `mailto:`, LinkedIn, Instagram, and website URL in the Gigi's Atelier and Contact sections.
5. **Colors/type** — all defined as CSS custom properties at the top of `styles.css` under `:root`.

## Features included

Smooth scrolling · scroll-reveal animations · project filtering · animated dieline-fold loading screen · sticky nav that hides on scroll down / shows on scroll up · scroll progress bar · animated process timeline · animated counters · language proficiency bars · masonry gallery with lightbox · dark/light mode toggle (respects system preference) · mobile drawer menu · back-to-top button · full keyboard focus states · reduced-motion support.

## Browser support

Modern evergreen browsers (Chrome, Firefox, Safari, Edge). Uses `color-mix()` and `backdrop-filter`; for older browsers these degrade gracefully to solid colors.
