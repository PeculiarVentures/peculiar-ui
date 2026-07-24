import React from 'react';
import { useEnhancedEffect } from './use_enhanced_effect';

/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */
export function useEventCallback<Args extends unknown[], Return>(
  fn: (...args: Args) => Return,
): (...args: Args) => Return {
  const ref = React.useRef(fn);

  useEnhancedEffect(() => {
    ref.current = fn;
  });

  // @ts-expect-error - ref.current is not undefined
  return React.useCallback((...args: Args) => (0, ref.current!)(...args), []);
}
