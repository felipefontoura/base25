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

## Deployment (Vercel)

Deploys automatically on every push to `main` via `.github/workflows/deploy.yml`.

### First-time setup (one-time, ~5 min)

1. Go to [vercel.com/new](https://vercel.com/new) and import the `base25` GitHub repo.
2. Accept all defaults — Vercel auto-detects Next.js.
3. After the first deployment, go to **Settings → General** and copy:
   - `VERCEL_TOKEN` — create at [vercel.com/account/tokens](https://vercel.com/account/tokens)
   - `VERCEL_ORG_ID` — in `.vercel/project.json` after running `vercel link` locally
   - `VERCEL_PROJECT_ID` — same file
4. Add all three as **GitHub repository secrets** under Settings → Secrets → Actions.

After setup, every merge to `main` deploys to production automatically. Pull request previews are handled by the Vercel GitHub App.

### URL

Production: `https://base25.vercel.app` (or your custom domain once configured).
