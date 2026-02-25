import React from 'react';

/**
 * React hook that runs a callback only once when the component mounts.
 * @param callback The callback function to run on mount.
 */
export function useMount(callback: () => void) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(callback, []);
}
