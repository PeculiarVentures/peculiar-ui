import * as React from 'react';
import { css, cx, ColorType } from '../styles';

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
  as?: React.ElementType,
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

export const Box = React.forwardRef<HTMLElement, BoxProps>((props, ref?: any) => {
  const {
    className,
    as,
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

  return React.createElement(as || 'div', {
    ref,
    className: cx(
      stylesBase(),
      (background && css({
        label: `background-${background}`,
        background: `var(--pv-color-${background})`,
      })),
      (borderColor && css({
        label: `borderColor-${borderColor}`,
        borderColor: `var(--pv-color-${borderColor})`,
      })),
      css({
        borderWidth: getBorderWidth(),
        borderStyle,
        borderRadius,
      }),
      className,
    ),
    ...other,
  });
});

Box.displayName = 'Box';

Box.defaultProps = {
  as: 'div',
};
