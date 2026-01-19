/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // allows using describe/test/expect without import
    environment: 'jsdom', // required for React DOM tests
    setupFiles: './src/setupTests.ts', // optional setup file
  },
});
