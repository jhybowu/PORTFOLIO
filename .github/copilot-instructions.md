<!-- .github/copilot-instructions.md -->
# Copilot / AI Agent Instructions

Purpose: give an AI coding agent the minimal, actionable knowledge to be productive in this Next.js + TypeScript portfolio repo.

- Project type: Next.js app router (app/) using TypeScript, Tailwind CSS and shadcn/ui (Radix primitives). Main entry is `app/page.tsx` and `app/layout.tsx`.
- Node: targets Node.js >=18. Package manager: pnpm is used in developer docs but npm works; prefer `pnpm` when available.

Quick commands
- Install: `pnpm install` (or `npm install`)
- Dev: `pnpm dev` -> runs `next dev` (localhost:3000)
- Build: `pnpm build` -> runs `next build` (output: `.next`)
- Start: `pnpm start` -> runs `next start`
- Lint: `pnpm lint` -> runs `next lint`

High-level architecture & conventions
- App router: the code lives in `app/` (server and client components). Edit `app/layout.tsx` and `app/page.tsx` for global changes.
- Components: reusable UI and domain components live under `components/`.
  - `components/ui/` contains shadcn wrappers and Radix-based primitives (use these when adding UI elements).
  - `components/sections/` contains site sections (About, Experience, Projects, etc.) — good examples of composition and props patterns.
- ASCII art features: many specialized components under `components/` (e.g. `ascii-art.tsx`, `ascii-portrait.tsx`, `ascii-portrait-canvas.tsx`). Prefer reading these before changing terminal/ASCII behavior.
- Hooks: custom hooks live in `hooks/` (e.g. `use-mobile.tsx`, `use-toast.ts`). Use them instead of duplicating logic.
- Utilities: helper functions in `lib/utils.ts`.

Patterns to follow (observable in code)
- Component exports: components are small, typed React components in TypeScript; prefer explicit props interfaces and preserve server/client boundaries.
- Styling: Tailwind utility classes are used across components; prefer adding classes over creating new CSS files unless global styles required (`styles/globals.css`).
- Theme handling: `next-themes` + a `theme-provider` component exists in `components/theme-provider.tsx` — reuse it for theme-aware UI.
- shadcn/ui: `components.json` governs generated shadcn components. If adding a new shadcn component, update `components.json` and follow the project's UI wrapper patterns in `components/ui/`.

Integration & external dependencies
- Analytics: `@vercel/analytics` is present — be cautious when editing telemetry lines.
- Other libs: Radix UI, Lucide Icons, `sonner` for toasts, `vaul`, `zod`, `react-hook-form` — follow their existing integration patterns (look at `components/ui/*` for examples).

What to look for when changing functionality
- UI changes: update corresponding `components/ui/*` wrapper to keep consistent behavior across the site.
- ASCII/Canvas work: modifying `ascii-portrait-canvas.tsx` or canvas rendering can be device/DOM-sensitive — test on mobile (there is `use-mobile.tsx`).
- Global changes: `app/layout.tsx` and `styles/globals.css` control layout and theme; edit carefully.

Missing / not present
- No test suite detected. If adding tests, document test runner and scripts in `package.json`.
- No API routes found in repository root — most logic is client-side or server components in `app/`.

Useful files to inspect (examples)
- App entry and layout: [app/page.tsx](app/page.tsx), [app/layout.tsx](app/layout.tsx)
- UI wrappers: [components/ui/button.tsx](components/ui/button.tsx), [components/ui/input.tsx](components/ui/input.tsx)
- Sections: [components/sections/about-section.tsx](components/sections/about-section.tsx)
- ASCII art examples: [components/ascii-portrait.tsx](components/ascii-portrait.tsx), [components/ascii-portrait-canvas.tsx](components/ascii-portrait-canvas.tsx)
- Utilities: [lib/utils.ts](lib/utils.ts)

If you're unsure
- Read the relevant file for pattern examples (see list above) and mimic prop names and TypeScript patterns.
- Prefer minimal, localized changes; run `pnpm dev` to validate UI and behavior locally.

After updating this file: ask the human owner for feedback on any unclear sections or missing conventions.
