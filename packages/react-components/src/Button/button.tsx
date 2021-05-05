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
  /**
   * Specify if the button doesn't have padding.
   */
  withoutPadding?: boolean;
};

export type ButtonProps = BaseProps & ButtonBaseProps;

const stylesBase = () => css({
  label: 'Button',
  borderRadius: '4px',
});

const stylesSizeSmall = (props: ButtonProps) => css({
  label: 'small',
  height: '30px',
  minWidth: '30px',
  ...(props.circled && {
    borderRadius: '30px',
  }),
  ...(!props.withoutPadding && {
    padding: '0 10px',
  }),
});

const stylesSizeMedium = (props: ButtonProps) => css({
  label: 'medium',
  height: '35px',
  minWidth: '35px',
  ...(props.circled && {
    borderRadius: '35px',
  }),
  ...(!props.withoutPadding && {
    padding: '0 15px',
  }),
});

const stylesSizeLarge = (props: ButtonProps) => css({
  label: 'large',
  height: '40px',
  minWidth: '40px',
  ...(props.circled && {
    borderRadius: '40px',
  }),
  ...(!props.withoutPadding && {
    padding: '0 20px',
  }),
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
    withoutPadding,
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
        [stylesSizeSmall(props)]: size === 'small',
        [stylesSizeMedium(props)]: size === 'medium',
        [stylesSizeLarge(props)]: size === 'large',
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
  variant: 'text',
  color: 'default',
  size: 'medium',
};
