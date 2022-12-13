import * as React from 'react';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';
import { css, cx, ColorType } from '../styles';

/**
 * Types.
 */
export interface BoxOwnProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  background?: ColorType;
  borderColor?: ColorType;
  borderWidth?: number;
  borderStyle?: ('solid' | 'dashed');
  borderPosition?: ('horizontal' | 'vertical' | 'top' | 'right' | 'bottom' | 'left');
  borderRadius?: number;
}

export interface BoxTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & BoxOwnProps;
  defaultComponent: D;
}

export type BoxProps<
  D extends React.ElementType = BoxTypeMap['defaultComponent'],
> = OverrideProps<BoxTypeMap<{}, D>, D> & {
  component?: D;
};
/**
 *
 */

/**
 * Styles.
 */
const stylesBase = () => css({
  label: 'Box',
});

const stylesBackground = (color: ColorType) => css({
  label: color,
  background: `var(--pv-color-${color})`,
});

const stylesBorderColor = (color: ColorType) => css({
  label: color,
  borderColor: `var(--pv-color-${color})`,
});
/**
 *
 */

export const Box = React.forwardRef<any, BoxProps>((props, ref) => {
  const {
    className,
    background,
    borderColor,
    borderWidth,
    borderStyle,
    borderPosition,
    borderRadius,
    component,
    ...other
  } = props;

  const getBorderWidth = () => {
    if (typeof borderWidth !== 'number') {
      return undefined;
    }

    if (borderPosition === 'horizontal') {
      return [borderWidth, 0, borderWidth, 0].join('px ');
    }

    if (borderPosition === 'vertical') {
      return [0, borderWidth, 0, borderWidth, ''].join('px ');
    }

    if (borderPosition === 'top') {
      return [borderWidth, 0, 0, 0].join('px ');
    }

    if (borderPosition === 'right') {
      return [0, borderWidth, 0, 0].join('px ');
    }

    if (borderPosition === 'bottom') {
      return [0, 0, borderWidth, 0].join('px ');
    }

    if (borderPosition === 'left') {
      return [0, 0, 0, borderWidth, ''].join('px ');
    }

    return borderWidth;
  };

  const Component = component || 'div';

  return (
    <Component
      {...other}
      ref={ref}
      className={cx({
        [stylesBase()]: true,
        [stylesBackground(background)]: !!background,
        [stylesBorderColor(borderColor)]: !!borderColor,
        [className]: !!className,
      }, css({
        borderWidth: getBorderWidth(),
        borderStyle,
        borderRadius,
      }))}
    />
  );
}) as OverridableComponent<BoxTypeMap>;

Box.displayName = 'Box';
