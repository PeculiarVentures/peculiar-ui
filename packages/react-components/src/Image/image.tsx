import * as React from 'react';
import { useImage } from '../hooks';

type BaseProps = {
  /**
   * The `src` attribute for the `img` element.
   */
  src?: string;
  /**
   * Fallback element to show if image is loading or image fails.
   */
  fallback?: React.ReactElement;
  /**
   * The className of the component.
   */
  className?: string;
  'data-testid'?: string;
};

type ImageProps = BaseProps & React.ImgHTMLAttributes<HTMLImageElement>;

export const Image = React.forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const {
    className,
    src,
    fallback,
    alt,
    ...other
  } = props;
  const status = useImage({ src });
  const hasLoaded = status === 'loaded';
  const showImage = src && hasLoaded;

  if (showImage) {
    return (
      <img
        {...other}
        ref={ref}
        alt={alt}
        src={src}
      />
    );
  }

  if (fallback) {
    return fallback;
  }

  return null;
});

Image.displayName = 'Image';

Image.defaultProps = {};
