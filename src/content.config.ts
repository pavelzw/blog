import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'zod';

const badgeSchema = z.array(
  z.union([
    z.object({ github: z.string(), label: z.string().optional() }),
    z.object({ youtube: z.string(), label: z.string().optional() }),
  ]),
);

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      lastmod: z.coerce.date().optional(),
      summary: z.string().optional(),
      bannerImage: image().optional(),
      layoutType: z.enum(['PostSimple', 'PostLayout', 'PostBanner']).optional(),
      badges: badgeSchema.default([]),
    }),
});

const externalPosts = defineCollection({
  loader: file('src/content/external-posts.yaml'),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    url: z.url(),
    badges: badgeSchema.default([]),
  }),
});

export const collections = {
  blog,
  externalPosts,
};
