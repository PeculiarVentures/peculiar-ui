import {
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import { useEnhancedEffect } from '../utils';

export type UseImageOptionsType = {
  /**
   * A callback for when the image `src` has been loaded.
   */
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  /**
   * A callback for when there was an error loading the image `src`.
   */
  onError?: (error: string | React.SyntheticEvent<HTMLImageElement, Event>) => void;
};

type Status = ('loading' | 'failed' | 'pending' | 'loaded');

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
 *   const [status, image] = useImage("image.png")
 *   return status === "loaded" ? <img src={image.src} /> : <Placeholder />
 * }
 * ```
 */

type UseImageReturnType = {
  status: Status;
  image?: HTMLImageElement;
};

export function useImage(src: string, options: UseImageOptionsType = {}): UseImageReturnType {
  const {
    onLoad,
    onError,
  } = options;

  const [status, setStatus] = useState<Status>('pending');
  const imageRef = useRef<UseImageReturnType['image']>();

  const flush = () => {
    if (imageRef.current) {
      imageRef.current.onload = null;
      imageRef.current.onerror = null;
      imageRef.current = undefined;
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

  useEffect(() => {
    setStatus(src ? 'loading' : 'pending');
  }, [src]);

  useEnhancedEffect(() => {
    if (status === 'loading') {
      load();
    }

    return () => {
      flush();
    };
  }, [status, load]);

  return { status, image: imageRef.current };
}
