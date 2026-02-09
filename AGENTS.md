# AGENTS.md

Instructions for AI agents working on this codebase.

## Project Overview

Personal blog built with Astro 5, deployed on Vercel at https://pavel.pink.

## Commands

```bash
bun run dev        # Start dev server
bun run build      # Build for production
bun run check      # Astro + TypeScript type checking
bun run lint       # Check with Biome
bun run lint:fix   # Fix lint issues
bun run format     # Format code with Biome
```

After making changes, run `bun run lint:fix` then `bun run check`. Use `bun`, not npm or yarn.

CI runs typos check (`crate-ci/typos`), `bun run check`, and `bun run build`.

## Tech Stack

- **Framework**: Astro 5 with MDX, deployed via `@astrojs/vercel`
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite` plugin, config in `src/styles/global.css` via `@theme`)
- **Linting/Formatting**: Biome (single quotes, semicolons, 2-space indent, 100 char width). Biome ignores `.astro`, `.mdx`, `.md`, and `.css` files.
- **Content processing**: rehype-typst for math, rehype-prism-plus for syntax highlighting, remark-gfm, Shiki with github-dark theme

## Architecture

**Content system**: Blog posts are MDX files in `src/content/blog/`. Schema defined in `src/content/config.ts` with Zod. Posts specify a `layoutType` frontmatter field (`PostSimple`, `PostLayout`, or `PostBanner`) which `src/pages/blog/[...slug].astro` uses for dynamic layout selection. Default is `PostSimple`.

**Layouts**: `BaseLayout.astro` wraps all pages (includes `BaseHead` for SEO/meta, header, footer, theme toggle, and the code block copy-button script). Post layouts (`PostSimple`, `PostLayout`, `PostBanner`) are selected per-post via frontmatter.

**Routing**: File-based. `/blog` redirects to `/` (home page is the blog list). Dynamic blog routes via `[...slug].astro`. Special endpoints: `/cv` (proxies PDF, `prerender: false`), `/feed.xml` (RSS), `/robots.txt`.

**Theme**: Dark/light/system toggle. State in localStorage. Inline script in `BaseHead.astro` prevents flash. Dark mode variant defined in `global.css`.

**Site config**: `src/data/siteMetadata.ts` for site-wide settings, `src/data/headerNavLinks.ts` for navigation.

**Path alias**: `@/*` maps to `./src/*`.

## Blog Post Frontmatter

```yaml
title: "Post Title"
date: 2026-01-24
tags: [python, machine-learning]
draft: false          # set true to hide from production
summary: "Brief description"
layoutType: PostSimple  # or PostLayout, PostBanner
bannerImage: ./image.png  # for PostBanner layout
badge:                  # optional
  github: "owner/repo"  # or youtube: "video-id"
```

## Asset Handling

- `src/assets/` for images that need Astro optimization
- `public/static/` for files served as-is (favicons, static images)
