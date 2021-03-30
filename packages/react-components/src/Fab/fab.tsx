import * as React from 'react';
import { css, cx } from '../styles';
import { ButtonBase, ButtonBaseProps } from '../ButtonBase';

type ButtonProps = Omit<ButtonBaseProps, 'size'>;

const stylesBase = () => css({
  label: 'Fab',
  borderRadius: '50%',
  height: '55px',
  width: '55px',
  padding: '10px',
});

export const Fab = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    children,
    ...other
  } = props;

  return (
    <ButtonBase
      ref={ref}
      className={cx({
        [stylesBase()]: true,
        [className]: !!className,
      })}
      size="large"
      {...other}
    >
      {children}
    </ButtonBase>
  );
});

Fab.displayName = 'Fab';

Fab.defaultProps = {
  disabled: false,
  variant: 'primary',
};
