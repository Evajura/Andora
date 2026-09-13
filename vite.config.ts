import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: { copyPublicDir: !isSsrBuild },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));
