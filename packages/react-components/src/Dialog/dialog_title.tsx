import React from 'react';
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
    <header
      {...other}
      ref={ref}
      className={cx({
        [stylesBase()]: true,
        [className]: !!className,
      })}
      data-key="dialog.title"
    >
      <Typography
        variant="h4"
        color="black"
        noWrap
      >
        {children}
      </Typography>
    </header>
  );
});

DialogTitle.displayName = 'DialogTitle';

DialogTitle.defaultProps = {};
