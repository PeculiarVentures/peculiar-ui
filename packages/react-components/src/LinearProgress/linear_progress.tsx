import React from 'react';
import { Box } from '../Box';
import { css, cx, keyframes } from '../styles';

type BaseProps = {
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color?: ('primary' | 'secondary');
  /**
   * The variant to use.
   */
  variant?: ('indeterminate');
  /**
   * The className of the component.
   */
  className?: string;
};

type LinearProgressProps = BaseProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

const stylesKeyframeProgress = keyframes`
  0% {
    left: -30%;
  }
  100% {
    left: 100%;
  }
`;

const stylesBase = () => css({
  label: 'LinearProgress',
  height: '4px',
  overflow: 'hidden',
  position: 'relative',
});

const stylesProgress = () => css({
  label: 'progress',
  top: 0,
  left: 0,
  bottom: 0,
  width: '30%',
  position: 'absolute',
  transformOrigin: 'left',
  animation: `${stylesKeyframeProgress} 2s cubic-bezier(0.53, 0.21, 0.29, 0.67) 0s infinite`,
});

export const LinearProgress = React.forwardRef<HTMLDivElement, LinearProgressProps>(
  (props, ref) => {
    const {
      color,
      className,
      ...other
    } = props;

    return (
      <Box
        {...other}
        ref={ref}
        className={cx({
          [stylesBase()]: true,
          [className]: !!className,
        })}
        background={color === 'primary' ? 'primary-tint-4' : 'secondary-tint-4'}
      >
        <Box
          background={color}
          className={cx(stylesProgress())}
        />
      </Box>
    );
  },
);

LinearProgress.displayName = 'LinearProgress';

LinearProgress.defaultProps = {
  color: 'primary',
  variant: 'indeterminate',
};
