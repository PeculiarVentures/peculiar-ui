import * as React from 'react';
import styled from '@emotion/styled';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';
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
const ButtonRoot = styled(ButtonBase)<ButtonOwnProps>((props) => ({
  borderRadius: '4px',
  ...(props.size === 'small' && {
    height: 'var(--pv-size-base-6)',
    minWidth: 'var(--pv-size-base-6)',
    ...(props.circled && {
      borderRadius: 'var(--pv-size-base-6)',
    }),
    ...(!props.withoutPadding && {
      padding: '0 var(--pv-size-base-2)',
    }),
  }),
  ...(props.size === 'medium' && {
    height: 'var(--pv-size-base-7)',
    minWidth: 'var(--pv-size-base-7)',
    ...(props.circled && {
      borderRadius: 'var(--pv-size-base-7)',
    }),
    ...(!props.withoutPadding && {
      padding: '0 var(--pv-size-base-3)',
    }),
  }),
  ...(props.size === 'large' && {
    height: 'var(--pv-size-base-8)',
    minWidth: 'var(--pv-size-base-8)',
    ...(props.circled && {
      borderRadius: 'var(--pv-size-base-8)',
    }),
    ...(!props.withoutPadding && {
      padding: '0 var(--pv-size-base-4)',
    }),
  }),
}));

const StartIconRoot = styled('span')({
  marginRight: 'var(--pv-size-base)',
  display: 'inherit',
});

const EndIconRoot = styled('span')({
  marginLeft: 'var(--pv-size-base)',
  display: 'inherit',
});
/**
 *
 */

export const Button = React.forwardRef<any, ButtonProps>((props, ref) => {
  const {
    children,
    startIcon: startIconProp,
    endIcon: endIconProp,
    ...other
  } = props;

  const startIcon = startIconProp && (
    <StartIconRoot>
      {startIconProp}
    </StartIconRoot>
  );

  const endIcon = endIconProp && (
    <EndIconRoot>
      {endIconProp}
    </EndIconRoot>
  );

  return (
    <ButtonRoot
      ref={ref}
      {...other}
    >
      {startIcon}
      {children}
      {endIcon}
    </ButtonRoot>
  );
}) as OverridableComponent<ButtonTypeMap>;

Button.displayName = 'Button';

Button.defaultProps = {
  disabled: false,
  variant: 'text',
  color: 'default',
  size: 'medium',
};
