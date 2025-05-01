import { act, renderHook } from '../test-utils';
import { copyToClipboard } from '../utils';
import { useClipboard } from './use_clipboard';

jest.useFakeTimers();

jest.mock('../utils', () => ({
  copyToClipboard: jest.fn(),
}));

describe('useClipboard()', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return `isCopied=true` on successfully copied', async () => {
    const { result } = renderHook(useClipboard);

    await act(() => result.current.copy('text_stub'));

    expect(copyToClipboard).toBeCalled();
    expect(result.current.isCopied).toBe(true);
  });

  it('should ignore an error that occurs during copying', async () => {
    const { result } = renderHook(useClipboard);

    jest.mock('../utils', () => ({
      copyToClipboard: () => {
        throw new Error();
      },
    }));

    const copy = act(() => result.current.copy('text_stub'));

    await expect(copy).resolves.toBeUndefined();
  });

  it('should remain `isCopied=true` until the timeout expires and becomes `false` after', async () => {
    const { result, rerender } = renderHook(useClipboard);

    await act(() => result.current.copy('text_stub'));

    expect(result.current.isCopied).toBe(true);
    act(() => jest.advanceTimersByTime(1500));
    rerender();
    expect(result.current.isCopied).toBe(false);
  });
});
