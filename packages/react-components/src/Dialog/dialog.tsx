import React from 'react';
import type { CircularProgressProps } from '../CircularProgress';
import { Modal } from '../Modal';
import { Box } from '../Box';
import { Fade } from '../Fade';
import { CircularProgress } from '../CircularProgress';
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
  'data-testid'?: string;
  /**
   * If `true`, the dialog will be show CircularProgress component and disable all interactions.
   */
  loading?: boolean;
  /**
   * The color of the CircularProgress component.
   */
  loadingColor?: CircularProgressProps['color'];
};

type DialogProps = BaseProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

const stylesBase = (loading?: boolean) => css({
  label: 'Dialog',
  width: '100%',
  display: 'flex',
  maxHeight: 'calc(100% - 60px)',
  flexDirection: 'column',
  margin: 'var(--pv-size-base-6)',
  position: 'relative',
  outline: 'none',
  boxShadow: 'var(--pv-shadow-dark-hight)',
  overflow: 'hidden',
  border: 0,
  padding: 0,
  ...(loading && {
    '[data-key="dialog.content"]': {
      opacity: 0.5,
    },
    '[data-key="dialog.actions"]': {
      opacity: 0.5,
    },
  }),
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

const stylesLoading = () => css({
  label: 'Dialog-loading',
  position: 'absolute',
  inset: '0px',
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
    size,
    loading,
    loadingColor,
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
      className={cx(stylesModal())}
      disableBackdropClick={loading || disableBackdropClick}
      disableEscapeKeyDown={loading || disableEscapeKeyDown}
      backdropProps={{
        invisible: fullScreen,
      }}
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
            [stylesBase(loading)]: true,
            [stylesSizeSmall()]: size === 'small',
            [stylesSizeMedium()]: size === 'medium',
            [stylesSizeLarge()]: size === 'large',
            [stylesFullScreen()]: fullScreen,
            [className]: !!className,
          })}
          tabIndex={-1}
          component="fieldset"
          // @ts-ignore
          disabled={loading}
        >
          {children}
          {loading && (
            <Box className={cx(stylesLoading())}>
              <CircularProgress color={loadingColor} />
            </Box>
          )}
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
  loadingColor: 'secondary',
};
