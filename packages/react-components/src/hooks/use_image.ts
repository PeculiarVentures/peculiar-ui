import {
  useState,
  useRef,
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

  useEnhancedEffect(() => {
    if (!src) {
      return undefined;
    }

    setStatus('loading');

    imageRef.current = new Image();
    imageRef.current.src = src;

    imageRef.current.onload = (event) => {
      setStatus('loaded');

      if (onLoad) {
        onLoad(event as any);
      }
    };

    imageRef.current.onerror = (error) => {
      imageRef.current = undefined;

      setStatus('failed');

      if (onError) {
        onError(error as any);
      }
    };

    return () => {
      imageRef.current = undefined;
    };
  }, [src]);

  return { status, image: imageRef.current };
}
