# `@multi-app/tailwind-config`

Shared Tailwind CSS v4 configuration, fonts, and PostCSS setup.

## What's included

- Tailwind CSS v4
- PostCSS config
- Fonts: `Instrument Sans` (variable), `Instrument Serif`
- Shared CSS variables / design tokens via `shared.styles.css`

## Usage in a Next.js app

### 1. Install

```jsonc
// apps/web/package.json
{
  "devDependencies": {
    "@multi-app/tailwind-config": "workspace:*",
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4"
  }
}
```

### 2. Import shared styles in your global CSS

```css
/* apps/web/src/app/globals.css */
@import "@multi-app/tailwind-config/shared.styles.css";
@import "tailwindcss";
```

### 3. Use PostCSS config

```js
// apps/web/postcss.config.mjs
export { default } from "@multi-app/tailwind-config/postcss";
```

## Fonts

Fonts are bundled in the package. Import in your layout:

```ts
import "@fontsource-variable/instrument-sans";
import "@fontsource/instrument-serif";
```

## Design tokens

Shared CSS custom properties are defined in `shared.styles.css`. Override them in your app's global CSS after the import:

```css
@import "@multi-app/tailwind-config/shared.styles.css";

:root {
  --color-primary: oklch(55% 0.2 260);
}
```
