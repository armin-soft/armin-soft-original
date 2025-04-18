
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'Assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const extType = info[info.length - 1];
          
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)) {
            return `Assets/Media/[name]-[hash][extname]`;
          }
          
          if (/\.(png|jpe?g|gif|svg|ico|webp)(\?.*)?$/i.test(assetInfo.name)) {
            return `Assets/Image/[name]-[hash][extname]`;
          }
          
          if (/\.(css)$/i.test(assetInfo.name)) {
            return `Assets/Style/[name]-[hash][extname]`;
          }
          
          if (/\.(js)$/i.test(assetInfo.name)) {
            return `Assets/Script/[name]-[hash][extname]`;
          }
          
          return `Assets/Other/[name]-[hash][extname]`;
        },
        chunkFileNames: 'Assets/Script/[name]-[hash].js',
        entryFileNames: 'Assets/Script/[name]-[hash].js',
      },
    },
  },
});
