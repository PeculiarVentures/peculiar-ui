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
  /**
   * The size of the dialog.
   */
  size?: (
    'small' |
    'medium' |
    'large'
  );
  dataTestId?: string;
};

type DialogProps = BaseProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

const stylesBase = () => css({
  label: 'Dialog',
  width: '100%',
  display: 'flex',
  maxHeight: 'calc(100% - 60px)',
  flexDirection: 'column',
  margin: '30px',
  position: 'relative',
  outline: 'none',
  boxShadow: 'var(--pv-shadow-dark-hight)',
});

const stylesSizeSmall = () => css({
  label: 'small',
  maxWidth: '310px',
});

const stylesSizeMedium = () => css({
  label: 'medium',
  maxWidth: '640px',
});

const stylesSizeLarge = () => css({
  label: 'large',
  maxWidth: '1024px',
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
    open,
    children,
    className,
    fullScreen,
    transitionDuration,
    disableBackdropClick,
    disableEscapeKeyDown,
    dataTestId,
    onClose,
    size,
    ...other
  } = props;

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
            [stylesSizeSmall()]: size === 'small',
            [stylesSizeMedium()]: size === 'medium',
            [stylesSizeLarge()]: size === 'large',
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
  transitionDuration: 225,
  fullScreen: false,
  disableBackdropClick: false,
  disableEscapeKeyDown: false,
  size: 'medium',
};
