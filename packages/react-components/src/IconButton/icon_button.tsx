import * as React from 'react';
import styled from '@emotion/styled';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';
import { Button, ButtonOwnProps } from '../Button';
import { Tooltip, TooltipOwnProps } from '../Tooltip';

/**
 * Types.
 */
export interface IconButtonOwnProps extends Omit<ButtonOwnProps, 'variant' | 'withoutPadding' | 'startIcon' | 'endIcon'> {
  /**
   * The text that applied to `aria-label` attribute and Tooltip content.
   */
  title?: string;
  /**
   * Props applied to the `Tooltip` element.
   */
  tooltipProps?: Omit<TooltipOwnProps, 'open' | 'title' | 'children'>;
}

export interface IconButtonTypeMap<P = object, D extends React.ElementType = 'button'> {
  props: P & IconButtonOwnProps;
  defaultComponent: D;
}

export type IconButtonProps<
  D extends React.ElementType = IconButtonTypeMap['defaultComponent'],
> = OverrideProps<IconButtonTypeMap<object, D>, D> & {
  component?: D;
};
/**
 *
 */

/**
 * Styles.
 */
const IconButtonRoot = styled(Button)({
  '--pv-color-black': 'var(--pv-color-gray-9)',
  'border': 'none',
});
/**
 *
 */

export const IconButton = React.forwardRef<any, IconButtonProps>((props, ref) => {
  const {
    title,
    disabled,
    tooltipProps,
    ...other
  } = props;

  const component = (
    <IconButtonRoot
      ref={ref}
      aria-label={title}
      disabled={disabled}
      withoutPadding
      {...other}
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
      {...tooltipProps}
    >
      {component}
    </Tooltip>
  );
}) as OverridableComponent<IconButtonTypeMap>;

IconButton.displayName = 'IconButton';

IconButton.defaultProps = {
  disabled: false,
  color: 'default',
  size: 'medium',
};
