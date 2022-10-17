import * as React from 'react';
import { forwardRef } from '../system';
import { css, cx } from '../styles';
import { ButtonBase, ButtonBaseProps } from '../ButtonBase';

export type FabProps = Omit<ButtonBaseProps, 'size' | 'variant'> & {
  /**
   * The variant to use.
   */
  variant?: (
    'contained' |
    'outlined'
  );
};

const stylesBase = () => css({
  label: 'Fab',
  borderRadius: '50%',
  height: 'var(--pv-size-base-11)',
  width: 'var(--pv-size-base-11)',
  padding: 'var(--pv-size-base-2)',
});

export const Fab = forwardRef<FabProps, 'button'>((props, ref) => {
  const {
    className,
    children,
    ...other
  } = props;

  return (
    <ButtonBase
      {...other}
      ref={ref}
      className={cx({
        [stylesBase()]: true,
        [className]: !!className,
      })}
      size="large"
    >
      {children}
    </ButtonBase>
  );
});

Fab.displayName = 'Fab';

Fab.defaultProps = {
  disabled: false,
  variant: 'contained',
  color: 'primary',
};
