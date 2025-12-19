import * as React from 'react';
import styled from '@emotion/styled';
import { IOverridableComponent, TOverrideProps } from '../OverridableComponent';
import { ButtonBase, IButtonBaseOwnProps } from '../ButtonBase';

/**
 * Types.
 */
export interface IButtonOwnProps extends IButtonBaseOwnProps {
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

export interface IButtonTypeMap<P = object, D extends React.ElementType = 'button'> {
  props: P & IButtonOwnProps;
  defaultComponent: D;
}

export type TButtonProps<
  D extends React.ElementType = IButtonTypeMap['defaultComponent'],
> = TOverrideProps<IButtonTypeMap<object, D>, D> & {
  component?: D;
};
/**
 *
 */

/**
 * Styles.
 */
const ButtonRoot = styled(ButtonBase)<IButtonOwnProps>((props) => ({
  borderRadius: '4px',
  ...(props.size === 'small' && {
    height: 'calc(var(--pv-size-base) * 6)',
    minWidth: 'calc(var(--pv-size-base) * 6)',
    ...(props.circled && {
      borderRadius: 'calc(var(--pv-size-base) * 6)',
    }),
    ...(!props.withoutPadding && {
      padding: '0 calc(var(--pv-size-base) * 2)',
    }),
  }),
  ...(props.size === 'medium' && {
    height: 'calc(var(--pv-size-base) * 7)',
    minWidth: 'calc(var(--pv-size-base) * 7)',
    ...(props.circled && {
      borderRadius: 'calc(var(--pv-size-base) * 7)',
    }),
    ...(!props.withoutPadding && {
      padding: '0 calc(var(--pv-size-base) * 3)',
    }),
  }),
  ...(props.size === 'large' && {
    height: 'calc(var(--pv-size-base) * 8)',
    minWidth: 'calc(var(--pv-size-base) * 8)',
    ...(props.circled && {
      borderRadius: 'calc(var(--pv-size-base) * 8)',
    }),
    ...(!props.withoutPadding && {
      padding: '0 calc(var(--pv-size-base) * 4)',
    }),
  }),
}));

const ButtonStartIcon = styled('span')({
  marginRight: 'var(--pv-size-base)',
  display: 'inherit',
});

const ButtonEndIcon = styled('span')({
  marginLeft: 'var(--pv-size-base)',
  display: 'inherit',
});
/**
 *
 */

export const Button = React.forwardRef<any, TButtonProps>((props, ref) => {
  const {
    children,
    startIcon: startIconProp,
    endIcon: endIconProp,
    size = 'medium',
    ...other
  } = props;

  const startIcon = startIconProp && (
    <ButtonStartIcon>
      {startIconProp}
    </ButtonStartIcon>
  );

  const endIcon = endIconProp && (
    <ButtonEndIcon>
      {endIconProp}
    </ButtonEndIcon>
  );

  return (
    <ButtonRoot
      ref={ref}
      size={size}
      {...other}
    >
      {startIcon}
      {children}
      {endIcon}
    </ButtonRoot>
  );
}) as IOverridableComponent<IButtonTypeMap>;

Button.displayName = 'Button';
