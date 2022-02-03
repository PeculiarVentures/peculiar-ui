import * as React from 'react';
import { css, cx } from '../styles';
import { ButtonBase, ButtonBaseProps } from '../ButtonBase';

type BaseProps = {
  /**
   * The variant to use.
   */
  variant?: (
    'contained' |
    'outlined'
  );
};

type FabProps = BaseProps & Omit<ButtonBaseProps, 'size' | 'variant'>;

const stylesBase = () => css({
  label: 'Fab',
  borderRadius: '50%',
  height: 'var(--pv-size-base-11)',
  width: 'var(--pv-size-base-11)',
  padding: 'var(--pv-size-base-2)',
});

export const Fab = React.forwardRef<HTMLButtonElement, FabProps>((props, ref) => {
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
  // eslint-disable-next-line react/default-props-match-prop-types
  disabled: false,
  variant: 'contained',
  // eslint-disable-next-line react/default-props-match-prop-types
  color: 'primary',
};
