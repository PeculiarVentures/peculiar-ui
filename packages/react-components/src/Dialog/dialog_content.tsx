import React from 'react';
import styled from '@emotion/styled';
import { Collapse } from '../Collapse';
import { Alert } from '../Alert';

/**
 * Types.
 */
interface IDialogContentOwnProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * The className of the component.
   */
  className?: string;
  /**
   * The content of the error message.
   */
  error?: string;
  /**
   * Props applied to the scrolled element.
   */
  scrolledElementProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
};

type TDialogContentProps = IDialogContentOwnProps & React.HTMLAttributes<HTMLDivElement>;
/**
 *
 */

/**
 * Styles.
 */
const DialogContentRoot = styled('div')({
  flex: '1 1 auto',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
});

const DialogContentAlertContainer = styled('div')({
  padding: '0 calc(var(--pv-size-base) * 4)',
  flex: '0 0 auto',
});

const DialogContentCollapse = styled(Collapse)({
  margin: '0 calc(var(--pv-size-base) * -2)',
});

const DialogContentContent = styled('div')({
  overflowY: 'auto',
  flex: '1 1 auto',
  padding: 'calc(var(--pv-size-base) * 6)',
});

const DialogContentAlertError = styled(Alert)({
  margin: 'calc(var(--pv-size-base) * 2) 0',
});
/**
 *
 */

export const DialogContent = React.forwardRef<HTMLDivElement, TDialogContentProps>((props, ref) => {
  const {
    children,
    error,
    scrolledElementProps = {},
    ...other
  } = props;

  return (
    <DialogContentRoot
      ref={ref}
      data-key="dialog.content"
      {...other}
    >
      <DialogContentAlertContainer>
        <DialogContentCollapse
          in={Boolean(error)}
        >
          <DialogContentAlertError
            variant="wrong"
            disableIcon
          >
            {error}
          </DialogContentAlertError>
        </DialogContentCollapse>
      </DialogContentAlertContainer>
      <DialogContentContent
        {...scrolledElementProps}
      >
        {children}
      </DialogContentContent>
    </DialogContentRoot>
  );
});

DialogContent.displayName = 'DialogContent';
