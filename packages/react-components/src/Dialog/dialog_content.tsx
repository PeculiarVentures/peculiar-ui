import React from 'react';
import styled from '@emotion/styled';
import { Box } from '../Box';
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
   * Display the top and bottom dividers.
   */
  dividers?: boolean;
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
const DialogContentRoot = styled(Box)({
  flex: '1 1 auto',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
});

const DialogContentAlertContainer = styled('div')({
  padding: '0 var(--pv-size-base-4)',
  flex: '0 0 auto',
});

const DialogContentCollapse = styled(Collapse)({
  margin: '0 calc(var(--pv-size-base-3) * -1)',
});

const DialogContentContent = styled('div')({
  overflowY: 'auto',
  flex: '1 1 auto',
  padding: 'var(--pv-size-base-3) var(--pv-size-base-4) var(--pv-size-base-6) var(--pv-size-base-4)',
});

const DialogContentAlertError = styled(Alert)({
  margin: 'var(--pv-size-base-2) 0',
  padding: 'var(--pv-size-base-2) var(--pv-size-base-3)',
});
/**
 *
 */

export const DialogContent = React.forwardRef<HTMLDivElement, TDialogContentProps>((props, ref) => {
  const {
    children,
    dividers,
    error,
    scrolledElementProps = {},
    ...other
  } = props;

  return (
    <DialogContentRoot
      ref={ref}
      borderColor="gray-5"
      borderWidth={dividers ? 1 : 0}
      borderStyle="solid"
      borderPosition="horizontal"
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

DialogContent.defaultProps = {
  dividers: true,
};
