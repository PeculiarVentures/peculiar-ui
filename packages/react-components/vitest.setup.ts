import '@testing-library/jest-dom/vitest';
import { createSerializer } from '@emotion/jest';
import { cleanup } from '@testing-library/react';
import { afterEach, expect, vi } from 'vitest';

// @ts-expect-error: Mock React ACT environment for Vitest
global.IS_REACT_ACT_ENVIRONMENT = true;

expect.addSnapshotSerializer(
  createSerializer({
    includeStyles: true,
  }),
);

// @ts-expect-error: Mock IntersectionObserver for Vitest
window.IntersectionObserver = vi.fn<() => IntersectionObserver>(() => ({
  observe: vi.fn<() => void>(),
  unobserve: vi.fn<() => void>(),
  disconnect: vi.fn<() => void>(),
  root: null,
  rootMargin: '',
  thresholds: [],
  takeRecords: vi.fn<() => IntersectionObserverEntry[]>(),
}));

afterEach(() => {
  cleanup();
});
