import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: 'index.html',
      precompress: false,
      strict: true
    }),
    // If deploying to https://<user>.github.io/<repo>/, set this to '/<repo>'
    paths: {
      base: process.env.BASE_PATH || ''
    },
    prerender: {
      entries: ['*']
    }
  }
};

export default config;
