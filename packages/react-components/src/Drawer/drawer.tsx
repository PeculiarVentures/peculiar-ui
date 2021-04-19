import * as React from 'react';
import { Modal } from '../Modal';
import { Slide } from '../Slide';
import { Box } from '../Box';
import { css, cx } from '../styles';

type BaseProps = {
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
  dataTestId?: string;
};

type DrawerProps = BaseProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

const stylesBase = () => css({
  label: 'Drawer',
  width: '270px',
  height: '100%',
  position: 'fixed',
  top: 0,
  right: 0,
  overflowY: 'auto',
  outline: 'none',
});

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
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

  return (
    <Modal
      ref={ref}
      open={open}
      transitionDuration={transitionDuration}
      onClose={onClose}
      dataTestId={dataTestId}
      disableBackdropClick={disableBackdropClick}
      disableEscapeKeyDown={disableEscapeKeyDown}
    >
      <Slide
        in={open}
        timeout={transitionDuration}
      >
        <Box
          {...other}
          background="white"
          className={cx({
            [stylesBase()]: true,
            [className]: !!className,
          })}
          tabIndex={-1}
        >
          {children}
        </Box>
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
