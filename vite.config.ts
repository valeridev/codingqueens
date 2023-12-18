import generouted from '@generouted/react-router/plugin';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), generouted()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
