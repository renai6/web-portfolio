# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

No test framework is configured.

## Architecture

This is a **Next.js 16 App Router** personal portfolio site for Raffi Muloc. It is a single-page application rendered via `app/page.tsx`, which composes all sections sequentially.

### Directory layout

- `app/` — Next.js App Router entry. `layout.tsx` sets global metadata and fonts (Geist via `next/font`, Montserrat via Google Fonts). `globals.css` imports Tailwind v4 via `@import "tailwindcss"`.
- `components/` — One file per page section: `Hero`, `Skills`, `Experiences`, `Projects`, `StarParticles`, `Footer`. All are client components (`"use client"`).
- `lib/` — Shared utilities:
  - `page-data.tsx` — Source of truth for `experiences`, `projects`, and `socials` arrays (used by section components). Contains JSX (SVG icons for socials), hence `.tsx`.
  - `animations.ts` — Framer Motion `Variants` objects (`fadeUp`, `slideLeft`, `slideRight`, `containerVariants`, `itemVariants`, `badgeVariants`) shared across components.
  - `types.ts` — `Project` and `Experience` TypeScript types.
  - `data.ts` — Legacy/unused flat data arrays; active content is in `page-data.tsx`.
- `public/` — Static assets including `RAFFI_MULOC.pdf` (resume download) and `raffi_photo.jpg` (hero portrait).

### Path alias

`@/*` resolves to the project root, so `@/components/Hero` → `components/Hero.tsx`.

### Design system

- Dark space theme: background `#050B1E` / `#020617`
- Accent: green/emerald (`green-400`, `emerald-500`)
- All animations use Framer Motion; reusable variants live in `lib/animations.ts`
- Tailwind v4 (configured via `@tailwindcss/postcss` plugin, not `tailwind.config.js`)

### Content updates

To update portfolio content (experiences, projects, social links), edit `lib/page-data.tsx`. Skill categories are defined inline in `components/Skills.tsx`.
