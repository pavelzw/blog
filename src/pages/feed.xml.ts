import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { siteMetadata } from '../data/siteMetadata';

export const prerender = true;

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  return rss({
    title: siteMetadata.title,
    description: siteMetadata.description,
    site: context.site || siteMetadata.siteUrl,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary || '',
      link: `/blog/${post.slug}/`,
      categories: post.data.tags,
      author: `${siteMetadata.author.email} (${siteMetadata.author.name})`,
    })),
    customData: `<language>${siteMetadata.language}</language>`,
  });
}
