import React from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';

/**
 * Types.
 */
interface ICircularProgressOwnProps {
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color?: (
    'primary' |
    'secondary' |
    'white'
  );
  /**
   * The className of the component.
   */
  className?: string;
  /**
   * The size of the progress.
   */
  size?: ('small' | 'large');
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   */
  variant?: 'determinate' | 'indeterminate';
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   */
  value?: number;
};

export type TCircularProgressProps = ICircularProgressOwnProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;
/**
 *
 */

/**
 * Styles.
 */
const circularRotateKeyframe = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const circularDashKeyframe = keyframes`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`;

const CircularProgressRoot = styled('div', {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'color',
})<ICircularProgressOwnProps>((props) => ({
  label: 'CircularProgress',
  overflow: 'hidden',
  position: 'relative',
  display: 'inline-block',
  color: `var(--pv-color-${props.color})`,
  ...(props.variant === 'indeterminate'
    ? {
        animation: `${circularRotateKeyframe} 1.4s linear infinite`,
      }
    : {
        transform: 'rotate(-90deg)',
      }),
  ...(props.size === 'small' && {
    height: 'var(--pv-size-base-3)',
    width: 'var(--pv-size-base-3)',
  }),
  ...(props.size === 'large' && {
    height: 'var(--pv-size-base-6)',
    width: 'var(--pv-size-base-6)',
  }),
}));

const CircularProgressSvg = styled('svg')({
  display: 'block',
});

const CircularProgressCircle = styled('circle')<Required<Pick<ICircularProgressOwnProps, 'variant'>>>((props) => ({
  stroke: 'currentcolor',
  strokeDasharray: '80px, 200px',
  strokeDashoffset: 0,
  ...(props.variant === 'indeterminate' && {
    animation: `${circularDashKeyframe} 1.4s ease-in-out infinite`,
  }),
}));
/**
 *
 */

const SIZE = 44;
const THICKNESS = 4;

export const CircularProgress = React.forwardRef<HTMLDivElement, TCircularProgressProps>(
  (props, ref) => {
    const {
      size,
      variant = 'indeterminate',
      value = 0,
      ...other
    } = props;
    const circleStyle: React.CSSProperties = {};

    if (variant === 'determinate') {
      const circumference = 2 * Math.PI * ((SIZE - THICKNESS) / 2);

      circleStyle.strokeDasharray = circumference.toFixed(3);
      circleStyle.strokeDashoffset = `${(((100 - value) / 100) * circumference).toFixed(3)}px`;
    }

    return (
      <CircularProgressRoot
        ref={ref}
        role="progressbar"
        variant={variant}
        size={size}
        {...other}
      >
        <CircularProgressSvg
          viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`}
        >
          <CircularProgressCircle
            cx={SIZE}
            cy={SIZE}
            r={(SIZE - THICKNESS) / 2}
            fill="none"
            strokeWidth={THICKNESS}
            style={circleStyle}
            variant={variant}
          />
        </CircularProgressSvg>
      </CircularProgressRoot>
    );
  },
);

CircularProgress.displayName = 'CircularProgress';

CircularProgress.defaultProps = {
  color: 'primary',
  size: 'large',
  variant: 'indeterminate',
  value: 0,
};
