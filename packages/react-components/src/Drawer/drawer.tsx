import * as React from 'react';
import styled from '@emotion/styled';
import { Modal } from '../Modal';
import { Slide } from '../Slide';
import { Box } from '../Box';

/**
 * Types.
 */
type DrawerOwnProps = {
  /**
   * If `true`, the component is shown.
   */
  open: boolean;
  /**
   * The content of the component.
   */
  children: React.ReactNode;
  /**
   * The className of Drawer container.
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
  'data-testid'?: string;
};

type DrawerProps = DrawerOwnProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;
/**
 *
 */

/**
 * Styles.
 */
const DrawerPaper = styled(Box)({
  width: '270px',
  height: '100%',
  position: 'fixed',
  top: 0,
  right: 0,
  overflowY: 'auto',
  outline: 'none',
  boxSizing: 'border-box',
});
/**
 *
 */

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  const {
    children,
    open,
    transitionDuration,
    disableBackdropClick,
    disableEscapeKeyDown,
    onClose,
    'data-testid': dataTestId,
    ...other
  } = props;

  return (
    <Modal
      ref={ref}
      open={open}
      transitionDuration={transitionDuration}
      onClose={onClose}
      data-testid={dataTestId}
      disableBackdropClick={disableBackdropClick}
      disableEscapeKeyDown={disableEscapeKeyDown}
      keepMounted
    >
      <Slide
        in={open}
        timeout={transitionDuration}
      >
        <DrawerPaper
          background="white"
          tabIndex={-1}
          {...other}
        >
          {children}
        </DrawerPaper>
      </Slide>
    </Modal>
  );
});

Drawer.displayName = 'Drawer';

Drawer.defaultProps = {
  transitionDuration: 225,
  disableBackdropClick: false,
  disableEscapeKeyDown: false,
};
