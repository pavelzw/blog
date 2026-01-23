import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lastmod: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    summary: z.string().optional(),
    images: z.array(z.string()).optional(),
    layoutType: z.enum(['PostSimple', 'PostLayout', 'PostBanner']).optional(),
  }),
});

export const collections = {
  blog,
};
