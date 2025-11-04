// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import { mergeConfig } from 'vite';
import viteConfig from './vite.config.ts';
// import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  // NOTE: Support server-side rendering (SSR) with Astro and Node.js adapter
  // output: 'server', // Enable SSR mode
  // adapter: node({
  //   mode: 'standalone', // or 'middleware' if using with Express/Fastify
  // }),

  prefetch: {
    prefetchAll: true,
  },

  integrations: [
    vue(),
    // Removed @astrojs/tailwind integration for Tailwind CSS v4 compatibility
  ],
  server: {
    port: 3000, // Preferred port, will auto-increment if busy
  },

  // @ts-ignore
  vite: mergeConfig(viteConfig, {
    css: {
      postcss: './postcss.config.cjs',
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  }),
});
