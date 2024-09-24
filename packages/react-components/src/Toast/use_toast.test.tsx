import React from 'react';

import { renderHook } from '../test-utils';
import { useToast } from './use_toast';
import { ToastContext } from './toast_context';

describe('useToast()', () => {
  it('Call methods provided by the context properly', () => {
    const addToastMock = jest.fn();
    const removeToastByIdMock = jest.fn();
    const removeAllToastsMock = jest.fn();

    const Provider = ({ children }: any) => (
      <ToastContext.Provider value={{
        addToast: addToastMock,
        removeToast: removeToastByIdMock,
        removeAllToasts: removeAllToastsMock,
      }}
      >
        {children}
      </ToastContext.Provider>
    );

    const { result } = renderHook(useToast, { wrapper: Provider });
    const { addToast, removeToast, removeAllToasts } = result.current;
    const payload = { message: 'Toast', id: 'test-id' };

    addToast(payload);
    removeToast(payload.id);
    removeAllToasts();

    expect(addToast).toHaveBeenCalledWith(payload);
    expect(removeToast).toHaveBeenCalledWith(payload.id);
    expect(addToast).toBeCalled();
  });
});
