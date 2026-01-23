import { describe, it, expect, afterEach, vi } from 'vitest';

vi.mock('../utils', () => ({
  copyToClipboard: vi.fn(),
}));

import { act, renderHook } from '../test-utils';
import { copyToClipboard } from '../utils';
import { useClipboard } from './use_clipboard';

vi.useFakeTimers();

describe('useClipboard()', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should return `isCopied=true` on successfully copied', async () => {
    const { result } = renderHook(useClipboard);

    await act(() => result.current.copy('text_stub'));

    expect(copyToClipboard).toHaveBeenCalled();
    expect(result.current.isCopied).toBe(true);
  });

  it('should ignore an error that occurs during copying', async () => {
    const { result } = renderHook(useClipboard);

    vi.mocked(copyToClipboard).mockImplementation(() => {
      throw new Error();
    });

    const copy = act(() => result.current.copy('text_stub'));

    await expect(copy).resolves.toBeUndefined();
  });

  it('should remain `isCopied=true` until the timeout expires and becomes `false` after', async () => {
    const { result, rerender } = renderHook(useClipboard);

    await act(() => result.current.copy('text_stub'));

    expect(result.current.isCopied).toBe(true);
    act(() => vi.advanceTimersByTime(1500));
    rerender();
    expect(result.current.isCopied).toBe(false);
  });
});
