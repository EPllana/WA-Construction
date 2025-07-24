import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify('shkruaj_key_ketu')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  },
  base: '/',
});
