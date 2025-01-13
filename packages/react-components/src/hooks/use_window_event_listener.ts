import React from 'react';

export const useWindowEventListener = <T extends keyof WindowEventMap>(
  event: T,
  listener: (this: Window, ev: WindowEventMap[T]) => any,
  deps?: React.DependencyList,
  removeOnUnmount = true,
) => {
  React.useEffect(() => {
    window.addEventListener(event, listener);

    if (removeOnUnmount) {
      return () => {
        window.removeEventListener(event, listener);
      };
    }

    return undefined;
  }, deps);
};
