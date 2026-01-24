# AGENTS.md

Instructions for AI agents working on this codebase.

## Project Overview

Personal blog built with Astro, deployed at <https://pavel.pink>.

## Tech Stack

- **Framework**: Astro 5 with static output
- **Content**: MDX for blog posts in `src/content/blog/`
- **Styling**: Tailwind CSS v4 (uses `@tailwindcss/vite` plugin)
- **Package Manager**: Bun
- **Linting/Formatting**: Biome

## Commands

```bash
bun run dev        # Start dev server
bun run build      # Build for production
bun run lint       # Check with Biome
bun run lint:fix   # Fix lint issues
bun run format     # Format code
bun run check      # TypeScript check
```

## Code Style

After making changes, run `bun run lint:fix` to run biome.

## Project Structure

- `src/pages/` - Astro pages (file-based routing)
- `src/content/blog/` - MDX blog posts
- `src/layouts/` - Page layouts
- `src/components/` - Reusable Astro components
- `src/data/` - Site metadata and navigation config
- `public/static/` - Static assets (images, favicons)

## Writing Blog Posts

Create `.mdx` files in `src/content/blog/` with frontmatter:

```mdx
---
title: "Post Title"
description: "Brief description"
pubDate: 2026-01-24
---

Content here...
```

## Notes

- Biome ignores `.astro`, `.mdx`, and `.md` files
- Use `bun` not `npm` or `yarn`
- Images go in `src/assets/` for optimization or `public/static/` for direct serving
