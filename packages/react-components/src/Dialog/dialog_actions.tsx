import React from 'react';
import { Box } from '../Box';
import { css, cx } from '../styles';

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
};

type DialogActionsProps = BaseProps & React.HTMLAttributes<HTMLDivElement>;

const stylesBase = () => css({
  label: 'DialogActions',
  padding: '15px 20px 20px',
  flex: '0 0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  '& > :not(:first-of-type)': {
    marginLeft: '10px',
  },
});

export const DialogActions = React.forwardRef<HTMLDivElement, DialogActionsProps>((props, ref) => {
  const {
    children,
    className,
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
      borderWidth={1}
      borderStyle="solid"
      borderPosition="top"
    >
      {children}
    </Box>
  );
});

DialogActions.displayName = 'DialogActions';

DialogActions.defaultProps = {};
