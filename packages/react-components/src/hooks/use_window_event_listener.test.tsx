import { renderHook } from '../test-utils';
import { useWindowEventListener } from './use_window_event_listener';

describe('useWindowEventListener()', () => {
  const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

  afterEach(() => {
    removeEventListenerSpy.mockClear();
  });

  it('should call listener on event fire', () => {
    const listenerMock = jest.fn();

    renderHook(() => useWindowEventListener(
      'click',
      listenerMock,
    ));

    window.dispatchEvent(new Event('click'));

    expect(listenerMock).toBeCalled();
  });

  it('should remove listener on unmount by default', () => {
    const listenerMock = jest.fn();
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
      jest.fn(),
      [],
      false,
    ));

    unmount();

    expect(removeEventListenerSpy).not.toBeCalled();
  });
});
