import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Ensure that all routes go to index.html
        entryFileNames: 'index.html',
      },
    },
  },
  // Add this if deploying to a specific base path
  server: {
    historyApiFallback: true,
  },
});
