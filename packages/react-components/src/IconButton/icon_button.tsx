import * as React from 'react';
import { Button, ButtonProps } from '../Button';
import { Tooltip } from '../Tooltip';
import { css, cx } from '../styles';

type BaseProps = {
  /**
   * The text that applied to `aria-label` attribute and Tooltip content.
   */
  title?: string;
};

type IconButtonProps = BaseProps & Omit<ButtonProps, 'variant' | 'withoutPadding' | 'startIcon' | 'endIcon'>;

const stylesBase = () => css({
  '--pv-color-black': 'var(--pv-color-gray-9)',
});

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const {
    title,
    className,
    ...other
  } = props;

  const component = (
    <Button
      aria-label={title}
      {...other}
      ref={ref}
      withoutPadding
      className={cx({
        [stylesBase()]: true,
        [className]: !!className,
      })}
    />
  );

  if (!title) {
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
