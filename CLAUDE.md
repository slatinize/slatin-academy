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
- **Never** write raw HTML sections in pages — use existing or new components instead
- **Never** import CSS files or fonts in page files — BaseLayout handles that
- Use HTML comments (`<!-- Section name -->`) between components for readability

---

## Available Components

Prefer reusing these existing components before creating new ones. Check this list first — if an existing component can handle the need (even with creative use of its props), use it.

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

## Creating New Components

You ARE allowed to create new components when the existing ones don't cover your need. However, every new component **must look and feel like it belongs on the current site**. Follow these rules exactly:

### File & structure rules
- Place the file in `src/components/` with a PascalCase name (e.g., `ComparisonTable.astro`)
- One component per file
- Define a TypeScript `interface Props` at the top of the frontmatter
- Accept a `variant?: 'dark' | 'cream'` prop (default to `'dark'`) so sections can alternate backgrounds
- Pass all content through **props or slots** — never hardcode text inside the component

### Visual consistency — MANDATORY
Every new component must match the existing site's visual language. Follow this blueprint:

**Outer wrapper pattern** — use this exact structure:
```astro
<section class={`${sectionClass} section-padding`}>
  <div class="container-content">
    <!-- your content here -->
  </div>
</section>
```
Where `sectionClass` is computed as:
```typescript
const sectionClass = variant === 'cream' ? 'section-cream' : 'section-dark';
```

**Typography** — use ONLY these Tailwind classes (they use the site's fluid clamp() sizes):
- `text-display` — hero/page titles (clamp 2.5rem to 5rem, weight 800)
- `text-heading` — section headings (clamp 2rem to 3.5rem, weight 700)
- `text-subheading` — sub-titles (clamp 1.25rem to 1.75rem, weight 600)
- `text-base` / `text-lg` — body copy
- `text-sm` — small/caption text

**Colors** — use ONLY these theme tokens, never arbitrary hex values:
- Backgrounds: `bg-dark`, `bg-dark-secondary`, `bg-dark-card`, `bg-dark-muted`, `bg-cream`
- Brand reds: `text-accent-red`, `bg-accent-red`, `bg-accent-red-dark`
- Brand accent: `text-accent-orange`, `text-accent-yellow`
- Text on dark backgrounds: `text-white`, `text-white/70` (for muted body text)
- Text on cream backgrounds: `text-text-dark`, `text-text-dark/80` (for muted body text)

**Spacing & layout:**
- Use `.section-padding` on the outer `<section>` for consistent vertical/horizontal padding
- Use `.container-content` for the inner wrapper (max-width 1280px, centered)
- Use `rounded-xl` or `rounded-2xl` for cards and media
- Use `shadow-2xl` for elevated elements (images, cards)
- Use Tailwind `gap-*` utilities for spacing between items (common values: `gap-6`, `gap-10`, `gap-16`)

**Animations:**
- Add class `reveal` to content blocks that should fade in on scroll (already handled by BaseLayout)
- For custom animations, use CSS-only keyframes in a scoped `<style>` block — no JS animation libraries
- Stick to `transform` + `opacity` for smooth GPU-accelerated motion

**Buttons** — use existing global classes:
- `.btn-primary` — solid red CTA
- `.btn-outline` — white outlined button
- `.btn-cta-orange` — orange CTA

**Images:**
- Always include `loading="lazy"`
- Always include a meaningful `alt` attribute
- Use `rounded-xl shadow-2xl` for styled images

**Brand elements:**
- Use the `.squiggle` class on `<span>` to add the red hand-drawn underline decoration
- Font is Plus Jakarta Sans (already set globally — do not import other fonts)

### Example new component skeleton

```astro
---
interface Props {
  title: string;
  items: { label: string; value: string }[];
  variant?: 'dark' | 'cream';
}

const { title, items, variant = 'dark' } = Astro.props;
const sectionClass = variant === 'cream' ? 'section-cream' : 'section-dark';
const mutedText = variant === 'cream' ? 'text-text-dark/80' : 'text-white/70';
---

<section class={`${sectionClass} section-padding`}>
  <div class="container-content">
    <h2 class="text-heading mb-8 reveal">{title}</h2>
    <div class="grid md:grid-cols-2 gap-6 reveal">
      {items.map((item) => (
        <div class="bg-dark-card rounded-xl p-6">
          <p class="text-lg font-semibold">{item.label}</p>
          <p class={`text-sm mt-2 ${mutedText}`}>{item.value}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

### Do NOT in new components:
- Use arbitrary hex colors (e.g., `#3B82F6`) — use theme tokens only
- Import or use fonts other than Plus Jakarta Sans
- Use a different outer structure than `section > container-content`
- Skip the `variant` prop — all section components must support dark/cream switching
- Add JavaScript frameworks or external libraries without permission
- Use inline `style` attributes — use Tailwind classes or scoped `<style>` blocks

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
- **Do NOT** create new components that visually clash with the site — read the "Creating New Components" section above

---

## Before Finishing Any Task

1. Run `npm run build` to verify the site compiles without errors
2. Check that no existing pages are broken
3. Make sure all images use `loading="lazy"`
4. Verify the page uses `BaseLayout` and has proper `title`/`description`
