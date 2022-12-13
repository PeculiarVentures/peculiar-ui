import * as React from 'react';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';
import { css, cx } from '../styles';
import { ButtonBase, ButtonBaseOwnProps } from '../ButtonBase';

/**
 * Types.
 */
export interface ButtonOwnProps extends ButtonBaseOwnProps {
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
}

export interface ButtonTypeMap<P = {}, D extends React.ElementType = 'button'> {
  props: P & ButtonOwnProps;
  defaultComponent: D;
}

export type ButtonProps<
  D extends React.ElementType = ButtonTypeMap['defaultComponent'],
> = OverrideProps<ButtonTypeMap<{}, D>, D> & {
  component?: D;
};
/**
 *
 */

/**
 * Styles.
 */
const stylesBase = () => css({
  label: 'Button',
  borderRadius: '4px',
});

const stylesSizeSmall = (props: ButtonProps) => css({
  label: 'small',
  height: 'var(--pv-size-base-6)',
  minWidth: 'var(--pv-size-base-6)',
  ...(props.circled && {
    borderRadius: 'var(--pv-size-base-6)',
  }),
  ...(!props.withoutPadding && {
    padding: '0 var(--pv-size-base-2)',
  }),
});

const stylesSizeMedium = (props: ButtonProps) => css({
  label: 'medium',
  height: 'var(--pv-size-base-7)',
  minWidth: 'var(--pv-size-base-7)',
  ...(props.circled && {
    borderRadius: 'var(--pv-size-base-7)',
  }),
  ...(!props.withoutPadding && {
    padding: '0 var(--pv-size-base-3)',
  }),
});

const stylesSizeLarge = (props: ButtonProps) => css({
  label: 'large',
  height: 'var(--pv-size-base-8)',
  minWidth: 'var(--pv-size-base-8)',
  ...(props.circled && {
    borderRadius: 'var(--pv-size-base-8)',
  }),
  ...(!props.withoutPadding && {
    padding: '0 var(--pv-size-base-4)',
  }),
});

const stylesStartIcon = () => css({
  label: 'Button-startIcon',
  marginRight: 'var(--pv-size-base)',
  display: 'inherit',
});

const stylesEndIcon = () => css({
  label: 'Button-endIcon',
  marginLeft: 'var(--pv-size-base)',
  display: 'inherit',
});
/**
 *
 */

export const Button = React.forwardRef<any, ButtonProps>((props, ref) => {
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
}) as OverridableComponent<ButtonTypeMap>;

Button.displayName = 'Button';

Button.defaultProps = {
  disabled: false,
  variant: 'text',
  color: 'default',
  size: 'medium',
};
