import { renderHook } from '../test-utils';
import { useDebounceCallback } from './use_debounce_callback';

vi.useFakeTimers();

const DEBOUNCE_TIMEOUT = 500;

describe('useDebounceCallback()', () => {
  const clearTimeoutSpy = vi.spyOn(global, 'clearTimeout');

  afterEach(() => {
    clearTimeoutSpy.mockClear();
  });

  it('should call the callback after timeout', () => {
    const callbackMock = vi.fn();
    const { result } = renderHook(() => useDebounceCallback(
      callbackMock,
      DEBOUNCE_TIMEOUT,
    ));

    result.current();
    expect(callbackMock).not.toHaveBeenCalled();

    vi.advanceTimersByTime(DEBOUNCE_TIMEOUT);
    expect(callbackMock).toHaveBeenCalled();
  });

  it.only('should clear previous timer on the next debounced function call', () => {
    const setTimeoutSpy = vi.spyOn(global, 'setTimeout');
    const callbackMock = vi.fn();
    const { result } = renderHook(() => useDebounceCallback(
      callbackMock,
      DEBOUNCE_TIMEOUT,
    ));

    // Call timeout with callback on first call
    result.current();
    expect(setTimeoutSpy).toHaveBeenCalled();
    expect(callbackMock).not.toHaveBeenCalled();

    // Clear previous callback timeout and set a new one on second call
    result.current();
    expect(clearTimeoutSpy).toHaveBeenCalled();
    expect(setTimeoutSpy).toHaveBeenCalled();

    vi.advanceTimersByTime(DEBOUNCE_TIMEOUT);

    expect(callbackMock).toHaveBeenCalled();
  });

  it('should clear timer on unmount if `cleanUp=true', () => {
    const { result, unmount } = renderHook(() => useDebounceCallback(
      vi.fn(),
      DEBOUNCE_TIMEOUT,
      true,
    ));

    result.current();

    unmount();

    expect(clearTimeoutSpy).toHaveBeenCalled();
  });
});
