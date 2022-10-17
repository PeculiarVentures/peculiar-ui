import * as React from 'react';
import { forwardRef } from '../system';
import { css, cx, ColorType } from '../styles';

export type BoxProps = {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * The className of the component.
   */
  className?: string;
  background?: ColorType;
  borderColor?: ColorType;
  borderWidth?: number;
  borderStyle?: ('solid' | 'dashed');
  borderPosition?: ('horizontal' | 'vertical' | 'top' | 'right' | 'bottom' | 'left');
  borderRadius?: number,
  'data-testid'?: string;
};

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

export const Box = forwardRef<BoxProps, 'div'>((props, ref) => {
  const {
    className,
    as = 'div',
    background,
    borderColor,
    borderWidth,
    borderStyle,
    borderPosition,
    borderRadius,
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

  const Component = as || 'div';

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
});

Box.displayName = 'Box';
