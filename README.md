# Profile · TWS Social Trades

Home (`/`) and Profile (`/profile`) pages built from the Figma designs with React, Vite, React Router and Tailwind CSS v4. `vercel.json` rewrites every path to `index.html` so deep links work.

```bash
npm install
npm run dev
```

## Banner intro

The gradient wave in the cover grows out of its own starting point (the left tip of the shape) on page load, using an ease-out curve. Each layer starts 70ms after the one below it. It plays once per load or refresh, starts only after the banner images have decoded and the page has painted once, and is skipped when `prefers-reduced-motion` is set. The CSS lives in `src/index.css`, the layers in `src/components/ProfileBanner.jsx`.

## Risk consent on Home

On the first visit, Home opens the "Pernyataan Risiko & Tanggung Jawab" modal. Ticking the checkbox makes the pen write the signature: the ink is drawn with `stroke-dashoffset` and the pen rides the same SVG path with `offset-path`, so the nib stays on the ink. Both use the same 1.2s ease-in-out. Unticking rewinds in 450ms. "Saya Mengerti" stays disabled until the box is ticked. Accepting is stored in `localStorage` under `tws.riskConsent`; clear it to see the modal again.

## Pre-rendered assets

Some Figma exports carried heavy SVG filters: the score ring alone had 32 Gaussian blurs, and each status glow and wave layer had several more. The browser recomputed them on first paint, which froze the page for about 400ms. They're rendered once in Chromium and shipped as bitmaps instead: `wave-*.avif`, `status-glow-*.webp`, `score-ring.webp`, and `banner-light.webp` (the cover light with its 40px blur baked in). The original SVGs are in the git history if they need to be re-rendered.

## Fonts

The design uses Neue Montreal, which isn't on a public CDN. Familjen Grotesk is the fallback because its width is the closest match. All fonts are self-hosted from `public/fonts` (Latin subset), and the two main weights are preloaded in `index.html`. To use the real font, put the `.woff2` files in `public/fonts` and add `@font-face` rules for `"Neue Montreal"` in `src/index.css`.
