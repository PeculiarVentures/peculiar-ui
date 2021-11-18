import React from 'react';
import { css, cx, keyframes } from '../styles';

type BaseProps = {
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color?: ('primary' | 'secondary');
  /**
   * The className of the component.
   */
  className?: string;
  /**
   * The size of the progress.
   */
  size?: ('small' | 'large');
};

export type CircularProgressProps = BaseProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

/**
 * Styles.
 */
const SIZE = 44;
const THICKNESS = 4;

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

const stylesBase = (color: ('primary' | 'secondary')) => css({
  label: 'CircularProgress',
  overflow: 'hidden',
  position: 'relative',
  display: 'inline-block',
  color: `var(--pv-color-${color})`,
  animation: `${circularRotateKeyframe} 1.4s linear infinite`,
});

const stylesBaseSmall = () => css({
  label: 'small',
  height: 'var(--pv-size-base-3)',
  width: 'var(--pv-size-base-3)',
});

const stylesBaseLarge = () => css({
  label: 'large',
  height: 'var(--pv-size-base-6)',
  width: 'var(--pv-size-base-6)',
});

const stylesProgressSvg = () => css({
  label: 'CircularProgress-svg',
  display: 'block',
});

const stylesProgressCircle = () => css({
  label: 'CircularProgress-circle',
  stroke: 'currentcolor',
  strokeDasharray: '80px, 200px',
  strokeDashoffset: 0,
  animation: `${circularDashKeyframe} 1.4s ease-in-out infinite`,
});
/**
 *
 */

export const CircularProgress = React.forwardRef<HTMLDivElement, CircularProgressProps>(
  (props, ref) => {
    const {
      color,
      className,
      size,
      ...other
    } = props;

    return (
      <div
        {...other}
        ref={ref}
        className={cx({
          [stylesBase(color)]: true,
          [stylesBaseSmall()]: size === 'small',
          [stylesBaseLarge()]: size === 'large',
          [className]: !!className,
        })}
        role="progressbar"
      >
        <svg
          viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`}
          className={stylesProgressSvg()}
        >
          <circle
            cx={SIZE}
            cy={SIZE}
            r={(SIZE - THICKNESS) / 2}
            fill="none"
            strokeWidth={THICKNESS}
            className={stylesProgressCircle()}
          />
        </svg>
      </div>
    );
  },
);

CircularProgress.displayName = 'CircularProgress';

CircularProgress.defaultProps = {
  color: 'primary',
  size: 'large',
};
