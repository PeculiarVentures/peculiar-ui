import '@testing-library/jest-dom/vitest';
import { createSerializer } from '@emotion/jest';
import { cleanup } from '@testing-library/react';
import { afterEach, expect, vi } from 'vitest';

// @ts-expect-error: Mock React ACT environment for Vitest
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

expect.addSnapshotSerializer(
  createSerializer({
    includeStyles: true,
  }),
);

// React 18 mirrors an empty controlled value into a value="" attribute and React 19
// doesn't. Drop it so the same snapshots pass on both versions.
expect.addSnapshotSerializer({
  test: (val: unknown) =>
    val instanceof HTMLElement && val.getAttribute('value') === '' && 'value' in val,
  serialize: (val: HTMLElement, config, indentation, depth, refs, printer) => {
    val.removeAttribute('value');

    return printer(val, config, indentation, depth, refs);
  },
});

// Mock IntersectionObserver for Vitest
window.IntersectionObserver = vi.fn<() => IntersectionObserver>(() => ({
  observe: vi.fn<() => void>(),
  unobserve: vi.fn<() => void>(),
  disconnect: vi.fn<() => void>(),
  root: null,
  rootMargin: '',
  scrollMargin: '',
  thresholds: [],
  takeRecords: vi.fn<() => IntersectionObserverEntry[]>(),
}));

afterEach(() => {
  cleanup();
});
