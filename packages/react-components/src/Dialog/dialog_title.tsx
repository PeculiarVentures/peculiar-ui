import React from 'react';
import { Typography } from '../Typography';
import { Box } from '../Box';
import { css, cx } from '../styles';

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
};

type DialogTitleProps = BaseProps & React.HTMLAttributes<HTMLDivElement>;

const stylesBase = () => css({
  label: 'DialogTitle',
  padding: '20px 20px 10px',
  flex: '0 0 auto',
});

export const DialogTitle = React.forwardRef<HTMLDivElement, DialogTitleProps>((props, ref) => {
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
      borderPosition="bottom"
    >
      <Typography
        variant="h4"
        color="black"
        noWrap
      >
        {children}
      </Typography>
    </Box>
  );
});

DialogTitle.displayName = 'DialogTitle';

DialogTitle.defaultProps = {};
