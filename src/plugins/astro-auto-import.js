import { promises as fs } from 'fs';
import path from 'path';

// Custom Vite plugin for TRUE auto-imports in Astro files
export function astroAutoImportPlugin() {
  return {
    name: 'astro-auto-import',
    async transform(code, id) {
      // Only process .astro files
      if (!id.endsWith('.astro')) return null;

      // Skip if file already has imports from components.ts
      if (code.includes("from '../lib/components")) return null;

      // Define components that should be auto-imported
      const autoImportComponents = [
        'Layout',
        'Welcome',
        'TailwindDemo',
        'AutoImportShowcase',
        'VueCounter',
        'HelloVue',
        'AutoImportDemo',
      ];

      // Find which components are used in the template
      const usedComponents = [];

      for (const component of autoImportComponents) {
        const regex = new RegExp(`<${component}[\\s>]`, 'g');
        if (regex.test(code)) {
          usedComponents.push(component);
        }
      }

      // If no components are used, return original code
      if (usedComponents.length === 0) return null;

      // Generate import statement
      const importStatement = `import { ${usedComponents.join(', ')} } from '../lib/components.ts';`;

      // Check if frontmatter exists
      const frontmatterMatch = code.match(/^(---\n)([\s\S]*?)(\n---)/);

      if (frontmatterMatch) {
        // Add to existing frontmatter
        const [full, start, existing, end] = frontmatterMatch;
        const newFrontmatter = `${start}// ✨ AUTO-GENERATED IMPORTS\n${importStatement}\n${existing}${end}`;
        return code.replace(full, newFrontmatter);
      } else {
        // Create new frontmatter
        return `---\n// ✨ AUTO-GENERATED IMPORTS\n${importStatement}\n---\n\n${code}`;
      }
    },
  };
}
