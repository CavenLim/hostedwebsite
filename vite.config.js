import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Migrated from Create React App. Notes:
// - base '/' because the site is served at the root of the custom domain.
// - build.outDir 'build' keeps the existing `gh-pages -d build` deploy script working.
// - The esbuild/optimizeDeps loader settings let Vite parse JSX inside .js files
//   (CRA allowed this; plain esbuild does not by default).
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'build',
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});
