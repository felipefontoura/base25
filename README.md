# Base25

Engineering foundation skeleton. Next.js 15 + TypeScript + Tailwind CSS.

## Stack

| Layer       | Choice                  | Why                                              |
| ----------- | ----------------------- | ------------------------------------------------ |
| Framework   | Next.js 15 (App Router) | Battle-tested, full-stack, great DX              |
| Language    | TypeScript              | Catch bugs at compile time                       |
| Styling     | Tailwind CSS 4          | Utility-first, fast iteration                    |
| Linting     | ESLint + Prettier       | Ships with Next.js, zero opinion needed          |
| CI          | GitHub Actions          | Free, fast, runs on every push and PR            |
| Hosting     | Vercel (Hobby — free)   | Zero-config Next.js deployment, instant previews |

## Local development

```bash
npm install
npm run dev
```

App runs at http://localhost:3000.

```bash
npm run lint        # ESLint
npx tsc --noEmit    # TypeScript check
npm run build       # Production build
```

## CI (GitHub Actions)

`.github/workflows/ci.yml` runs on every push and PR to `main`:

1. `npm ci` — reproducible install
2. `npm run lint` — ESLint
3. `npx tsc --noEmit` — TypeScript
4. `npm run build` — production build

CI passes → safe to merge.

## Deployment

### GitHub Pages (active — auto-deploys on push to `main`)

`.github/workflows/pages.yml` builds a static export and deploys to GitHub Pages automatically.

**Live URL:** https://felipefontoura.github.io/base25/

No setup required — this runs on every push to `main`.

### Vercel (configured — activate when ready for SSR)

`.github/workflows/deploy.yml` deploys to Vercel on push to `main` using the Vercel CLI.
GitHub Pages is sufficient for the skeleton; switch to Vercel when you need SSR or edge functions.

#### Activating Vercel (one-time, ~5 min)

1. Go to [vercel.com/new](https://vercel.com/new) and import the `base25` GitHub repo. Accept defaults.
2. Run `vercel link` locally to generate `.vercel/project.json` — get `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` from that file.
3. Create a token at [vercel.com/account/tokens](https://vercel.com/account/tokens) — that's `VERCEL_TOKEN`.
4. Add all three as **GitHub repository secrets** under Settings → Secrets → Actions.

After setup, `deploy.yml` takes over from `pages.yml` for production.
