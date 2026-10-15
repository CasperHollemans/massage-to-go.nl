// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://massage-to-go.nl',
  output: 'static',
  integrations: [sitemap()],
});
