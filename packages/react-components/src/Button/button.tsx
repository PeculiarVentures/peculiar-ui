import * as React from 'react';
import { css, cx } from '../styles';
import { ButtonBase, ButtonBaseProps } from '../ButtonBase';

type ButtonProps = ButtonBaseProps;

const stylesBase = () => css({
  label: 'Button',
  borderRadius: '4px',
});

const stylesSizeSmall = () => css({
  label: 'small',
  height: '32px',
  minWidth: '32px',
  padding: '0 10px',
});

const stylesSizeMedium = () => css({
  label: 'medium',
  height: '35px',
  minWidth: '35px',
  padding: '0 15px',
});

const stylesSizeLarge = () => css({
  label: 'large',
  height: '40px',
  minWidth: '40px',
  padding: '0 20px',
});

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    className,
    size,
    ...other
  } = props;

  return (
    <ButtonBase
      ref={ref}
      type="button"
      className={cx({
        [stylesBase()]: true,
        [stylesSizeSmall()]: size === 'small',
        [stylesSizeMedium()]: size === 'medium',
        [stylesSizeLarge()]: size === 'large',
        [className]: !!className,
      })}
      size={size}
      {...other}
    >
      {children}
    </ButtonBase>
  );
});

Button.displayName = 'Button';

Button.defaultProps = {
  disabled: false,
  variant: 'primary',
  size: 'medium',
};
