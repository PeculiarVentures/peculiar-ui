import * as React from 'react';
import { forwardRef } from '../system';
import { css, cx } from '../styles';
import { Button, ButtonProps } from '../Button';
import { Tooltip } from '../Tooltip';

type IconButtonProps = Omit<ButtonProps, 'variant' | 'withoutPadding' | 'startIcon' | 'endIcon'> & {
  /**
   * The text that applied to `aria-label` attribute and Tooltip content.
   */
  title?: string;
};

const stylesBase = () => css({
  '--pv-color-black': 'var(--pv-color-gray-9)',
});

export const IconButton = forwardRef<IconButtonProps, 'button'>((props, ref) => {
  const {
    title,
    className,
    disabled,
    ...other
  } = props;

  const component = (
    <Button
      aria-label={title}
      disabled={disabled}
      {...other}
      ref={ref}
      withoutPadding
      className={cx({
        [stylesBase()]: true,
        [className]: !!className,
      })}
    />
  );

  if (!title || disabled) {
    return component;
  }

  return (
    <Tooltip
      title={title}
      color="black"
      size="small"
    >
      {component}
    </Tooltip>
  );
});

IconButton.displayName = 'IconButton';

IconButton.defaultProps = {
  disabled: false,
  color: 'default',
  size: 'medium',
};
