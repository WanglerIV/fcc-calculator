import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Math.js'i external olarak belirt
  optimizeDeps: {
    exclude: ['mathjs']
  }
});
