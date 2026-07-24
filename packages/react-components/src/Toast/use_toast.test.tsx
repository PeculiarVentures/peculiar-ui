import { useContext } from 'react';
import { describe, it, expect } from 'vitest';
import { renderHook } from '../test-utils';
import { ToastContext } from './toast_context';
import { useToast } from './use_toast';

describe('useToast()', () => {
  it('should return `ToastContext`', () => {
    const { result: result0 } = renderHook(useToast);
    const { result: result1 } = renderHook(() => useContext(ToastContext));

    expect(result0).toEqual(result1);
  });
});
