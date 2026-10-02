@AGENTS.md

# Project notes

- Next.js 16 with App Router, TypeScript, React Compiler (`reactCompiler: true`), Sass and Prettier. Import alias is `@/*`.
- Part of the shared npm workspace in `C:\Users\adria\projects` (listed in its `package.json` `workspaces`). Packages install to `projects/node_modules`, and there is no lockfile in this repo.
- Because of that, `next.config.ts` sets `turbopack.root` and `outputFileTracingRoot` to the parent folder. Next.js only looks for a lockfile inside this Git repo, so without them the dev server can't find `next`. This also builds fine on Vercel.
- Every package used here must be listed in this project's own `package.json`. Locally anything in the shared `node_modules` resolves, but Vercel only installs what's listed.
- Deployed on Vercel from the `production` branch: https://alexandria-three.vercel.app. Vercel auto-detects Next.js, so don't add the SPA `vercel.json` rewrite used in the Vite projects.
- Sibling projects (portfolio, burmecia, etc.) are Vite + TanStack Router and share `@displaycoffee/*` packages (tokens, styles) from `project-kit`. Tokens live in `src/_core/tokens/*.json` and are built with `tokens-generate`, which `dev` and `build` run first. There's no watcher like Burmecia's `tokensWatch()`, so run `npm run generate:tokens` (or restart dev) after editing tokens.
- Tokens drive the `<head>` the same way Burmecia's `src-generate.js` does: `app/layout.tsx` builds `@font-face` rules, font preloads, favicons and theme colors from `src/_core/data/*`, and `app/manifest.ts` builds the manifest. Fonts stay in `public/assets/fonts` (not `next/font`) so the token paths keep working.
- Icons use `@iconify/react` with `@iconify-json/lucide` (Turbopack can't run `unplugin-icons`). `components/icons/Icons.tsx` is server-only so the full icon set never reaches the client bundle; Client Components get icons passed in as props/children.
- Next 16 error boundaries (`error.tsx`, `global-error.tsx`) receive `retry`, not `reset`.
