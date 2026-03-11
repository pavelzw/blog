import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      lastmod: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      summary: z.string().optional(),
      bannerImage: image().optional(),
      layoutType: z.enum(['PostSimple', 'PostLayout', 'PostBanner']).optional(),
      badges: z
        .array(
          z.union([
            z.object({ github: z.string(), label: z.string().optional() }),
            z.object({ youtube: z.string(), label: z.string().optional() }),
          ]),
        )
        .default([]),
    }),
});

export const collections = {
  blog,
};
