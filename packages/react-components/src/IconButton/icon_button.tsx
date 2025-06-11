import * as React from 'react';
import styled from '@emotion/styled';
import { IOverridableComponent, TOverrideProps } from '../OverridableComponent';
import { Button, IButtonOwnProps } from '../Button';
import { Tooltip, ITooltipOwnProps } from '../Tooltip';

/**
 * Types.
 */
export interface IIconButtonOwnProps extends Omit<IButtonOwnProps, 'variant' | 'withoutPadding' | 'startIcon' | 'endIcon'> {
  /**
   * The text that applied to `aria-label` attribute and Tooltip content.
   */
  title?: string;
  /**
   * Props applied to the `Tooltip` element.
   */
  tooltipProps?: Omit<ITooltipOwnProps, 'open' | 'title' | 'children'>;
}

export interface IIconButtonTypeMap<P = object, D extends React.ElementType = 'button'> {
  props: P & IIconButtonOwnProps;
  defaultComponent: D;
}

export type TIconButtonProps<
  D extends React.ElementType = IIconButtonTypeMap['defaultComponent'],
> = TOverrideProps<IIconButtonTypeMap<object, D>, D> & {
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
  border: 'none',
});
/**
 *
 */

export const IconButton = React.forwardRef<any, TIconButtonProps>((props, ref) => {
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
}) as IOverridableComponent<IIconButtonTypeMap>;

IconButton.displayName = 'IconButton';

IconButton.defaultProps = {
  disabled: false,
  color: 'default',
  size: 'medium',
};
