import * as React from 'react';
import { css, cx, ColorType } from '../styles';
import { Typography, TypographyProps } from '../Typography';
import { Box } from '../Box';
import { useImage } from '../hooks';

type BaseProps = {
  /**
   * The name of the person in the avatar.
   *
   * - If `src` has loaded, the name will be used as the `alt` attribute of the `img`.
   * - If `src` is not loaded, the name will be used to create the initials.
   */
  name?: string;
  /**
   * Function to get the initials to display.
   */
  getInitials?: (name: string) => string;
  /**
   * The `src` attribute for the `img` element.
   */
  src?: string;
  /**
   * The className of the component.
   */
  className?: string;
  /**
   * Props applied to the `Typography` element.
   */
  typographyProps?: Partial<TypographyProps>;
  /**
   * The size of the avatar.
   */
  size?: ('small' | 'medium' | 'large');
  /**
   * The color of component background.
   */
  background?: ColorType;
  /**
   * The color of initials text.
   */
  color?: ColorType;
  'data-testid'?: string;
};

type AvatarProps = BaseProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

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
  height: 'var(--pv-size-base-6)',
  width: 'var(--pv-size-base-6)',
});

const stylesSizeMedium = () => css({
  label: 'medium',
  height: 'var(--pv-size-base-7)',
  width: 'var(--pv-size-base-7)',
});

const stylesSizeLarge = () => css({
  label: 'large',
  height: 'var(--pv-size-base-8)',
  width: 'var(--pv-size-base-8)',
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

function initials(name: string) {
  const [firstName, lastName] = name.split(' ');

  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0);
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const {
    className,
    size,
    src,
    name,
    getInitials = initials,
    background,
    color,
    typographyProps,
    ...other
  } = props;
  const status = useImage({ src });
  const hasLoaded = status === 'loaded';
  const showImage = src && hasLoaded;
  const showInitials = name && getInitials;

  let children = null;

  if (showImage) {
    children = (
      <img
        src={src}
        alt={name}
        className={stylesImg()}
      />
    );
  } else if (showInitials) {
    children = (
      <Typography
        {...typographyProps}
        color={color}
        aria-label={name}
        role="img"
      >
        {getInitials(name)}
      </Typography>
    );
  } else {
    children = (
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 13"
        width={10}
        role="img"
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
    <Box
      {...other}
      ref={ref}
      className={cx({
        [stylesBase()]: true,
        [stylesSizeSmall()]: size === 'small',
        [stylesSizeMedium()]: size === 'medium',
        [stylesSizeLarge()]: size === 'large',
        [className]: !!className,
      })}
      background={background}
    >
      {children}
    </Box>
  );
});

Avatar.displayName = 'Avatar';

Avatar.defaultProps = {
  size: 'medium',
  background: 'gray-7',
  color: 'white',
};
