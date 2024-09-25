import { renderHook } from '../test-utils';
import { useDebounceCallback } from './use_debounce_callback';

jest.useFakeTimers();

const DEBOUNCE_TIMEOUT = 500;

describe('useDebounceCallback()', () => {
  const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');

  afterEach(() => {
    clearTimeoutSpy.mockClear();
  });

  it('should call the callback after timeout', () => {
    const callbackMock = jest.fn();
    const { result } = renderHook(() => useDebounceCallback(
      callbackMock,
      DEBOUNCE_TIMEOUT,
    ));

    result.current();
    expect(callbackMock).not.toBeCalled();

    jest.runAllTimers();
    expect(callbackMock).toBeCalled();
  });

  it('should clear previous timer on the next debounced function call', () => {
    const setTimeoutSpy = jest.spyOn(global, 'setTimeout');
    const { result } = renderHook(() => useDebounceCallback(
      jest.fn(),
      DEBOUNCE_TIMEOUT,
    ));

    // Call timeout with callback on first call
    result.current();
    expect(setTimeoutSpy).toBeCalled();

    // Clear previous callback timeout and set a new one on second call
    result.current();
    expect(clearTimeoutSpy).toBeCalled();
    expect(setTimeoutSpy).toBeCalled();
  });

  it('should clear timer on unmount if `cleanUp=true', () => {
    const { result, unmount } = renderHook(() => useDebounceCallback(
      jest.fn(),
      DEBOUNCE_TIMEOUT,
      true,
    ));

    result.current();

    unmount();

    expect(clearTimeoutSpy).toBeCalled();
  });
});
