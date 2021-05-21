import * as React from 'react';
import { css, cx, ColorType } from '../styles';

type BaseProps = {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  className?: string;
  /**
   * The component used for the root node.
   */
  component?: React.ElementType;
  background?: ColorType;
  borderColor?: ColorType;
  borderWidth?: number;
  borderStyle?: ('solid' | 'dashed');
  borderPosition?: ('horizontal' | 'vertical' | 'top' | 'right' | 'bottom' | 'left');
  borderRadius?: number,
  'data-testid'?: string;
};

type BoxProps = BaseProps & React.HTMLAttributes<HTMLElement>;

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

export const Box = React.forwardRef<HTMLElement, BoxProps>((props, ref) => {
  const {
    className,
    component: componentProp,
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

  const Component = componentProp || 'div';

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

Box.defaultProps = {
  component: 'div',
};
