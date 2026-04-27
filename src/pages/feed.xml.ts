import { getCollection, render } from 'astro:content';
import mdxRenderer from '@astrojs/mdx/server.js';
import rss, { type RSSFeedItem } from '@astrojs/rss';
import type { APIContext } from 'astro';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { siteMetadata } from '../data/siteMetadata';

export const prerender = true;

export async function GET(context: APIContext) {
  const container = await AstroContainer.create({
    renderers: [{ name: 'astro:jsx', ssr: mdxRenderer }],
  });

  const posts = await getCollection('blog');
  const externalPosts = await getCollection('externalPosts');

  const items: (RSSFeedItem & { pubDate: Date })[] = [];
  for (const post of posts) {
    const { Content } = await render(post);
    const content = await container.renderToString(Content);
    items.push({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary || '',
      link: `/blog/${post.id}/`,
      content,
    });
  }
  for (const post of externalPosts) {
    items.push({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: post.data.url,
    });
  }
  items.sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: siteMetadata.title,
    description: siteMetadata.description,
    site: context.site || siteMetadata.siteUrl,
    items,
    customData: `<language>${siteMetadata.language}</language>`,
  });
}
