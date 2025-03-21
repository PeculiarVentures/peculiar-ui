import React from 'react';

/**
 * A React hook for merging multiple refs into one ref.
 * @param refs React callback refs or refs created with `useRef()`, `createRef()`.
 */
export const useMergedRef = <T>(
  ...refs: React.Ref<T>[]
): React.RefCallback<T> => (element: T) => refs.forEach((ref) => {
  if (typeof ref === 'function') {
    ref(element);
  } else if (ref && typeof ref === 'object') {
    (ref as React.MutableRefObject<T>).current = element;
  }
});
