import * as React from 'react';
import styled from '@emotion/styled';
import { ColorType } from '../styles';
import { Typography } from '../Typography';
import { Box } from '../Box';
import { useImage } from '../hooks';

/**
 * Types.
 */
type AvatarInitialsProps = Pick<AvatarOwnProps, 'children' | 'color'> & {
  'role': string;
  'aria-label': string;
};

interface AvatarOwnProps {
  /**
   * Used to render badge inside the avatar.
   */
  children?: React.ReactNode;
  /**
   * The name of the person in the avatar.
   *
   * - If `src` has loaded, the name will be used as the `alt` attribute of the `img`.
   * - If `src` is not loaded, the name will be used to create the initials.
   */
  name?: string;
  /**
   * The `src` attribute for the `img` element.
   */
  src?: string;
  /**
   * The className of the component.
   */
  className?: string;
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
  /**
   * Render the initials element.
   */
  renderInitials?: (props: AvatarInitialsProps) => React.ReactNode;
  /**
   * Function to get the initials to display.
   */
  getInitials?: (name: string) => string;
};

type AvatarProps = AvatarOwnProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;
/**
 *
 */

/**
 * Styles.
 */
const AvatarRoot = styled(Box)<AvatarOwnProps>((props) => ({
  userSelect: 'none',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  ...(props.size === 'small' && {
    height: 'var(--pv-size-base-6)',
    width: 'var(--pv-size-base-6)',
  }),
  ...(props.size === 'medium' && {
    height: 'var(--pv-size-base-7)',
    width: 'var(--pv-size-base-7)',
  }),
  ...(props.size === 'large' && {
    height: 'var(--pv-size-base-8)',
    width: 'var(--pv-size-base-8)',
  }),
}));

const AvatarImage = styled('img')({
  color: 'transparent',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  textAlign: 'center',
  textIndent: 10000,
  borderRadius: '50%',
});
/**
 *
 */

function initials(name: string) {
  const [firstName, lastName] = name.split(' ');

  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0);
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const {
    children: childrenProp,
    src,
    name,
    getInitials = initials,
    background,
    color,
    renderInitials: renderInitialsProp,
    ...other
  } = props;
  const { image } = useImage(src);
  const showImage = image?.src;
  const showInitials = name && getInitials;
  let children = null;

  const defaultRenderInitials = (propsInitials: AvatarInitialsProps) => (
    <Typography
      {...propsInitials}
    />
  );

  const renderInitials = renderInitialsProp || defaultRenderInitials;

  if (showImage) {
    children = (
      <AvatarImage
        src={src}
        alt={name}
        draggable="false"
      />
    );
  } else if (showInitials) {
    children = renderInitials({
      color,
      'children': getInitials(name),
      'role': 'img',
      'aria-label': name,
    });
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
    <AvatarRoot
      ref={ref}
      background={background}
      {...other}
    >
      {children}
      {childrenProp}
    </AvatarRoot>
  );
});

Avatar.displayName = 'Avatar';

Avatar.defaultProps = {
  size: 'medium',
  background: 'gray-7',
  color: 'white',
};
