import type { APIRoute } from 'astro';
import { siteMetadata } from '../data/siteMetadata';

export const prerender = true;

export const GET: APIRoute = () => {
  const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${siteMetadata.siteUrl}/sitemap-index.xml
`.trim();

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
