import React from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Box } from '../Box';

/**
 * Types.
 */
type LinearProgressOwnProps = {
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

type LinearProgressProps = LinearProgressOwnProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;
/**
 *
 */

/**
 * Styles.
 */
const stylesKeyframeProgress = keyframes`
  0% {
    left: -30%;
  }
  100% {
    left: 100%;
  }
`;

const LinearProgressRoot = styled(Box)({
  height: '4px',
  overflow: 'hidden',
  position: 'relative',
});

const LinearProgressProgress = styled(Box)({
  top: 0,
  left: 0,
  bottom: 0,
  width: '30%',
  position: 'absolute',
  transformOrigin: 'left',
  animation: `${stylesKeyframeProgress} 2s cubic-bezier(0.53, 0.21, 0.29, 0.67) 0s infinite`,
});
/**
 *
 */

export const LinearProgress = React.forwardRef<HTMLDivElement, LinearProgressProps>(
  (props, ref) => {
    const {
      color,
      variant,
      ...other
    } = props;

    return (
      <LinearProgressRoot
        ref={ref}
        background={color === 'primary' ? 'primary-tint-4' : 'secondary-tint-4'}
        role="progressbar"
        {...other}
      >
        <LinearProgressProgress
          background={color}
        />
      </LinearProgressRoot>
    );
  },
);

LinearProgress.displayName = 'LinearProgress';

LinearProgress.defaultProps = {
  color: 'primary',
  variant: 'indeterminate',
};
