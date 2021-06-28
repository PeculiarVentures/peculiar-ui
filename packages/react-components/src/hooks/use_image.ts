import {
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import { useEnhancedEffect } from '../utils';

export type UseImageOptions = {
  /**
   * The image `src` attribute.
   */
  src: string;
  /**
   * A callback for when the image `src` has been loaded.
   */
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  /**
   * A callback for when there was an error loading the image `src`.
   */
  onError?: (error: string | React.SyntheticEvent<HTMLImageElement, Event>) => void;
};

type Status = 'loading' | 'failed' | 'pending' | 'loaded';

/**
 * React hook that loads an image in the browser,
 * and let's us know the `status` so we can show image
 * fallback if it is still `pending`
 *
 * @returns the status of the image loading progress
 *
 * @example
 *
 * ```jsx
 * function App(){
 *   const status = useImage({ src: "image.png" })
 *   return status === "loaded" ? <img src="image.png" /> : <Placeholder />
 * }
 * ```
 */
export function useImage(options: UseImageOptions) {
  const {
    src,
    onLoad,
    onError,
  } = options;

  const [status, setStatus] = useState<Status>('pending');

  useEffect(() => {
    setStatus(src ? 'loading' : 'pending');
  }, [src]);

  const imageRef = useRef<HTMLImageElement | null>();

  const flush = () => {
    if (imageRef.current) {
      imageRef.current.onload = null;
      imageRef.current.onerror = null;
      imageRef.current = null;
    }
  };

  const load = useCallback(() => {
    if (!src) {
      return;
    }

    flush();

    const img = new Image();

    img.src = src;

    img.onload = (event) => {
      flush();
      setStatus('loaded');

      if (onLoad) {
        onLoad(event as any);
      }
    };

    img.onerror = (error) => {
      flush();
      setStatus('failed');

      if (onError) {
        onError(error as any);
      }
    };

    imageRef.current = img;
  }, [src, onLoad, onError]);

  useEnhancedEffect(() => {
    if (status === 'loading') {
      load();
    }

    return () => {
      flush();
    };
  }, [status, load]);

  return status;
}
