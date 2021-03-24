import * as React from 'react';
import { Fade } from '../Fade';
import { css, cx } from '../styles';

type BaseProps = {
  className?: string;
  invisible?: boolean;
  open: boolean;
  transitionDuration?: number;
};

type BackdropProps = BaseProps & React.HTMLAttributes<HTMLDivElement>;

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
    ...other
  } = props;

  return (
    <Fade
      in={open}
      timeout={transitionDuration}
    >
      <div
        ref={ref}
        className={cx({
          [stylesBase()]: true,
          [stylesInvisible()]: invisible,
          [className]: !!className,
        })}
        {...other}
      />
    </Fade>
  );
});

Backdrop.displayName = 'Backdrop';

Backdrop.defaultProps = {
  open: true,
};
