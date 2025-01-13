import React from 'react';
import styled from '@emotion/styled';
import type { CircularProgressProps } from '../CircularProgress';
import { Modal } from '../Modal';
import { Box } from '../Box';
import { Fade } from '../Fade';
import { CircularProgress } from '../CircularProgress';

/**
 * Types.
 */
interface DialogOwnProps {
  /**
   * If `true`, the Dialog is open.
   */
  'open': boolean;
  /**
   * Dialog children, usually the included sub-components.
   */
  'children': React.ReactNode;
  /**
   * The className of Dialog container.
   */
  'className'?: string;
  /**
   * The duration for the transition, in milliseconds.
   */
  'transitionDuration'?: number;
  /**
   * If `true`, the dialog will be full-screen.
   */
  'fullScreen'?: boolean;
  /**
   * If `true`, clicking the backdrop will not fire the `onClose` callback.
   */
  'disableBackdropClick'?: boolean;
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   */
  'disableEscapeKeyDown'?: boolean;
  /**
   * Callback fired when the component requests to be closed.
   */
  'onClose'?: () => void;
  /**
   * The size of the dialog.
   */
  'size'?: (
    'small' |
    'medium' |
    'large'
  );
  /**
   * If `true`, the dialog will be show CircularProgress component and disable all interactions.
   */
  'loading'?: boolean;
  /**
   * The color of the CircularProgress component.
   */
  'loadingColor'?: CircularProgressProps['color'];
  'data-testid'?: string;
};

type DialogProps = DialogOwnProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;
/**
 *
 */

const reactPropsRegex = /^(loading|fullScreen)$/;

/**
 * Styles.
 */
const DialogRoot = styled(Box, {
  shouldForwardProp: (prop) => !reactPropsRegex.test(prop),
})<DialogOwnProps>(
  (props) => ({
    width: '100%',
    display: 'flex',
    maxHeight: 'calc(100% - 60px)',
    flexDirection: 'column',
    margin: 'var(--pv-size-base-6)',
    position: 'relative',
    outline: 'none',
    overflow: 'hidden',
    border: 0,
    padding: 0,
    boxShadow: 'var(--pv-shadow-dark-hight)',
    ...(props.loading && {
      '[data-key="dialog.content"]': {
        opacity: 0.5,
      },
      '[data-key="dialog.actions"]': {
        opacity: 0.5,
      },
    }),
    ...(props.size === 'small' && {
      maxWidth: '310px',
    }),
    ...(props.size === 'medium' && {
      maxWidth: '640px',
    }),
    ...(props.size === 'large' && {
      maxWidth: '1024px',
    }),
    ...(props.fullScreen && {
      height: '100%',
      margin: 0,
      maxWidth: '100%',
      maxHeight: 'none',
    }),
  }),
  (props) => {
    const isDark = props.theme.mode === 'dark';
    let color = 'var(--pv-color-black)';
    let backgroundColor = 'var(--pv-color-white)';

    if (isDark) {
      color = 'var(--pv-color-white)';
      backgroundColor = 'var(--pv-color-gray-2)';
    }

    return {
      color,
      backgroundColor,
    };
  },
);

const DialogModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const DialogLoading = styled(Box)({
  position: 'absolute',
  inset: '0px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
/**
 *
 */

export const Dialog = React.forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
  const {
    open,
    children,
    fullScreen,
    transitionDuration,
    disableBackdropClick,
    disableEscapeKeyDown,
    loading,
    loadingColor,
    onClose,
    'data-testid': dataTestId,
    ...other
  } = props;

  return (
    <DialogModal
      ref={ref}
      open={open}
      transitionDuration={transitionDuration}
      onClose={onClose}
      data-testid={dataTestId}
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
        <DialogRoot
          role="dialog"
          borderRadius={fullScreen ? 0 : 4}
          loading={loading}
          fullScreen={fullScreen}
          tabIndex={-1}
          // @ts-ignore
          component="fieldset"
          disabled={loading}
          {...other}
        >
          {children}
          {loading && (
            <DialogLoading>
              <CircularProgress color={loadingColor} />
            </DialogLoading>
          )}
        </DialogRoot>
      </Fade>
    </DialogModal>
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
