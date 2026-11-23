# Profile · TWS Social Trades

Profile page built from the Figma design with React, Vite and Tailwind CSS v4.

```bash
npm install
npm run dev
```

## Banner intro

The gradient wave in the cover grows out of its own starting point (the left tip of the shape) on page load, using an ease-out curve. Each layer starts 70ms after the one below it. It plays once per load or refresh, starts only after the banner images have decoded and the page has painted once, and is skipped when `prefers-reduced-motion` is set. The CSS lives in `src/index.css`, the layers in `src/components/ProfileBanner.jsx`.

## Pre-rendered assets

Some Figma exports carried heavy SVG filters: the score ring alone had 32 Gaussian blurs, and each status glow and wave layer had several more. The browser recomputed them on first paint, which froze the page for about 400ms. They're rendered once in Chromium and shipped as bitmaps instead: `wave-*.avif`, `status-glow-*.webp`, `score-ring.webp`, and `banner-light.webp` (the cover light with its 40px blur baked in). The original SVGs are in the git history if they need to be re-rendered.

## Fonts

The design uses Neue Montreal, which isn't on a public CDN. Familjen Grotesk is the fallback because its width is the closest match. All fonts are self-hosted from `public/fonts` (Latin subset), and the two main weights are preloaded in `index.html`. To use the real font, put the `.woff2` files in `public/fonts` and add `@font-face` rules for `"Neue Montreal"` in `src/index.css`.
