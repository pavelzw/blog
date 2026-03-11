import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import rehypeTypst from '@myriaddreamin/rehype-typst';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { shikiTitleTransformer } from './src/plugins/shiki-title';

export default defineConfig({
  site: 'https://pavel.pink',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        // https://github.com/withastro/astro/issues/15839
        onwarn(warning, defaultHandler) {
          if (warning.message?.includes('has been externalized for browser compatibility')) return;
          defaultHandler(warning);
        },
      },
    },
  },
  markdown: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      rehypeTypst,
      [rehypePrismPlus, { ignoreMissing: true }],
    ],
    shikiConfig: {
      theme: 'catppuccin-mocha',
      transformers: [shikiTitleTransformer()],
    },
  },
  output: 'static',
  adapter: vercel(),
});
