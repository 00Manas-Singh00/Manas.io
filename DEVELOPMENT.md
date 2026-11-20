# Development

## Prerequisites

- [Node.js](https://nodejs.org/) (latest LTS)
- [pnpm](https://pnpm.io/)

## Run locally

```bash
git clone https://github.com/00Manas-Singh00/Manas.io.git
cd Manas.io
pnpm i
pnpm dev
```

The site runs at http://localhost:1408.

Optionally set `APP_URL` (for example in `.env.local`) to the deployed origin. Metadata, the sitemap and `llms.txt` use it for absolute URLs, and fall back to `https://manas-io.vercel.app`.

## Build

```bash
pnpm build
pnpm start
```

## Where things live

- `src/app/(home)/page.tsx`: the home page route.
- `src/features/home/data.ts`: all page content (summary, work, projects, skills, recognition). `llms.txt` is generated from it too.
- `src/features/home/components/`: one component per section, plus the loader, nav, orb (WebGL and CSS fallback) and project plates.
- `src/app/opengraph-image.tsx`: the link-preview card.
- `src/styles/globals.css`: the `--paper` and `--ink` palette tokens.

## Credits

Built from [chanhdai.com](https://github.com/ncdai/chanhdai.com) by Nguyen Chanh Dai (MIT; see `LICENSE`).
