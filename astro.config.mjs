import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://scrubby.io',
  output: 'static',
  integrations: [
    react(),
    tailwind(),
    sitemap(),
    mdx(),
  ],
  build: {
    format: 'directory',
  },
  vite: {
    resolve: {
      alias: {
        'react-router-dom': path.resolve(__dirname, 'src/shims/react-router-dom.js'),
      },
    },
    ssr: {
      noExternal: ['lucide-react'],
    },
  },
});
