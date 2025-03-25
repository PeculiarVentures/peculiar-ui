import * as React from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { IOverridableComponent, TOverrideProps } from '../OverridableComponent';
import { TColorType } from '../styles';
import { Box } from '../Box';

/**
 * Types.
 */
export interface ISkeletonOwnProps {
  /**
   * Optional children to infer width and height from.
   */
  children?: React.ReactNode;
  /**
   * Height of the skeleton.
   */
  height?: number | string;
  /**
   * Width of the skeleton.
   */
  width?: number | string;
  /**
   * The type of content that will be rendered.
   */
  variant?: ('text' | 'rect' | 'circle');
  background?: TColorType;
}

export interface ISkeletonTypeMap<P = object, D extends React.ElementType = 'span'> {
  props: P & ISkeletonOwnProps;
  defaultComponent: D;
}

export type TSkeletonProps<
  D extends React.ElementType = ISkeletonTypeMap['defaultComponent'],
> = TOverrideProps<ISkeletonTypeMap<object, D>, D> & {
  component?: D;
};
/**
 *
 */

const reactPropsRegex = /^(as|height|width|variant)$/;

/**
 * Styles.
 */
const pulseKeyframe = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const SkeletonRoot = styled(
  Box,
  {
    shouldForwardProp: (prop) => !reactPropsRegex.test(prop),
  },
)<TSkeletonProps>((props) => ({
  display: 'block',
  height: '1.2em',
  animation: `${pulseKeyframe} 1.5s ease-in-out 0.5s infinite`,
  ...(props.variant === 'text' && {
    marginTop: 0,
    marginBottom: 0,
    height: 'auto',
    transformOrigin: '0 55%',
    transform: 'scale(1, 0.60)',
    borderRadius: '4px',
    '&:empty:before': {
      content: '"\\00a0"',
    },
  }),
  ...(props.variant === 'circle' && {
    borderRadius: '50%',
  }),
  ...(props.children && {
    '& > *': {
      visibility: 'hidden',
    },

    ...(!props.width && {
      maxWidth: 'fit-content',
    }),
    ...(!props.height && {
      height: 'auto',
    }),
  }),
  ...(props.height && {
    height: props.height,
  }),
  ...(props.width && {
    width: props.width,
  }),
}));
/**
 *
 */

export const Skeleton = React.forwardRef<any, TSkeletonProps>((props, ref) => {
  const {
    children,
    ...other
  } = props;

  return (
    <SkeletonRoot
      ref={ref as React.Ref<any>}
      {...other}
    >
      {children}
    </SkeletonRoot>
  );
}) as IOverridableComponent<ISkeletonTypeMap>;

Skeleton.displayName = 'Skeleton';

Skeleton.defaultProps = {
  variant: 'text',
  background: 'gray-4',
};
