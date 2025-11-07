# next-static-export-prefetch-segement-cache

A demo for https://github.com/vercel/next.js/pull/85903

## How to run

```bash
pnpm install
pnpm run build
# Python http.server doesn't have range request support by default, suitable for this demo
python3 -m http.server -d out
```

## Screenshot

![screenshot](./screenshot.png)
