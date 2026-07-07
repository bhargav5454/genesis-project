## Problem

TypeScript build fails on `src/components/homepage/TestimonialsSection.tsx:7`:

```
error TS2882: Cannot find module or type declarations for side-effect import of '@splidejs/splide/css'.
```

`@splidejs/splide` ships the stylesheet at `dist/css/splide.min.css` but exposes it via the `./css` subpath export, which has no `.d.ts`. TypeScript's strict resolution rejects the side-effect import.

## Fix

Add a small ambient module declaration so TS accepts CSS side-effect imports from the Splide subpath exports. No runtime change, no framework change.

Create `src/types/splide-css.d.ts`:

```ts
declare module '@splidejs/splide/css';
declare module '@splidejs/splide/css/*';
```

`tsconfig.json` already includes `src/**/*.ts` (typical Next.js setup), so the ambient file is picked up automatically. If it isn't, add `"src/types/**/*.d.ts"` to `include`.

## Verification

- `next build` completes without TS2882.
- `TestimonialsSection` still renders with Splide styles at runtime (import path unchanged).
- No other files touched; Next.js App Router, routing, and configuration are untouched.
