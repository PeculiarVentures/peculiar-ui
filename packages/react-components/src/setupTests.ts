import '@testing-library/jest-dom';
import { createSerializer } from '@emotion/jest';

expect.addSnapshotSerializer(createSerializer({
  includeStyles: true,
}));

// @ts-expect-error: Mock IntersectionObserver for Vitest
window.IntersectionObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
}));
