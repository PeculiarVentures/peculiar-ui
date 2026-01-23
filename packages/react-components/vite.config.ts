/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: false,
    environment: 'jsdom', // required for React DOM tests
    setupFiles: 'vitest.setup.ts', // optional setup file
  },
});
