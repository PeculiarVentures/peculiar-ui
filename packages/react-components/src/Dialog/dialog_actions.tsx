import React from 'react';
import styled from '@emotion/styled';

/**
 * Types.
 */
type DialogActionsOwnProps = {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * The className of the component.
   */
  className?: string;
};

type DialogActionsProps = DialogActionsOwnProps & React.HTMLAttributes<HTMLDivElement>;
/**
 *
 */

/**
 * Styles.
 */
const DialogActionsRoot = styled('footer')({
  padding: 'var(--pv-size-base-3) var(--pv-size-base-4) var(--pv-size-base-4)',
  flex: '0 0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: 'var(--pv-size-base-2)',
});
/**
 *
 */

export const DialogActions = React.forwardRef<HTMLDivElement, DialogActionsProps>((props, ref) => {
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

DialogActions.defaultProps = {};
