import { act } from 'react-dom/test-utils';
import { renderHook } from '../test-utils';
import { useClipboard } from './use_clipboard';
import { copyToClipboard } from '../utils';

jest.useFakeTimers();

jest.mock('../utils', () => ({
  copyToClipboard: jest.fn(),
}));

describe('useClipboard()', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('Return `isCopied=true` on successfully copied', async () => {
    const { result } = renderHook(useClipboard);

    await act(() => result.current.copy('text_stub'));

    expect(copyToClipboard).toBeCalled();
    expect(result.current.isCopied).toBe(true);
  });

  it('Ignore an error that occurs during copying', async () => {
    const { result } = renderHook(useClipboard);

    jest.mock('../utils', () => ({
      copyToClipboard: () => {
        throw new Error();
      },
    }));

    const copy = act(() => result.current.copy('text_stub'));

    await expect(copy).resolves.toBeUndefined();
  });

  it('`isCopied` remains `true` until the timeout expires and becomes `false` after', async () => {
    const { result, rerender } = renderHook(useClipboard);

    await act(() => result.current.copy('text_stub'));

    expect(result.current.isCopied).toBe(true);
    jest.runAllTimers();
    rerender();
    expect(result.current.isCopied).toBe(false);
  });
});
