
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  server: {
    host: "::",
    port: 8080
  },
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
          if (!assetInfo.name) return 'Assets/Other/[name][extname]';
          
          const info = assetInfo.name.split('.');
          const extType = info[info.length - 1];
          
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i.test(assetInfo.name)) {
            return `Assets/Media/[name][extname]`;
          }
          
          if (/\.(png|jpe?g|gif|svg|ico|webp)$/i.test(assetInfo.name)) {
            return `Assets/Image/[name][extname]`;
          }
          
          if (/\.(css)$/i.test(assetInfo.name)) {
            return `Assets/Style/[name][extname]`;
          }
          
          if (/\.(js)$/i.test(assetInfo.name)) {
            return `Assets/Script/[name][extname]`;
          }
          
          return `Assets/Other/[name][extname]`;
        },
        chunkFileNames: 'Assets/Script/[name].js',
        entryFileNames: 'Assets/Script/[name].js',
      },
    },
  },
}));
