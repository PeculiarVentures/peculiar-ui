import React from 'react';
import styled from '@emotion/styled';

/**
 * Types.
 */
interface IDialogActionsOwnProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * The className of the component.
   */
  className?: string;
};

type TDialogActionsProps = IDialogActionsOwnProps & React.HTMLAttributes<HTMLDivElement>;
/**
 *
 */

/**
 * Styles.
 */
const DialogActionsRoot = styled('footer')({
  padding: '0 calc(var(--pv-size-base) * 6)',
  flex: '0 0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: 'calc(var(--pv-size-base) * 2)',
  height: 'calc(var(--pv-size-base) * 19)',
});
/**
 *
 */

export const DialogActions = React.forwardRef<HTMLDivElement, TDialogActionsProps>((props, ref) => {
  const {
    children,
    ...other
  } = props;

  return (
    <DialogActionsRoot
      ref={ref}
      data-key="dialog.actions"
      {...other}
    >
      {children}
    </DialogActionsRoot>
  );
});

DialogActions.displayName = 'DialogActions';
