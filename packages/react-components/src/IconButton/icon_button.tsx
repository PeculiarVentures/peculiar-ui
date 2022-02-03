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
  // eslint-disable-next-line react/default-props-match-prop-types
  disabled: false,
  // eslint-disable-next-line react/default-props-match-prop-types
  color: 'default',
  // eslint-disable-next-line react/default-props-match-prop-types
  size: 'medium',
};
