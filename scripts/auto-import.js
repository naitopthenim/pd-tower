#!/usr/bin/env node
import { readFile, writeFile } from 'fs/promises';
import { glob } from 'glob';

/**
 * Auto-import script for Astro files
 * Automatically adds imports to Astro files based on component usage
 */

const COMPONENT_MAP = {
  Layout: "import Layout from '../layouts/Layout.astro';",
  Welcome: "import Welcome from '../components/Welcome.astro';",
  TailwindDemo: "import TailwindDemo from '../components/TailwindDemo.vue';",
  AutoImportShowcase:
    "import AutoImportShowcase from '../components/AutoImportShowcase.vue';",
};

async function processAstroFiles() {
  try {
    // Find all .astro files in pages directory
    const files = await glob('src/pages/**/*.astro');

    for (const file of files) {
      console.log(`Processing ${file}...`);

      const content = await readFile(file, 'utf-8');

      // Skip if already has auto-generated imports
      if (content.includes('AUTO-GENERATED IMPORTS')) {
        console.log(`  ✓ Already processed`);
        continue;
      }

      // Find used components
      const usedComponents = [];
      const usedImports = [];

      for (const [componentName, importStatement] of Object.entries(
        COMPONENT_MAP
      )) {
        const regex = new RegExp(`<${componentName}[\\s/>]`, 'g');
        if (regex.test(content)) {
          usedComponents.push(componentName);
          usedImports.push(importStatement);
        }
      }

      if (usedComponents.length === 0) {
        console.log(`  ✓ No components to import`);
        continue;
      }

      // Add imports to frontmatter
      const frontmatterMatch = content.match(/^(---\n)([\s\S]*?)(\n---)/);

      let newContent;
      if (frontmatterMatch) {
        const [full, start, existing, end] = frontmatterMatch;
        const autoImportComment =
          '// ✨ AUTO-GENERATED IMPORTS (run: pnpm auto-import)';
        newContent = content.replace(
          full,
          `${start}${autoImportComment}\n${usedImports.join('\n')}\n${existing}${end}`
        );
      } else {
        const autoImportComment =
          '// ✨ AUTO-GENERATED IMPORTS (run: pnpm auto-import)';
        newContent = `---\n${autoImportComment}\n${usedImports.join('\n')}\n---\n\n${content}`;
      }

      await writeFile(file, newContent);
      console.log(`  ✓ Added imports: ${usedComponents.join(', ')}`);
    }

    console.log('\n🎉 Auto-import complete!');
  } catch (error) {
    console.error('Error processing files:', error);
  }
}

processAstroFiles();
