import * as React from 'react';
import { FocusTrap } from '../FocusTrap';
import { Backdrop, BackdropProps } from '../Backdrop';
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
  /**
   * Always keep the children in the DOM.
   */
  keepMounted?: boolean;
  /**
   * Props applied to the `Backdrop` element.
   */
  backdropProps?: Partial<BackdropProps>;
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   */
  disableEnforceFocus?: boolean;
  /**
   * If `true`, the trap focus will not automatically shift focus
   * to first interactive element when it opens,
   * and replace it to the last focused element when it closes.
   */
  disableAutoFocus?: boolean;
  'data-testid'?: string;
};

export type ModalProps = BaseProps & React.HTMLAttributes<HTMLDivElement>;

const stylesBase = () => css({
  label: 'Modal',
  position: 'fixed',
  zIndex: 1300,
  inset: '0px',
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
    keepMounted,
    backdropProps,
    disableEnforceFocus,
    disableAutoFocus,
    onClose,
    ...other
  } = props;
  const [exited, setExited] = React.useState(true);

  if (!keepMounted && !open) {
    return null;
  }

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
        onKeyDown={handleKeyDown}
      >
        <Backdrop
          {...backdropProps}
          open={open}
          onClick={handleBackdropClick}
          onEnter={() => setExited(false)}
          onExited={() => setExited(true)}
          transitionDuration={transitionDuration}
        />
        <FocusTrap
          open={disableEnforceFocus ? false : open}
          disableAutoFocus={disableAutoFocus}
        >
          {children}
        </FocusTrap>
      </div>
    </Portal>
  );
});

Modal.displayName = 'Modal';

Modal.defaultProps = {
  transitionDuration: 225,
  disableBackdropClick: false,
  disableEscapeKeyDown: false,
  keepMounted: false,
  disableEnforceFocus: false,
};
