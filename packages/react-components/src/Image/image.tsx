import * as React from 'react';
import { useImage } from '../hooks';

type BaseProps = {
  /**
   * The `src` attribute for the `img` element.
   */
  src?: string;
  /**
   * Fallback element to show if image is loading.
   */
  loading?: React.ReactElement;
  /**
   * Fallback element to show if image fails.
   */
  fallback?: React.ReactElement;
  /**
   * The className of the component.
   */
  className?: string;
  'data-testid'?: string;
};

type ImageProps = BaseProps & Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'loading'>;

export const Image = React.forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const {
    className,
    src,
    fallback,
    loading,
    alt,
    ...other
  } = props;
  const status = useImage({ src });
  const hasLoaded = status === 'loaded';
  const hasError = status === 'failed';
  const showImage = src && hasLoaded;

  if (showImage) {
    return (
      <img
        {...other}
        ref={ref}
        alt={alt}
        src={src}
        className={className}
      />
    );
  }

  if (fallback && hasError) {
    return fallback;
  }

  if (loading) {
    return loading;
  }

  return null;
});

Image.displayName = 'Image';

Image.defaultProps = {};
