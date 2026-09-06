import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vadodaraexperts.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      serialize(item) {
        item.lastmod = new Date();
        return item;
      },
    }),
  ],
});
