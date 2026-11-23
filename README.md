# Profile · TWS Social Trades

Profile page built from the Figma design with React, Vite and Tailwind CSS v4.

```bash
npm install
npm run dev
```

## Banner intro

The gradient wave in the cover grows out of its own starting point (the left tip of the shape) on page load, using an ease-out curve. Each layer starts 70ms after the one below it. It plays once per load or refresh and is skipped when `prefers-reduced-motion` is set. The CSS lives in `src/index.css`, the layers in `src/components/ProfileBanner.jsx`.

## Fonts

The design uses Neue Montreal, which isn't on a public CDN. Familjen Grotesk is loaded as the fallback because its width is the closest match. To use the real font, put the `.woff2` files in `public/fonts` and add `@font-face` rules for `"Neue Montreal"` in `src/index.css`.
