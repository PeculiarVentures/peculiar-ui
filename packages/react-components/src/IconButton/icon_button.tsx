import * as React from 'react';
import { Button, ButtonProps } from '../Button';
import { Tooltip } from '../Tooltip';

type BaseProps = {
  /**
   * The text that applied to `aria-label` attribute and Tooltip content.
   */
  title?: string;
};

type IconButtonProps = BaseProps & Omit<ButtonProps, 'variant' | 'withoutPadding' | 'startIcon' | 'endIcon'>;

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const { title, ...other } = props;

  const component = (
    <Button
      aria-label={title}
      {...other}
      ref={ref}
      withoutPadding
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
