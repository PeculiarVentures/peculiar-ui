import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '../Typography';
import { IconButton } from '../IconButton';
import { CloseIcon } from '../icons';

/**
 * Types.
 */
interface DialogTitleOwnProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * The className of the component.
   */
  className?: string;
  /**
   * Callback fired when the component requests to be closed.
   */
  onClose?: () => void;
};

type DialogTitleProps = DialogTitleOwnProps & React.HTMLAttributes<HTMLDivElement>;
/**
 *
 */

/**
 * Styles.
 */
const DialogTitleRoot = styled('header')({
  padding: 'var(--pv-size-base-4) var(--pv-size-base-4) var(--pv-size-base-2)',
  display: 'flex',
  flex: '0 0 auto',
  justifyContent: 'space-between',
  gap: 'var(--pv-size-base-2)',
});
/**
 *
 */

export const DialogTitle = React.forwardRef<HTMLDivElement, DialogTitleProps>((props, ref) => {
  const {
    children,
    onClose,
    ...other
  } = props;

  return (
    <DialogTitleRoot
      ref={ref}
      data-key="dialog.title"
      {...other}
    >
      <Typography
        variant="h4"
        color="inherit"
      >
        {children}
      </Typography>

      {onClose && (
        <IconButton
          size="small"
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      )}
    </DialogTitleRoot>
  );
});

DialogTitle.displayName = 'DialogTitle';

DialogTitle.defaultProps = {};
