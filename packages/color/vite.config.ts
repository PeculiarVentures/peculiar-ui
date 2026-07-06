/// <reference types="vitest/config" />
// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: false,
    environment: 'node',
  },
});
