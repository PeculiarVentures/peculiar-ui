import React from 'react';
import { css, cx } from '../styles';

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
};

type DialogContentProps = BaseProps & React.HTMLAttributes<HTMLDivElement>;

const stylesBase = () => css({
  label: 'DialogContent',
  flex: '1 1 auto',
  padding: '5px 20px',
  overflowY: 'auto',
});

export const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>((props, ref) => {
  const {
    children,
    className,
    ...other
  } = props;

  return (
    <div
      {...other}
      ref={ref}
      className={cx({
        [stylesBase()]: true,
        [className]: !!className,
      })}
    >
      {children}
    </div>
  );
});

DialogContent.displayName = 'DialogContent';

DialogContent.defaultProps = {};
