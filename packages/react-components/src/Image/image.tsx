import * as React from 'react';
import { useImage } from '../hooks';

/**
 * Types.
 */
interface ImageOwnProps {
  /**
   * The `src` attribute for the `img` element.
   */
  src: string;
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
};

type ImageProps = ImageOwnProps & Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'loading'>;
/**
 *
 */

export const Image = React.forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const {
    className,
    src,
    fallback,
    loading,
    alt,
    ...other
  } = props;
  const { status, image } = useImage(src);
  const hasError = status === 'failed';
  const showImage = image?.src;

  if (showImage) {
    return (
      <img
        {...other}
        ref={ref}
        alt={alt}
        src={image.src}
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
