# D3 examples for lunch-n-learn

You can just clone this repo and open index.html.

If you want TypeScript compilation and live reloading, run `npm install` then (in two terminals) `npm run build-watch` alongside `npm run serve`.

## About `export {}`

This has nothing to do with D3. TypeScript complains if I reuse a variable name across different files -- I'm just lying to TSC and telling it that each `main.ts` is a separate module to get around this.
