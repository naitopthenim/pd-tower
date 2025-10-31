/// <reference types="astro/client" />

// Type declarations for component imports
declare module '*.astro' {
  const Component: (props: Record<string, any>) => any;
  export default Component;
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const Component: DefineComponent<{}, {}, any>;
  export default Component;
}
