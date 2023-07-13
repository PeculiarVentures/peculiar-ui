import * as React from 'react';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';
import {
  css,
  cx,
  keyframes,
  ColorType,
} from '../styles';
import { Box } from '../Box';

/**
 * Types.
 */
export interface SkeletonOwnProps {
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
  background?: ColorType;
}

export interface SkeletonTypeMap<P = {}, D extends React.ElementType = 'span'> {
  props: P & SkeletonOwnProps;
  defaultComponent: D;
}

export type SkeletonProps<
  D extends React.ElementType = SkeletonTypeMap['defaultComponent'],
> = OverrideProps<SkeletonTypeMap<{}, D>, D> & {
  component?: D;
};
/**
 *
 */

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

const stylesBase = (props: SkeletonProps) => css({
  label: 'Skeleton',
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
});
/**
 *
 */

export const Skeleton = React.forwardRef<any, SkeletonProps>((props, ref) => {
  const {
    children,
    height,
    width,
    variant,
    className,
    ...other
  } = props;

  return (
    <Box
      ref={ref as React.Ref<any>}
      className={cx({
        [stylesBase(props)]: true,
        [className]: !!className,
      })}
      {...other}
    >
      {children}
    </Box>
  );
}) as OverridableComponent<SkeletonTypeMap>;

Skeleton.displayName = 'Skeleton';

Skeleton.defaultProps = {
  variant: 'text',
  background: 'gray-4',
};
