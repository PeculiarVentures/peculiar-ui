import * as React from 'react';
import styled from '@emotion/styled';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';
import { ButtonBaseOwnProps, ButtonBase } from '../ButtonBase';

/**
 * Types.
 */
export interface FabOwnProps extends Omit<ButtonBaseOwnProps, 'size' | 'variant'> {
  /**
   * The variant to use.
   */
  variant?: (
    'contained' |
    'outlined'
  );
}

export interface FabTypeMap<P = {}, D extends React.ElementType = 'button'> {
  props: P & FabOwnProps;
  defaultComponent: D;
}

export type FabProps<
  D extends React.ElementType = FabTypeMap['defaultComponent'],
> = OverrideProps<FabTypeMap<{}, D>, D> & {
  component?: D;
};
/**
 *
 */

/**
 * Styles.
 */
const FabRoot = styled(ButtonBase)<FabOwnProps>({
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
      backgroundColorDisabled = 'var(--pv-color-gray-1)';
      colorDisabled = 'var(--pv-color-gray-6)';
      borderColorDisabled = 'var(--pv-color-gray-5)';
    } else {
      colorDisabled = 'var(--pv-color-gray-8)';
      borderColorDisabled = 'var(--pv-color-gray-8)';
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

export const Fab = React.forwardRef<any, FabProps>((props, ref) => (
  <FabRoot
    ref={ref}
    size="large"
    {...props}
  />
)) as OverridableComponent<FabTypeMap>;

Fab.displayName = 'Fab';

Fab.defaultProps = {
  disabled: false,
  variant: 'contained',
  color: 'primary',
};
