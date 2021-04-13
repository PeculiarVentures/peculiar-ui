import * as React from 'react';
import { Fade, BaseTransitionProps } from '../Fade';
import { Box } from '../Box';
import { css, cx } from '../styles';

type BaseProps = {
  /**
   * If `true`, the backdrop is open.
   */
  open: boolean;
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

type BackdropProps = BaseProps & BaseTransitionProps & React.HTMLAttributes<HTMLDivElement>;

const variants = {
  light: 0.1,
  medium: 0.5,
  heavy: 0.9,
};

const stylesBase = () => css({
  label: 'Backdrop',
  zIndex: -1,
  position: 'fixed',
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  WebkitTapHighlightColor: 'transparent',
});

const stylesInvisible = () => css({
  label: 'invisible',
  backgroundColor: 'transparent',
});

export const Backdrop = React.forwardRef<HTMLDivElement, BackdropProps>((props, ref) => {
  const {
    className,
    invisible,
    open,
    transitionDuration,
    variant,
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
      <Box
        {...other}
        ref={ref}
        background="black"
        className={cx({
          [stylesBase()]: true,
          [stylesInvisible()]: invisible,
          [className]: !!className,
        })}
        aria-hidden="true"
      />
    </Fade>
  );
});

Backdrop.displayName = 'Backdrop';

Backdrop.defaultProps = {
  open: true,
  variant: 'medium',
  invisible: false,
};
