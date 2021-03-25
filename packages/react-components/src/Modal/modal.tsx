import * as React from 'react';
import { Backdrop } from '../Backdrop';
import { Portal } from '../Portal';
import { css, cx } from '../styles';

type BaseProps = {
  children: React.ReactNode;
  open: boolean;
  className?: string;
  onBackdropClick?: () => void;
  transitionDuration?: number;
};

type ModalProps = BaseProps & React.HTMLAttributes<HTMLDivElement>;

const stylesBase = () => css({
  label: 'Modal',
  position: 'fixed',
  zIndex: 1000,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
});

const stylesHidden = () => css({
  label: 'hidden',
  visibility: 'hidden',
});

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const {
    children,
    className,
    open,
    onBackdropClick,
    transitionDuration,
    ...other
  } = props;
  const [exited, setExited] = React.useState(true);

  return (
    <Portal>
      <div
        ref={ref}
        className={cx({
          [stylesBase()]: true,
          [stylesHidden()]: !open && exited,
          [className]: !!className,
        })}
        role="presentation"
        aria-hidden={!open}
        {...other}
      >
        <Backdrop
          open={open}
          onClick={onBackdropClick}
          onEnter={() => setExited(false)}
          onExited={() => setExited(true)}
          transitionDuration={transitionDuration}
        />
        {children}
      </div>
    </Portal>
  );
});

Modal.displayName = 'Modal';

Modal.defaultProps = {};
