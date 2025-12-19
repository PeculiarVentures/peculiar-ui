import React from 'react';
import styled from '@emotion/styled';
import type { TCircularProgressProps } from '../CircularProgress';
import { Modal } from '../Modal';
import { Box } from '../Box';
import { Fade } from '../Fade';
import { CircularProgress } from '../CircularProgress';

/**
 * Types.
 */
interface IDialogOwnProps {
  /**
   * A single child content element.
   */
  children: React.ReactNode;
  /**
   * If `true`, the Dialog is open.
   */
  open: boolean;
  /**
   * The className of Dialog container.
   */
  className?: string;
  /**
   * The duration for the transition, in milliseconds.
   * @default 225
   */
  transitionDuration?: number;
  /**
   * If `true`, the dialog will be full-screen.
   * @default false
   */
  fullScreen?: boolean;
  /**
   * If `true`, clicking the backdrop will not fire the `onClose` callback.
   * @default false
   */
  disableBackdropClick?: boolean;
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown?: boolean;
  /**
   * Callback fired when the component requests to be closed.
   */
  onClose?: (event: React.SyntheticEvent) => void;
  /**
   * The size of the dialog.
   * @default 'small'
   */
  size?: (
    'small'
    | 'large'
  );
  /**
   * If `true`, the dialog will be show CircularProgress component and disable all interactions.
   */
  loading?: boolean;
  /**
   * The color of the CircularProgress component.
   * @default 'secondary'
   */
  loadingColor?: TCircularProgressProps['color'];
  'data-testid'?: string;
};

type TDialogProps = IDialogOwnProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;
/**
 *
 */

const reactPropsRegex = /^(loading|fullScreen)$/;

/**
 * Styles.
 */
const DialogRoot = styled(
  Box,
  {
    shouldForwardProp: (prop) => !reactPropsRegex.test(prop),
  },
)<IDialogOwnProps>(
  (props) => ({
    width: '100%',
    display: 'flex',
    maxHeight: 'calc(100% - 60px)',
    flexDirection: 'column',
    margin: `calc(var(--pv-size-base) * 6)`,
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
      maxWidth: '500px',
    }),
    ...(props.size === 'large' && {
      maxWidth: '870px',
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

export const Dialog = React.forwardRef<HTMLDivElement, TDialogProps>((props, ref) => {
  const {
    open,
    children,
    fullScreen = false,
    transitionDuration = 225,
    disableBackdropClick = false,
    disableEscapeKeyDown = false,
    loading,
    loadingColor = 'secondary',
    onClose,
    'data-testid': dataTestId,
    size = 'small',
    ...other
  } = props;

  return (
    <DialogModal
      ref={ref}
      open={open}
      transitionDuration={transitionDuration}
      data-testid={dataTestId}
      disableBackdropClick={loading || disableBackdropClick}
      disableEscapeKeyDown={loading || disableEscapeKeyDown}
      backdropProps={{
        invisible: fullScreen,
      }}
      onClose={onClose}
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
          size={size}
          tabIndex={-1}
          // @ts-expect-error: `component` is not a valid prop
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
