import React from 'react';

import {
  render,
  renderHook,
  screen,
  fireEvent,
} from '../test-utils';
import { useEventCallback } from './use_event_callback';

describe('useEventCallback()', () => {
  it('Do not call the callback during render', () => {
    const callbackMock = jest.fn();
    const { result } = renderHook(() => useEventCallback(callbackMock));

    render(
      // eslint-disable-next-line react/button-has-type
      <button onClick={result.current}>Button</button>,
    );

    expect(callbackMock).not.toBeCalled();
  });

  it('Call callback on event trigger', () => {
    const callbackMock = jest.fn();
    const { result } = renderHook(() => useEventCallback(callbackMock));

    render(
      // eslint-disable-next-line react/button-has-type
      <button onClick={result.current}>Button</button>,
    );

    fireEvent.click(screen.getByText('Button'));

    expect(callbackMock).toBeCalled();
  });

  it('Do not change callback reference on re-render', () => {
    const { result, rerender } = renderHook(() => useEventCallback(() => {}));
    const initialReference = result.current;

    rerender();

    expect(initialReference).toEqual(result.current);
  });
});
