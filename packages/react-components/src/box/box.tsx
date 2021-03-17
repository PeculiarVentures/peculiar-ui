import * as React from 'react';
import { css, cx, ColorType } from '../styles';

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
  as?: React.ElementType,
  background?: ColorType;
};

type BoxProps = BaseProps & React.HTMLAttributes<HTMLElement>;

const stylesBase = css({
  label: 'Box',
});

export const Box = React.forwardRef<HTMLElement, BoxProps>((props, ref?: any) => {
  const {
    className,
    as,
    background,
    ...other
  } = props;

  return React.createElement(as || 'div', {
    ref,
    className: cx(
      stylesBase,
      (background && css({
        label: background,
        background: `var(--pv-color-${background})`,
      })),
      className,
    ),
    ...other,
  });
});

Box.displayName = 'Box';

Box.defaultProps = {
  as: 'div',
};
