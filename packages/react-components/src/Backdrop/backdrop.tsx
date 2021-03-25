import * as React from 'react';
import { Fade, BaseTransitionProps } from '../Fade';
import { css, cx } from '../styles';

type BaseProps = {
  open: boolean;
  className?: string;
  invisible?: boolean;
  transitionDuration?: number;
};

type BackdropProps = BaseProps & BaseTransitionProps & React.HTMLAttributes<HTMLDivElement>;

const stylesBase = () => css({
  label: 'Backdrop',
  zIndex: -1,
  position: 'fixed',
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  WebkitTapHighlightColor: 'transparent',
});

const stylesInvisible = () => css({
  labe: 'invisible',
  backgroundColor: 'transparent',
});

export const Backdrop = React.forwardRef<HTMLDivElement, BackdropProps>((props, ref) => {
  const {
    className,
    invisible,
    open,
    transitionDuration,
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
    >
      <div
        ref={ref}
        className={cx({
          [stylesBase()]: true,
          [stylesInvisible()]: invisible,
          [className]: !!className,
        })}
        aria-hidden="true"
        {...other}
      />
    </Fade>
  );
});

Backdrop.displayName = 'Backdrop';

Backdrop.defaultProps = {
  open: true,
};
