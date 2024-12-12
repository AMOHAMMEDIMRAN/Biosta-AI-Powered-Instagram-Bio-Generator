import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://generativelanguage.googleapis.com', // The target URL for Gemini API
        changeOrigin: true, // Ensure the request appears as if it comes from the same origin
        rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite `/api` to empty string, leaving the rest of the URL intact
      },
    },
  },
});
