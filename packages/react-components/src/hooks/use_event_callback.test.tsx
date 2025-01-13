import React from 'react';

import {
  render,
  renderHook,
  screen,
  fireEvent,
} from '../test-utils';
import { useEventCallback } from './use_event_callback';

describe('useEventCallback()', () => {
  it('should do not call the callback during render', () => {
    const callbackMock = jest.fn();
    const { result } = renderHook(() => useEventCallback(callbackMock));

    render(

      <button onClick={result.current}>Button</button>,
    );

    expect(callbackMock).not.toBeCalled();
  });

  it('should call callback on event trigger', () => {
    const callbackMock = jest.fn();
    const { result } = renderHook(() => useEventCallback(callbackMock));

    render(

      <button onClick={result.current}>Button</button>,
    );

    fireEvent.click(screen.getByText('Button'));

    expect(callbackMock).toBeCalled();
  });

  it('should do not change callback reference on re-render', () => {
    const { result, rerender } = renderHook(() => useEventCallback(() => {}));
    const initialReference = result.current;

    rerender();

    expect(initialReference).toEqual(result.current);
  });
});
