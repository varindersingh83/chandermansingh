import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://varindersingh83.github.io',
  base: '/chandermansingh',
  integrations: [tailwind(), mdx(), sitemap()],
  markdown: {
    syntaxHighlight: 'prism'
  }
});
