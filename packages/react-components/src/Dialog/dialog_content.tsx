import React from 'react';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { css, cx } from '../styles';

type BaseProps = {
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
};

type DialogContentProps = BaseProps & React.HTMLAttributes<HTMLDivElement>;

const stylesBase = () => css({
  label: 'DialogContent',
  flex: '1 1 auto',
  padding: '15px 20px',
  overflowY: 'auto',
});

const stylesError = () => css({
  label: 'DialogContent-error',
  minHeight: '60px',
  padding: '20px 15px',
  boxSizing: 'border-box',
  margin: '-10px -15px 10px',
});

export const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>((props, ref) => {
  const {
    children,
    className,
    dividers,
    error,
    ...other
  } = props;

  return (
    <Box
      {...other}
      ref={ref}
      className={cx({
        [stylesBase()]: true,
        [className]: !!className,
      })}
      borderColor="gray-5"
      borderWidth={dividers ? 1 : 0}
      borderStyle="solid"
      borderPosition="horizontal"
      data-key="dialog.content"
    >
      {error && (
        <Box
          background="wrong-tint-5"
          borderRadius={4}
          className={cx(stylesError())}
        >
          <Typography
            color="wrong"
            variant="b3"
          >
            {error}
          </Typography>
        </Box>
      )}
      {children}
    </Box>
  );
});

DialogContent.displayName = 'DialogContent';

DialogContent.defaultProps = {
  dividers: true,
};
