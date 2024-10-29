// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	output: 'hybrid',
  adapter: cloudflare(),
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
});
