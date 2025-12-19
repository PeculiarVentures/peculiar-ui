import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '../Typography';

/**
 * Types.
 */
interface IDialogTitleOwnProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * The className of the component.
   */
  className?: string;
  /**
   * Element placed before the title.
   */
  startIcon?: React.ReactNode;
};

type TDialogTitleProps = IDialogTitleOwnProps & React.HTMLAttributes<HTMLDivElement>;
/**
 *
 */

/**
 * Styles.
 */
const DialogTitleRoot = styled('header')({
  padding: '0 calc(var(--pv-size-base) * 6)',
  alignItems: 'center',
  display: 'flex',
  flex: '0 0 auto',
  gap: 'calc(var(--pv-size-base) * 2)',
  height: 'calc(var(--pv-size-base) * 12)',
  borderBottom: '1px solid var(--pv-color-gray-5)',
});
/**
 *
 */

export const DialogTitle = React.forwardRef<HTMLDivElement, TDialogTitleProps>((props, ref) => {
  const {
    children,
    startIcon,
    ...other
  } = props;

  return (
    <DialogTitleRoot
      ref={ref}
      data-key="dialog.title"
      {...other}
    >
      {startIcon}
      <Typography
        variant="h4"
        color="inherit"
      >
        {children}
      </Typography>
    </DialogTitleRoot>
  );
});

DialogTitle.displayName = 'DialogTitle';
