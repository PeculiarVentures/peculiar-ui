import React from 'react';
import { IS_SERVER, useEnhancedEffect } from './use_enhanced_effect';

/**
 * A hook that returns `true` if the media query matched and `false` if not. This
 * hook will always return `false` when rendering on the server.
 *
 * @param query The media query you want to match against e.g. `"only screen and (min-width: 12em)"`
 */
export function useMediaQuery(query: string, defaultValue = false) {
  const [matches, setMatches] = React.useState(() => {
    if (IS_SERVER) {
      return defaultValue;
    }

    return window.matchMedia(query).matches;
  });

  useEnhancedEffect(() => {
    const matchMedia = window.matchMedia(query);

    const onChange = () => {
      setMatches(matchMedia.matches);
    };

    matchMedia.addListener(onChange);

    return () => {
      matchMedia.removeListener(onChange);
    };
  }, [query]);

  return matches;
}
