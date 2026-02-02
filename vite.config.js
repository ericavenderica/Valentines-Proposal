import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        question: resolve(__dirname, 'question.html'),
        message: resolve(__dirname, 'message.html'),
      },
    },
  },
});