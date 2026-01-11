import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.sederacybooks.com',
  integrations: [react(), tailwind({
    configFile: './tailwind.config.mjs' 
  }), sitemap()]
});