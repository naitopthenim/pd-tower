// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import { mergeConfig } from 'vite';
import viteConfig from './vite.config.ts';

// https://astro.build/config
export default defineConfig({
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
