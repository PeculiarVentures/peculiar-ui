import * as React from 'react';
import { css, cx } from '../styles';
import { ButtonBase, ButtonBaseProps } from '../ButtonBase';

type BaseProps = {
  circled?: boolean;
  /**
   * Element placed before the children.
   */
  startIcon?: React.ReactNode;
  /**
   * Element placed after the children.
   */
  endIcon?: React.ReactNode;
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

const stylesStartIcon = () => css({
  label: 'Button-startIcon',
  marginRight: '5px',
  display: 'inherit',
});

const stylesEndIcon = () => css({
  label: 'Button-endIcon',
  marginLeft: '5px',
  display: 'inherit',
});

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    className,
    size,
    circled,
    startIcon: startIconProp,
    endIcon: endIconProp,
    ...other
  } = props;

  const startIcon = startIconProp && (
    <span
      className={cx(stylesStartIcon())}
    >
      {startIconProp}
    </span>
  );

  const endIcon = endIconProp && (
    <span
      className={cx(stylesEndIcon())}
    >
      {endIconProp}
    </span>
  );

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
      {startIcon}
      {children}
      {endIcon}
    </ButtonBase>
  );
});

Button.displayName = 'Button';

Button.defaultProps = {
  disabled: false,
  variant: 'primary',
  size: 'medium',
};
