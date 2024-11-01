import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/aniketdobriyal.github.io/web-tech/', // Update with your repository name
});
