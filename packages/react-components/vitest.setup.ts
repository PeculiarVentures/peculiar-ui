import '@testing-library/jest-dom/vitest';
import { afterEach, expect, vi } from 'vitest';
import { createSerializer } from '@emotion/jest';
import { cleanup } from '@testing-library/react';

// @ts-expect-error: Mock React ACT environment for Vitest
global.IS_REACT_ACT_ENVIRONMENT = true;

expect.addSnapshotSerializer(createSerializer({
  includeStyles: true,
}));

// @ts-expect-error: Mock IntersectionObserver for Vitest
window.IntersectionObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
}));

afterEach(() => {
  cleanup();
});
