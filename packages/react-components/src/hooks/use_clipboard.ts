import React from 'react';
import { copyToClipboard } from '../utils';

/**
 * React hook to copy content to clipboard.
 */
export function useClipboard() {
  const [isCopied, setIsCopied] = React.useState(false);
  const timeout = React.useRef<ReturnType<typeof setTimeout>>();
  const mounted = React.useRef(false);

  React.useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  const copy = async (text: string) => {
    try {
      setIsCopied(true);
      clearTimeout(timeout.current);

      timeout.current = setTimeout(() => {
        if (mounted) {
          setIsCopied(false);
        }
      }, 1500);

      copyToClipboard(text);
    } catch {
      // ignore error
    }
  };

  return {
    copy, isCopied,
  };
}
