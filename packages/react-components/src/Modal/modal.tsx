import * as React from 'react';
import { FocusTrap } from '../FocusTrap';
import { Backdrop } from '../Backdrop';
import { Portal } from '../Portal';
import { css, cx } from '../styles';

type BaseProps = {
  /**
   * A single child content element.
   */
  children: React.ReactElement;
  /**
   * If `true`, the modal is open.
   */
  open: boolean;
  /**
   * The className of the component.
   */
  className?: string;
  /**
   * The duration for the transition, in milliseconds.
   */
  transitionDuration?: number;
  /**
   * If `true`, clicking the backdrop will not fire the `onClose` callback.
   */
  disableBackdropClick?: boolean;
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   */
  disableEscapeKeyDown?: boolean;
  /**
   * Callback fired when the component requests to be closed.
   */
  onClose?: () => void;
  dataTestId?: string;
};

type ModalProps = BaseProps & React.HTMLAttributes<HTMLDivElement>;

const stylesBase = () => css({
  label: 'Modal',
  position: 'fixed',
  zIndex: 1300,
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
    transitionDuration,
    disableBackdropClick,
    disableEscapeKeyDown,
    onClose,
    dataTestId,
    ...other
  } = props;
  const [exited, setExited] = React.useState(true);

  const handleBackdropClick = () => {
    if (disableBackdropClick) {
      return;
    }

    if (onClose) {
      onClose();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (disableEscapeKeyDown) {
      return;
    }

    if (event.key !== 'Escape') {
      return;
    }

    event.stopPropagation();

    if (onClose) {
      onClose();
    }
  };

  return (
    <Portal>
      <div
        {...other}
        ref={ref}
        className={cx({
          [stylesBase()]: true,
          [stylesHidden()]: !open && exited,
          [className]: !!className,
        })}
        role="presentation"
        aria-hidden={!open}
        data-testid={dataTestId}
        onKeyDown={handleKeyDown}
      >
        <Backdrop
          open={open}
          onClick={handleBackdropClick}
          onEnter={() => setExited(false)}
          onExited={() => setExited(true)}
          transitionDuration={transitionDuration}
        />
        <FocusTrap
          open={open}
        >
          {children}
        </FocusTrap>
      </div>
    </Portal>
  );
});

Modal.displayName = 'Modal';

Modal.defaultProps = {
  transitionDuration: 300,
  disableBackdropClick: false,
  disableEscapeKeyDown: false,
};
