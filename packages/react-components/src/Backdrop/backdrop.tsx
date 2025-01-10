import * as React from 'react';
import styled from '@emotion/styled';
import { Fade, BaseTransitionProps } from '../Fade';
import { Box } from '../Box';

/**
 * Types.
 */
interface BackdropOwnProps {
  /**
   * If `true`, the backdrop is open.
   */
  open: boolean;
  /**
   * The className of the component.
   */
  className?: string;
  /**
   * If `true`, the backdrop is invisible.
   */
  invisible?: boolean;
  /**
   * The duration for the transition, in milliseconds.
   */
  transitionDuration?: number;
  variant?: ('light' | 'medium' | 'heavy');
};

export type BackdropProps = BackdropOwnProps
& BaseTransitionProps
& React.HTMLAttributes<HTMLDivElement>;
/**
 *
 */

const reactPropsRegex = /^(as|open|invisible|transitionDuration|variant)$/;

/**
 * Styles.
 */
const BackdropRoot = styled(Box, {
  shouldForwardProp: (prop) => !reactPropsRegex.test(prop),
})<Required<Pick<BackdropOwnProps, 'invisible'>>>((props) => ({
  zIndex: -1,
  position: 'fixed',
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  WebkitTapHighlightColor: 'transparent',
  ...(props.invisible && {
    backgroundColor: 'transparent',
  }),
}));
/**
 *
 */

const variants = {
  light: 0.1,
  medium: 0.5,
  heavy: 0.9,
};

export const Backdrop = React.forwardRef<HTMLDivElement, BackdropProps>((props, ref) => {
  const {
    open,
    transitionDuration,
    variant,
    invisible,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    ...other
  } = props;

  return (
    <Fade
      in={open}
      timeout={transitionDuration}
      onEnter={onEnter}
      onEntered={onEntered}
      onEntering={onEntering}
      onExit={onExit}
      onExited={onExited}
      onExiting={onExiting}
      finalOpacity={variants[variant]}
    >
      <BackdropRoot
        ref={ref}
        background="black"
        aria-hidden="true"
        invisible={invisible}
        {...other}
      />
    </Fade>
  );
});

Backdrop.displayName = 'Backdrop';

Backdrop.defaultProps = {
  variant: 'medium',
  invisible: false,
  transitionDuration: 225,
};
