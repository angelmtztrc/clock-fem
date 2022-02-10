import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/assets': path.resolve(__dirname, './src/assets'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/styles': path.resolve(__dirname, './src/styles')
    }
  },
  plugins: [react()]
});
