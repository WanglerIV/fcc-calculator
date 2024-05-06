import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Vite eklentilerini burada tanımlayın
  plugins: [
    // React eklentisini kullanmak için
    react(),
  ],

  // Harici modüllerin tanımlandığı bölüm
  optimizeDeps: {
    // Harici kütüphaneleri buraya ekleyin
    include: ['mathjs'],
  },
});
