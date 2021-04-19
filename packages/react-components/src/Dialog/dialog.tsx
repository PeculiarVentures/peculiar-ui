import React from 'react';
import { Modal } from '../Modal';
import { Box } from '../Box';
import { Fade } from '../Fade';
import { css, cx } from '../styles';

type BaseProps = {
  /**
   * If `true`, the Dialog is open.
   */
  open: boolean;
  /**
   * Dialog children, usually the included sub-components.
   */
  children: React.ReactNode;
  /**
   * The className of Dialog container.
   */
  className?: string;
  /**
   * The duration for the transition, in milliseconds.
   */
  transitionDuration?: number;
  /**
   * If `true`, the dialog will be full-screen.
   */
  fullScreen?: boolean;
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

type DialogProps = BaseProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

const stylesBase = () => css({
  label: 'Dialog',
  maxWidth: '640px',
  width: '100%',
  display: 'flex',
  maxHeight: 'calc(100% - 60px)',
  flexDirection: 'column',
  margin: '30px',
  position: 'relative',
  outline: 'none',
  boxShadow: 'var(--pv-shadow-dark-hight)',
});

const stylesFullScreen = () => css({
  label: 'fullScreen',
  height: '100%',
  margin: 0,
  maxWidth: '100%',
  maxHeight: 'none',
});

const stylesModal = () => css({
  label: 'Dialog-modal',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Dialog = React.forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
  const {
    children,
    className,
    open,
    fullScreen,
    transitionDuration,
    disableBackdropClick,
    disableEscapeKeyDown,
    dataTestId,
    onClose,
    ...other
  } = props;

  if (!open) {
    return null;
  }

  return (
    <Modal
      ref={ref}
      open={open}
      transitionDuration={transitionDuration}
      onClose={onClose}
      dataTestId={dataTestId}
      className={cx(stylesModal())}
      disableBackdropClick={disableBackdropClick}
      disableEscapeKeyDown={disableEscapeKeyDown}
    >
      <Fade
        in={open}
        timeout={transitionDuration}
      >
        <Box
          {...other}
          role="dialog"
          background="white"
          borderRadius={fullScreen ? 0 : 4}
          className={cx({
            [stylesBase()]: true,
            [stylesFullScreen()]: fullScreen,
            [className]: !!className,
          })}
          tabIndex={-1}
        >
          {children}
        </Box>
      </Fade>
    </Modal>
  );
});

Dialog.displayName = 'Dialog';

Dialog.defaultProps = {
  transitionDuration: 300,
  fullScreen: false,
  disableBackdropClick: false,
  disableEscapeKeyDown: false,
};
