import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  alias: {
    '@shadcn/ui': '/node_modules/@shadcn/ui',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "tailwindcss/tailwind.css"; @import "@shadcn/ui/dist/index.css";',
      },
    },
  },
});
