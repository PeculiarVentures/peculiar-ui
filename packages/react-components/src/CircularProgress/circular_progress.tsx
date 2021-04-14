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

type CircularProgressProps = BaseProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

const stylesKeyframeProgress = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const stylesBase = (color: ('primary' | 'secondary')) => css({
  label: 'CircularProgress',
  overflow: 'hidden',
  position: 'relative',
  display: 'inline-block',
  color: `var(--pv-color-${color})`,
});

const stylesBaseSmall = () => css({
  label: 'small',
  height: '16px',
  width: '16px',
});

const stylesBaseLarge = () => css({
  label: 'large',
  height: '30px',
  width: '30px',
});

const stylesProgress = () => css({
  label: 'CircularProgress-progress',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  position: 'absolute',
  borderRadius: '50%',
  borderColor: 'currentColor transparent transparent',
  borderStyle: 'solid',
  animation: `${stylesKeyframeProgress} 1.3s cubic-bezier(0.53, 0.21, 0.29, 0.67) 0s infinite`,
});

const stylesProgressSmall = () => css({
  label: 'small',
  borderWidth: '2px',
});

const stylesProgressLarge = () => css({
  label: 'large',
  borderWidth: '4px',
});

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
      >
        <div
          className={cx({
            [stylesProgress()]: true,
            [stylesProgressSmall()]: size === 'small',
            [stylesProgressLarge()]: size === 'large',
          })}
        />
      </div>
    );
  },
);

CircularProgress.displayName = 'CircularProgress';

CircularProgress.defaultProps = {
  color: 'primary',
  size: 'large',
};
