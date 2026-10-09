<div align="center">
  <img src="public/favicon.svg" width="72" height="72" alt="Preact Kit logo" />
  <h1>Preact Kit</h1>
  <p><strong>A batteries-included Preact starter. Clone it, run it, ship it.</strong></p>

  <p>
    <a href="https://github.com/stijnwtf/preact-kit/actions/workflows/ci.yml"><img src="https://github.com/stijnwtf/preact-kit/actions/workflows/ci.yml/badge.svg" alt="CI" /></a>
    <a href="LICENSE"><img src="https://img.shields.io/github/license/stijnwtf/preact-kit" alt="MIT license" /></a>
    <a href="https://github.com/stijnwtf/preact-kit/stargazers"><img src="https://img.shields.io/github/stars/stijnwtf/preact-kit?style=social" alt="GitHub stars" /></a>
  </p>
</div>

Setting up a new frontend project still means an afternoon of gluing tools together. Preact Kit does that part for you: a fast, typed, tested Preact app with routing, state, styling and CI already wired up, at a fraction of React's size.

## What's inside

| | Tool | Why |
| --- | --- | --- |
| ⚡️ | [Vite](https://vite.dev) | Instant dev server, optimized builds |
| ⚛️ | [Preact](https://preactjs.com) | The React API in about 4 kB |
| 🟦 | [TypeScript](https://www.typescriptlang.org) | Strict mode, `@/` path alias |
| 🧭 | [preact-iso](https://github.com/preactjs/preact-iso) | Routing, lazy routes, error boundaries |
| 📄 | Prerendering | Every route is rendered to static HTML at build time (SEO friendly, fast first paint) |
| 📡 | [@preact/signals](https://preactjs.com/guide/v10/signals) | Fine-grained reactive state |
| 🎨 | [Tailwind CSS v4](https://tailwindcss.com) | Dark mode (no flash) and a brand color scale |
| 🧪 | [Vitest](https://vitest.dev) + [Testing Library](https://testing-library.com/docs/preact-testing-library/intro) | Fast tests with jsdom and coverage |
| 🧹 | [Biome](https://biomejs.dev) | Linting and formatting in one fast tool |
| 🪝 | simple-git-hooks + lint-staged | Staged files are checked before every commit |
| 🤖 | GitHub Actions + Dependabot | CI on every push and PR, weekly dependency updates |

## Quick start

Click **[Use this template](https://github.com/stijnwtf/preact-kit/generate)**, or:

```bash
npx degit stijnwtf/preact-kit my-app
cd my-app
pnpm install
pnpm dev
```

Open http://localhost:5173 and start editing `src/app.tsx`.

> Requires Node 22+ and pnpm (`corepack enable` gets you the right version).

## Scripts

| Command | Does |
| --- | --- |
| `pnpm dev` | Start the dev server with HMR |
| `pnpm build` | Typecheck and build to `dist/`, prerendering every route |
| `pnpm preview` | Serve the production build locally |
| `pnpm test` | Run tests once (`pnpm test:watch` for watch mode) |
| `pnpm coverage` | Run tests with a coverage report |
| `pnpm lint` | Lint and check formatting |
| `pnpm format` | Auto-fix lint and formatting issues |
| `pnpm typecheck` | Run the TypeScript compiler |

## Project structure

```
src/
├── app.tsx            # Routes and layout
├── index.tsx          # Hydration + prerender entry
├── styles.css         # Tailwind and theme tokens
├── components/        # Reusable UI (with colocated *.test.tsx)
├── lib/               # Shared logic, e.g. the theme signal
├── pages/             # One file per route
└── test/setup.ts      # Vitest + jest-dom setup
```

## Recipes

**Add a page.** Create `src/pages/pricing.tsx`, then register it in `src/app.tsx`:

```tsx
const Pricing = lazy(() => import('@/pages/pricing').then((m) => m.Pricing));
// ...
<Route path="/pricing" component={Pricing} />
```

Linked pages are discovered and prerendered automatically at build time.

**Share state.** Create a signal in `src/lib/` and import it anywhere. Components that read `.value` re-render only when it changes:

```ts
import { signal } from '@preact/signals';
export const cart = signal<string[]>([]);
```

**Use React libraries.** `preact/compat` is aliased, so most React packages just work.

**Environment variables.** Copy `.env.example` to `.env`. Anything prefixed with `VITE_` is available via `import.meta.env`.

## Deploy

`pnpm build` produces a static `dist/` folder. Drop it on any static host: Cloudflare Pages, Netlify, Vercel, GitHub Pages or a plain S3 bucket. Prerendered routes work without any rewrite rules.

## Contributing

Issues and PRs are welcome. Run `pnpm lint && pnpm typecheck && pnpm test` before opening a PR.

If this saved you some setup time, consider giving it a ⭐️. It helps others find it.

## License

[MIT](LICENSE)
