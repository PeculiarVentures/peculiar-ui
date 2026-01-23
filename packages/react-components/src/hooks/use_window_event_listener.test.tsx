import { describe, it, expect, afterEach, vi } from 'vitest';
import { renderHook } from '../test-utils';
import { useWindowEventListener } from './use_window_event_listener';

describe('useWindowEventListener()', () => {
  const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

  afterEach(() => {
    removeEventListenerSpy.mockClear();
  });

  it('should call listener on event fire', () => {
    const listenerMock = vi.fn();

    renderHook(() => useWindowEventListener(
      'click',
      listenerMock,
    ));

    window.dispatchEvent(new Event('click'));

    expect(listenerMock).toBeCalled();
  });

  it('should remove listener on unmount by default', () => {
    const listenerMock = vi.fn();
    const { unmount } = renderHook(() => useWindowEventListener(
      'click',
      listenerMock,
    ));

    unmount();

    expect(removeEventListenerSpy).toBeCalledWith('click', listenerMock);
  });

  it('should don\'t remove listener on unmount if `removeOnUnmount=false`', () => {
    const { unmount } = renderHook(() => useWindowEventListener(
      'click',
      vi.fn(),
      [],
      false,
    ));

    unmount();

    expect(removeEventListenerSpy).not.toBeCalled();
  });
});
