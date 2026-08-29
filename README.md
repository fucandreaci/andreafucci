# andreafucci.com

Personal site hub for Andrea Fucci — projects and work experience.

Built with [Astro](https://astro.build), styled with
[Tailwind CSS](https://tailwindcss.com), scaffolded from
[Astro Nano](https://github.com/markhorn-dev/astro-nano) and restructured to
match an internal design spec (not part of this repo).

## Stack

- **Astro 7** — static output, content collections, MDX
- **Tailwind CSS 4** — CSS-first config (`src/styles/global.css`), via
  `@tailwindcss/vite`
- **TypeScript**

## Getting started

```bash
npm install
npm run dev
```

The site runs at `http://localhost:4321`.

```bash
npm run build    # type-checks with astro check, then builds to dist/
npm run preview  # preview the production build locally
```