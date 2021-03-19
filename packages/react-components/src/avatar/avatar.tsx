import * as React from 'react';
import { css, cx, ColorType } from '../styles';
import { Typography } from '../typography';

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
  size?: ('small' | 'medium' | 'large');
  alt?: string;
  src?: string;
  background?: ColorType;
  'data-testid'?: string;
};

type AvatarProps = BaseProps & React.HTMLAttributes<HTMLDivElement>;

const stylesBase = () => css({
  label: 'Avatar',
  userSelect: 'none',
  overflow: 'hidden',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const stylesSizeSmall = () => css({
  label: 'small',
  height: 30,
  width: 30,
});

const stylesSizeMedium = () => css({
  label: 'medium',
  height: 35,
  width: 35,
});

const stylesSizeLarge = () => css({
  label: 'large',
  height: 40,
  width: 40,
});

const stylesImg = () => css({
  label: 'img',
  color: 'transparent',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  textAlign: 'center',
  textIndent: 10000,
});

function useLoaded(src: string) {
  const [loaded, setLoaded] = React.useState('');

  React.useEffect(() => {
    if (!src) {
      return undefined;
    }

    setLoaded('');

    let active = true;
    const image = new Image();

    image.src = src;
    image.onload = () => {
      if (!active) {
        return;
      }

      setLoaded('loaded');
    };
    image.onerror = () => {
      if (!active) {
        return;
      }

      setLoaded('error');
    };

    return () => {
      active = false;
    };
  }, [src]);

  return loaded;
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, ref?: any) => {
  const {
    className,
    children: childrenProp,
    size,
    alt,
    src,
    background,
    ...other
  } = props;
  const loaded = useLoaded(src);
  const hasImg = src;
  const hasImgNotFailing = hasImg && loaded !== 'error';
  let children = null;

  if (hasImgNotFailing) {
    children = (
      <img
        src={src}
        alt={alt}
        className={stylesImg()}
      />
    );
  } else if (childrenProp != null) {
    children = (
      <Typography
        color="white"
      >
        {childrenProp}
      </Typography>
    );
  }

  return (
    <div
      ref={ref}
      className={cx(
        {
          [stylesBase()]: true,
          [stylesSizeSmall()]: size === 'small',
          [stylesSizeMedium()]: size === 'medium',
          [stylesSizeLarge()]: size === 'large',
        },
        (background && css({
          label: `background-${background}`,
          background: `var(--pv-color-${background})`,
        })),
        className,
      )}
      {...other}
    >
      {children}
    </div>
  );
});

Avatar.displayName = 'Avatar';

Avatar.defaultProps = {
  size: 'medium',
  background: 'gray-7',
};
