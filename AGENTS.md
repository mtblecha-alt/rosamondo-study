# Rosamondo — Agent Instructions

This file provides context for AI coding assistants working in this codebase.

## Project Overview

Rosamondo is a German-language B2B marketplace for circular materials (zirkuläre Materialien). The site is dark-themed, minimal, and uses animation-forward design. All copy is in **German**.

## Tech Stack

- **Next.js 14** (App Router, no `src/` directory, JSX not TSX)
- **Tailwind CSS 3** with custom tokens in `tailwind.config.js`
- **Framer Motion 11** for all animations
- **JavaScript** — no TypeScript, no `.ts` files

## File Conventions

- Pages live in `app/` following Next.js App Router conventions.
- Shared UI components live in `components/`.
- Reusable hooks live in `hooks/` (prefix: `use`).
- Static data (arrays, constants) lives in `data/`.
- Add `'use client'` at the top of any file that uses React hooks or browser APIs.

## Styling Rules

- Use Tailwind utility classes as the default styling approach.
- Use `style={{}}` props only for values Tailwind cannot express (e.g. specific `rgba` colors, `perspective`, dynamic values).
- **Never** use CSS Modules or plain CSS files for component styles (only `globals.css` for global resets and font definitions).
- Font classes: `font-mk-latin` (headings) and `font-helvetica` (body/UI).
- Background dark: `#0a0a0a` (sections), `#080808` (footer, Marktplatz).
- All text is white on dark; use `text-white/XX` opacity utilities (e.g. `text-white/70`).

## Animation Rules

- All Framer Motion transitions use `ease: [0.25, 0.46, 0.45, 0.94]` (the `premium` easing).
- Entrance animations: `initial={{ opacity: 0, y: 24 }}` → `animate={{ opacity: 1, y: 0 }}`.
- Use `whileInView` + `viewport={{ once: true }}` for scroll-triggered animations.
- Logo rotation: continuous `rotateY: 360` with `duration: 12, repeat: Infinity`.

## Shared Utilities

- **`hooks/useDragScroll.js`** — attach to any horizontally scrollable container for drag-to-scroll. Returns `{ ref, onMouseDown, onMouseUp, onMouseLeave, onMouseMove }`.
- **`data/gallery.js`** — single source of truth for all gallery images (`galleryImages` array). Both `components/Gallery.jsx` and `app/marktplatz/page.jsx` consume this.
- **`data/navigation.js`** — `navLinks` array used by `components/Header.jsx`.

## Key Components

| Component | Description |
|-----------|-------------|
| `Header` | Fixed, blur-on-scroll header with full-screen nav overlay |
| `Hero` | Full-viewport hero with mouse-tracking parallax |
| `HowItWorks` | Numbered step list with scroll-triggered fade-ins |
| `Gallery` | Drag-scrollable image strip |
| `Footer` | Simple two-column footer row |
| `RosamondoLogo` | Continuously rotating 3D SVG logo |

## Do Not

- Do not add TypeScript (`tsconfig.json`, `.ts` files).
- Do not install additional CSS frameworks or component libraries.
- Do not use `next/image` for Unsplash URLs — use a plain `<img>` tag (they are already allowlisted in `next.config.js`, but `next/image` requires known dimensions).
- Do not break the existing dark color palette.
- Do not translate German copy to English.
