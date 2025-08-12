import * as React from 'react';
import styled from '@emotion/styled';
import { IOverridableComponent, TOverrideProps } from '../OverridableComponent';
import { IButtonBaseOwnProps, ButtonBase } from '../ButtonBase';

/**
 * Types.
 */
export interface IFabOwnProps extends Omit<IButtonBaseOwnProps, 'size' | 'variant'> {
  /**
   * The variant to use.
   * @default 'contained'
   */
  variant?: (
    'contained'
    | 'outlined'
  );
}

export interface IFabTypeMap<P = object, D extends React.ElementType = 'button'> {
  props: P & IFabOwnProps;
  defaultComponent: D;
}

export type TFabProps<
  D extends React.ElementType = IFabTypeMap['defaultComponent'],
> = TOverrideProps<IFabTypeMap<object, D>, D> & {
  component?: D;
};
/**
 *
 */

/**
 * Styles.
 */
const FabRoot = styled(ButtonBase)<IFabOwnProps>({
  borderRadius: '50%',
  height: 'var(--pv-size-base-11)',
  width: 'var(--pv-size-base-11)',
  padding: 'var(--pv-size-base-2)',
}, (props) => {
  const isDark = props.theme.mode === 'dark';

  let colorDisabled: string;
  let backgroundColorDisabled: string;
  let borderColorDisabled: string;

  if (props.variant === 'outlined') {
    if (isDark) {
      backgroundColorDisabled = 'var(--pv-color-gray-3)';
      colorDisabled = 'var(--pv-color-gray-4)';
      borderColorDisabled = 'var(--pv-color-gray-4)';
    } else {
      colorDisabled = 'var(--pv-color-gray-8)';
      borderColorDisabled = 'var(--pv-color-gray-2)';
      backgroundColorDisabled = 'var(--pv-color-white)';
    }
  }

  return {
    '&:disabled': {
      color: colorDisabled,
      borderColor: borderColorDisabled,
      backgroundColor: backgroundColorDisabled,
    },
  };
});
/**
 *
 */

export const Fab = React.forwardRef<any, TFabProps>((props, ref) => {
  const {
    disabled = false,
    variant = 'contained',
    color = 'primary',
    ...other
  } = props;

  return (
    <FabRoot
      ref={ref}
      size="large"
      disabled={disabled}
      variant={variant}
      color={color}
      {...other}
    />
  );
}) as IOverridableComponent<IFabTypeMap>;

Fab.displayName = 'Fab';
