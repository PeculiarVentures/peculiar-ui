import * as React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

/**
 * Types.
 */
interface StyledEngineProviderProps {
  children: React.ReactElement;
};
/**
 *
 */

// prepend: `true` moves components styles to the top of the <head> so they're loaded first.
// It allows developers to easily override components
// styles with other styling solutions, like CSS modules.
let cache: ReturnType<typeof createCache>;

if (typeof document === 'object') {
  cache = createCache({
    key: 'css',
    prepend: true,
  });
}

export const StyledEngineProvider: React.FC<StyledEngineProviderProps> = (props) => {
  const {
    children,
  } = props;

  if (!cache) {
    return children;
  }

  return (
    <CacheProvider value={cache}>
      {children}
    </CacheProvider>
  );
};
