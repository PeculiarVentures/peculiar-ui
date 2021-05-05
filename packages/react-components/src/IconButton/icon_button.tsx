import * as React from 'react';
import { Button, ButtonProps } from '../Button';

type BaseProps = {};

type IconButtonProps = BaseProps & Omit<ButtonProps, 'variant' | 'withoutPadding' | 'startIcon' | 'endIcon'>;

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const {
    className,
    children,
    ...other
  } = props;

  return (
    <Button
      {...other}
      ref={ref}
      withoutPadding
    >
      {children}
    </Button>
  );
});

IconButton.displayName = 'IconButton';

IconButton.defaultProps = {
  disabled: false,
  color: 'default',
  size: 'medium',
};
