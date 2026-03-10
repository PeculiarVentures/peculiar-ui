import React from 'react';
import { useEnhancedEffect } from './use_enhanced_effect';

function getMatches(query: string): boolean {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia(query).matches;
  }

  return false;
}

/**
 * A hook that returns `true` if the media query matched and `false` if not. This
 * hook will always return `false` when rendering on the server.
 *
 * @param query The media query you want to match against e.g. `"only screen and (min-width: 12em)"`
 */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(() => getMatches(query));

  useEnhancedEffect(() => {
    const media = window.matchMedia(query);

    setMatches(media.matches);

    const listener = () => {
      setMatches(media.matches);
    };

    media.addListener(listener);

    return () => {
      media.removeListener(listener);
    };
  }, [query]);

  return matches;
}
