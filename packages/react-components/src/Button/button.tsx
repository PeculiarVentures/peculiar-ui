import * as React from 'react';
import { css, cx } from '../styles';
import { ButtonBase, ButtonBaseProps } from '../ButtonBase';

type BaseProps = {
  circled?: boolean;
};

type ButtonProps = BaseProps & ButtonBaseProps;

const stylesBase = () => css({
  label: 'Button',
  borderRadius: '4px',
});

const stylesSizeSmall = (circled?: boolean) => css({
  label: 'small',
  height: '30px',
  minWidth: '30px',
  padding: '0 10px',
  borderRadius: circled ? '30px' : undefined,
});

const stylesSizeMedium = (circled?: boolean) => css({
  label: 'medium',
  height: '35px',
  minWidth: '35px',
  padding: '0 15px',
  borderRadius: circled ? '35px' : undefined,
});

const stylesSizeLarge = (circled?: boolean) => css({
  label: 'large',
  height: '40px',
  minWidth: '40px',
  padding: '0 20px',
  borderRadius: circled ? '40px' : undefined,
});

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    className,
    size,
    circled,
    ...other
  } = props;

  return (
    <ButtonBase
      {...other}
      ref={ref}
      className={cx({
        [stylesBase()]: true,
        [stylesSizeSmall(circled)]: size === 'small',
        [stylesSizeMedium(circled)]: size === 'medium',
        [stylesSizeLarge(circled)]: size === 'large',
        [className]: !!className,
      })}
      size={size}
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
