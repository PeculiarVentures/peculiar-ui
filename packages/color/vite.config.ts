/// <reference types="vitest/config" />
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true, // allows using describe/test/expect without import
    environment: 'node',
  },
});
