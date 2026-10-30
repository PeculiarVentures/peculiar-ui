import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  // Resolve @peculiar/color to its sources through the tsconfig paths.
  resolve: { tsconfigPaths: true },
  test: {
    projects: [
      {
        extends: true,
        test: {
          name: 'color',
          environment: 'node',
          include: ['packages/color/src/**/*.test.ts'],
        },
      },
      {
        extends: true,
        plugins: [react()],
        test: {
          name: 'react-components',
          environment: 'jsdom',
          include: ['packages/react-components/src/**/*.test.{ts,tsx}'],
          setupFiles: ['packages/react-components/vitest.setup.ts'],
        },
      },
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      include: ['packages/*/src/**/*'],
      exclude: [
        'packages/*/src/**/*.test.{ts,tsx}',
        'packages/*/src/**/*.stories.tsx',
        'packages/*/src/**/*.mdx',
        '**/build/**',
      ],
    },
  },
});
