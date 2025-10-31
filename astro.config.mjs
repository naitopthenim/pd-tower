// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import { mergeConfig } from 'vite';
import viteConfig from './vite.config.ts';

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
  },

  integrations: [
    vue(),
    tailwind(), // Tailwind CSS integration
  ],
  server: {
    port: 3000, // Preferred port, will auto-increment if busy
  },

  // @ts-ignore
  vite: mergeConfig(viteConfig, {
    // plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  }),
});
