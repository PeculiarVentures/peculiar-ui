import { useContext } from 'react';
import { renderHook } from '../test-utils';
import { useToast } from './use_toast';
import { ToastContext } from './toast_context';

describe('useToast()', () => {
  it('should return `ToastContext`', () => {
    const {
      result: result0,
    } = renderHook(useToast);
    const {
      result: result1,
    } = renderHook(() => useContext(ToastContext));

    expect(result0).toEqual(result1);
  });
});
