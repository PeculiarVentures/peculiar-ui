import * as React from 'react';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';
import { css, cx } from '../styles';
import { Button, ButtonOwnProps } from '../Button';
import { Tooltip } from '../Tooltip';

/**
 * Types.
 */
export interface IconButtonOwnProps extends Omit<ButtonOwnProps, 'variant' | 'withoutPadding' | 'startIcon' | 'endIcon'> {
  /**
   * The text that applied to `aria-label` attribute and Tooltip content.
   */
  title?: string;
}

export interface IconButtonTypeMap<P = {}, D extends React.ElementType = 'button'> {
  props: P & IconButtonOwnProps;
  defaultComponent: D;
}

export type IconButtonProps<
  D extends React.ElementType = IconButtonTypeMap['defaultComponent'],
> = OverrideProps<IconButtonTypeMap<{}, D>, D> & {
  component?: D;
};
/**
 *
 */

/**
 * Styles.
 */
const stylesBase = () => css({
  '--pv-color-black': 'var(--pv-color-gray-9)',
  border: 'none',
});
/**
 *
 */

export const IconButton = React.forwardRef<any, IconButtonProps>((props, ref) => {
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
}) as OverridableComponent<IconButtonTypeMap>;

IconButton.displayName = 'IconButton';

IconButton.defaultProps = {
  disabled: false,
  color: 'default',
  size: 'medium',
};
