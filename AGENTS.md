# AGENTS.md

## Project

- Framework: Next.js 16 (App Router)
- React: 19
- Language: TypeScript
- Package Manager: Bun
- Styling: Tailwind CSS v4
- UI Components: shadcn/ui
- Icons: lucide-react

---

## Important

> This project uses **Next.js 16**.

Before generating or modifying framework-specific code, consult the documentation shipped with Next.js in:

```text
node_modules/next/dist/docs/
```

Do not rely on outdated Next.js APIs or patterns.

---

## Code Style

- Use TypeScript only.
- Prefer functional components.
- Prefer Server Components by default.
- Use Client Components only when necessary.
- Avoid `any`.
- Prefer explicit types.
- Use named exports unless Next.js requires a default export.
- Keep components small and reusable.

---

## Folder Structure

- `src/app` → App Router
- `src/components` → Reusable UI
- `src/features` → Feature modules
- `src/lib` → Utilities
- `src/hooks` → Custom hooks
- `src/services` → API calls
- `src/types` → Shared types

---

## Styling

- Use Tailwind CSS utilities.
- Prefer `cn()` for class merging.
- Use shadcn/ui components before creating custom ones.

---

## Imports

- Prefer absolute imports.

Example:

```ts
import { Button } from '@/components/ui/button';
```

Avoid:

```ts
import { Button } from '../../../components/ui/button';
```

---

## Linting

Before finishing:

- ESLint must pass.
- Prettier formatting must pass.
- TypeScript must compile.

Run:

```bash
bun run lint
bun run type-check
bun run format
```

---

## Git

Follow Conventional Commits.

Examples:

- feat:
- fix:
- docs:
- refactor:
- chore:
- test:
- ci:

---

## Do Not

- Do not use deprecated Next.js APIs.
- Do not use Pages Router.
- Do not use JavaScript files.
- Do not install unnecessary dependencies.
- Do not create duplicate components.

---

## Always

- Keep components accessible.
- Keep code strongly typed.
- Prefer composition over duplication.
- Follow existing project conventions.
