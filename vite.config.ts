import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';

import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "sass:math";',
      },
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    createSvgSpritePlugin({
      exportType: 'react',
      include: '**/icons/*.svg',
    }),
  ],
});
