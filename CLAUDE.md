# SLATIN Academy — Development Guidelines

## Project Overview

This is the **SLATIN Academy** website — a course landing page platform built with **Astro 5** and **Tailwind CSS 3**. It uses file-based routing, reusable Astro components, and separated data files.

**IMPORTANT: Follow these rules exactly when adding or modifying pages. Do not deviate from the established patterns.**

---

## Tech Stack

- **Framework:** Astro 5 (static site generator)
- **Styling:** Tailwind CSS 3 (utility-first) + scoped component styles
- **Language:** TypeScript (strict mode)
- **Font:** Plus Jakarta Sans (via @fontsource)
- **Animations:** CSS-only (no JS animation libraries)

---

## Folder Structure — DO NOT change this structure

```
src/
├── pages/           → One .astro file per page (file-based routing)
├── layouts/         → Page wrapper layouts (BaseLayout.astro)
├── components/      → Reusable UI sections (PascalCase .astro files)
├── data/            → Content data as TypeScript exports
└── styles/          → Global CSS (Tailwind directives + custom utilities)
```

### Rules:

1. **Pages** go in `src/pages/` — the filename becomes the URL route (e.g., `mixing-101.astro` → `/mixing-101`)
2. **Components** go in `src/components/` — one component per file, PascalCase naming (e.g., `PricingCard.astro`)
3. **Content data** (testimonials, FAQs, module lists, etc.) goes in `src/data/` as TypeScript files with named exports
4. **Layouts** stay in `src/layouts/` — do NOT create new layouts unless explicitly asked
5. **Never** put components in `src/pages/` or page files in `src/components/`
6. **Never** create new top-level folders

---

## How to Create a New Page

Every page MUST follow this exact pattern:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
// Import only the components you need from ../components/
import Hero from '../components/Hero.astro';
import FAQ from '../components/FAQ.astro';
// Import data from ../data/ if needed
import { faqItems } from '../data/your-page-name';
---

<BaseLayout
  title="Page Title — SLATIN Academy"
  description="Short SEO description of the page."
>
  <!-- Build the page by composing components -->
  <Hero title="..." subtitle="..." ctaText="..." ctaHref="#" />
  <FAQ items={faqItems} />
</BaseLayout>
```

### Page rules:

- **Always** wrap content in `<BaseLayout>` — it provides Nav, Footer, fonts, meta tags, and scroll animations
- **Always** provide `title` and `description` props to BaseLayout
- **Never** add `<html>`, `<head>`, `<body>`, `<nav>`, or `<footer>` tags in page files — BaseLayout handles all of that
- **Never** write raw HTML sections in pages — use existing components instead
- **Never** import CSS files or fonts in page files — BaseLayout handles that
- Use HTML comments (`<!-- Section name -->`) between components for readability

---

## Available Components

Reuse these existing components. **Do NOT create new components unless the existing ones genuinely cannot handle the need.**

| Component | Purpose | Key Props |
|---|---|---|
| `Hero` | Page hero with title, subtitle, CTA buttons | `title`, `subtitle`, `ctaText`, `ctaHref`, `secondaryCtaText`, `secondaryCtaHref` |
| `VideoEmbed` | Embedded video player (Vimeo/YouTube) | `videoId`, `platform`, `title`, `thumbnailSrc` |
| `SplitSection` | Two-column layout (text + image/video) | `variant`, `imagePosition`, `imageSrc`/`videoSrc`, `imageAlt` |
| `CenteredHeadline` | Full-width centered text block | `preTitle`, `variant` + slot content |
| `IconFeatures` | Feature list with icons | `sectionTitle`, `subtitle`, `variant`, `features[]` |
| `FeatureGrid` | Grid of feature cards with icons | `subtitle`, `variant`, `columns`, `features[]` |
| `NumberedList` | Numbered items with side image | `title`, `variant`, `imageSrc`, `items[]` |
| `TestimonialCarousel` | Scrolling testimonial carousel | `testimonials[]` |
| `ModuleCarousel` | Course module cards carousel | `modules[]` |
| `TeacherBio` | Instructor biography section | `name`, `imageSrc`, `variant`, `bio[]` |
| `LogoBar` | Client/partner logo strip | `logoSrc`, `variant` |
| `PricingCard` | Pricing section with features list | `subtitle`, `price`, `features[]`, `ctaText`, `ctaHref` |
| `FAQ` | Accordion FAQ section | `items[]` |
| `FullWidthImage` | Full-width image section | `src`, `alt` |

---

## Styling Rules

### Color variants
Most components accept `variant="dark"` or `variant="cream"`. Alternate between dark and cream sections for visual rhythm.

### Custom CSS classes (defined in global.css)
- `.section-dark` / `.section-cream` — background colors
- `.section-padding` — consistent vertical padding
- `.container-content` — max-width centered container
- `.btn-primary` / `.btn-outline` / `.btn-cta-orange` — button styles
- `.reveal` — scroll-triggered fade-in animation
- `.squiggle` — brand red underline decoration

### Do NOT:
- Install new CSS frameworks or libraries
- Use inline `<style>` tags in page files (only in components)
- Override Tailwind config values without permission
- Use arbitrary hex colors — use the defined theme colors: `dark-*`, `cream`, `accent-red`, `accent-orange`, `accent-yellow`, `text-dark`

---

## Data Files

When a page has repeating content (testimonials, FAQ items, module lists), put that data in `src/data/your-page-name.ts`:

```typescript
// src/data/your-page-name.ts
export const faqItems = [
  {
    question: "Your question here?",
    answer: "Your answer here.",
  },
];
```

### Rules:
- Use **named exports** (not default exports)
- File name should match the page name (e.g., page `mixing-101.astro` → data file `mixing-101.ts`)
- Keep the same data shapes as existing files (check `src/data/microdynamics.ts` for reference)

---

## What NOT to Do

- **Do NOT** modify `BaseLayout.astro`, `Nav.astro`, or `Footer.astro` without explicit permission
- **Do NOT** modify `astro.config.mjs`, `tailwind.config.mjs`, or `tsconfig.json`
- **Do NOT** install new npm packages without explicit permission
- **Do NOT** delete or rename existing files
- **Do NOT** change the routing structure or add dynamic routes
- **Do NOT** add JavaScript frameworks (React, Vue, Svelte, etc.)
- **Do NOT** hardcode content directly in components — pass it through props or data files
- **Do NOT** modify existing component files unless fixing a bug you introduced

---

## Before Finishing Any Task

1. Run `npm run build` to verify the site compiles without errors
2. Check that no existing pages are broken
3. Make sure all images use `loading="lazy"`
4. Verify the page uses `BaseLayout` and has proper `title`/`description`
