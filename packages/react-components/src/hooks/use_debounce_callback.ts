import React from 'react';

export function useDebounceCallback<Params extends any[]>(
  func: (...args: Params) => void,
  delay = 300,
  cleanUp = false,
) {
  const timeoutRef = React.useRef<NodeJS.Timeout>();

  // Clear timer.
  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  };

  const debounced = (...args: Params) => {
    clearTimer();

    timeoutRef.current = setTimeout(() => func(...args), delay);
  };

  debounced.clear = () => {
    clearTimer();
  };

  // Clear timer when component is unmounted and `cleanUp` is `true` and cancel last function call.
  React.useEffect(
    () => (cleanUp ? clearTimer : undefined),
    [cleanUp],
  );

  return debounced;
}
