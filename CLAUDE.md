@AGENTS.md

# Project notes

- Next.js 16 with App Router, TypeScript, React Compiler (`reactCompiler: true`), Sass and Prettier. Import alias is `@/*`.
- Part of the shared npm workspace in `C:\Users\adria\projects` (listed in its `package.json` `workspaces`). Packages install to `projects/node_modules`, and there is no lockfile in this repo.
- Because of that, `next.config.ts` sets `turbopack.root` and `outputFileTracingRoot` to the parent folder. Next.js only looks for a lockfile inside this Git repo, so without them the dev server can't find `next`. This also builds fine on Vercel.
- Every package used here must be listed in this project's own `package.json`. Locally anything in the shared `node_modules` resolves, but Vercel only installs what's listed.
- Deployed on Vercel from the `production` branch: https://alexandria-three.vercel.app. Vercel auto-detects Next.js, so don't add the SPA `vercel.json` rewrite used in the Vite projects.
- Sibling projects (portfolio, burmecia, etc.) are Vite + TanStack Router and share `@displaycoffee/*` packages (tokens, styles) from `project-kit`. Tokens live in `src/_core/tokens/*.json` and are built with `tokens-generate`, which `build` runs first.
- `npm run dev` runs `scripts/dev.mjs`, not `next dev` directly: it runs the token and icon generators, starts `next dev --experimental-https` (extra args pass through, e.g. `npm run dev -- --port 3001`), and re-runs a generator when its sources change (`src/_core/tokens/*.json` except `theme.json`, and `src/_core/data/icons.json`). Turbopack has no plugin API for this, so it can't live in `next.config.ts` like Burmecia's `tokensWatch()` Vite plugin.
- Tokens drive the `<head>` the same way Burmecia's `src-generate.js` does: `app/layout.tsx` builds `@font-face` rules, font preloads, favicons and theme colors from `src/_core/data/*`, and `app/manifest.ts` builds the manifest. Fonts stay in `public/assets/fonts` (not `next/font`) so the token paths keep working.
- Icons use `@iconify/react` (Turbopack can't run `unplugin-icons`, which the Vite projects use). List icon names in `src/_core/data/icons.json`, grouped by Iconify set prefix (each set needs `@iconify-json/<prefix>` as a devDependency). Lucide names stay plain (`'x'`), other sets are keyed `'prefix:name'` (`'mdi:home'`). `scripts/icons-generate.mjs` (run by `dev` and `build`, and re-run by `dev` when `icons.json` changes) writes only those icons' SVG data into `src/_core/data/icons.ts`, so `<Icon name={'x'} />` works in Server and Client Components without shipping the full set. Don't edit `icons.ts` by hand.
- `@displaycoffee/scripts` ships TypeScript source, so it must stay in `transpilePackages` in `next.config.ts`. Local builds pass without it (workspace packages are compiled automatically), but Vercel installs it from npm into `node_modules` and the build would fail.
- Next 16 error boundaries (`error.tsx`, `global-error.tsx`) receive `retry`, not `reset`.
