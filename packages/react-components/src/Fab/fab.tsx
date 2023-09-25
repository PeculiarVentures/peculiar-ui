import * as React from 'react';
import styled from '@emotion/styled';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';
import { ButtonBaseOwnProps } from '../ButtonBase';
import { Button } from '../Button';

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
const FabRoot = styled(Button)<FabOwnProps>(() => ({
  borderRadius: '50%',
  height: 'var(--pv-size-base-11)',
  width: 'var(--pv-size-base-11)',
  padding: 'var(--pv-size-base-2)',
}));
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
