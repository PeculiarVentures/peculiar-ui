import * as React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { FocusTrap } from '../FocusTrap';
import { Backdrop, TBackdropProps } from '../Backdrop';
import { Portal } from '../Portal';

/**
 * Types.
 */
interface IModalOwnProps {
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
  onClose?: (event: React.SyntheticEvent) => void;
  /**
   * Always keep the children in the DOM.
   */
  keepMounted?: boolean;
  /**
   * Props applied to the `Backdrop` element.
   */
  backdropProps?: Partial<TBackdropProps>;
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
};

export type TModalProps = IModalOwnProps & React.HTMLAttributes<HTMLDivElement>;
/**
 *
 */

/**
 * Styles.
 */
const ModalRoot = styled('div', { shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'open' })<Required<Pick<IModalOwnProps, 'open'> & { exited: boolean }>>((props) => ({
  position: 'fixed',
  zIndex: 1300,
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  ...(!props.open && props.exited && { visibility: 'hidden' }),
}));
/**
 *
 */

export const Modal = React.forwardRef<HTMLDivElement, TModalProps>((props, ref) => {
  const {
    children,
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

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (disableBackdropClick) {
      return;
    }

    if (onClose) {
      onClose(event);
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
      onClose(event);
    }
  };

  return (
    <Portal>
      <ModalRoot
        ref={ref}
        open={open}
        exited={exited}
        role="presentation"
        aria-hidden={!open}
        onKeyDown={handleKeyDown}
        {...other}
      >
        <Backdrop
          {...backdropProps}
          open={open}
          transitionDuration={transitionDuration}
          onClick={handleBackdropClick}
          onEnter={() => setExited(false)}
          onExited={() => setExited(true)}
        />
        <FocusTrap
          open={disableEnforceFocus ? false : open}
          disableAutoFocus={disableAutoFocus}
        >
          {children}
        </FocusTrap>
      </ModalRoot>
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
