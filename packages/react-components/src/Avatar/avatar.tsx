import * as React from 'react';
import { css, cx, ColorType } from '../styles';
import { Typography } from '../Typography';

type BaseProps = {
  /**
   * Used to render icon or text elements inside the Avatar
   * if `src` is not set. This can be an element, or just a string.
   */
  children?: React.ReactNode;
  className?: string;
  size?: ('small' | 'medium' | 'large');
  /**
   * Used in combination with `src` to provide an alt attribute for the rendered `img` element.
   */
  alt?: string;
  /**
   * The `src` attribute for the `img` element.
   */
  src?: string;
  background?: ColorType;
  dataTestId?: string;
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

const stylesBackground = (color: ColorType) => css({
  label: color,
  background: `var(--pv-color-${color})`,
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

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const {
    className,
    children: childrenProp,
    size,
    alt,
    src,
    background,
    dataTestId,
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
  } else if (childrenProp) {
    children = (
      <Typography
        color="white"
      >
        {childrenProp}
      </Typography>
    );
  } else {
    children = (
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 13"
        width={10}
      >
        <path
          d="M2.998 3.174c0 1.594 1 2.674 2 2.674s2-1.08 2-2.674c0-1.595-1-2.674-2-2.674s-2 1.08-2 2.674zM5 8.858c-1.249 0-2.383-.448-3.308-1.146C.95 8.064.5 8.878.5 9.812v2.12h9V9.81c0-.918-.46-1.746-1.193-2.098C7.383 8.41 6.25 8.858 5 8.858z"
          fill="#fff"
          stroke="#fff"
        />
      </svg>
    );
  }

  return (
    <div
      {...other}
      ref={ref}
      className={cx({
        [stylesBase()]: true,
        [stylesSizeSmall()]: size === 'small',
        [stylesSizeMedium()]: size === 'medium',
        [stylesSizeLarge()]: size === 'large',
        [stylesBackground(background)]: !!background,
        [className]: !!className,
      })}
      data-testid={dataTestId}
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
