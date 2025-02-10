import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    minify: false,
    rollupOptions: {
      output: {
        assetFileNames: function (assetInfo) {
          if (assetInfo.name?.endsWith('.css')) {
            return '[name]-vue.css';
          }
          return '[name]-vue.[ext]';
        },
        chunkFileNames: '[name]-vue.js',
        entryFileNames: '[name]-vue.js',
      },
    },
  },
});
