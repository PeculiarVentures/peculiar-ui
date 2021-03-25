import * as React from 'react';
import {
  css,
  cx,
  ColorType,
  TypographyType,
} from '../styles';

type BaseProps = {
  children: React.ReactNode;
  variant?: TypographyType;
  color?: ColorType;
  className?: string;
  as?: React.ElementType,
  'data-testid'?: string;
};

type TypographyProps = BaseProps & React.HTMLAttributes<HTMLElement>;

const stylesBase = () => css({
  label: 'Typography',
  margin: 0,
});

export const Typography = React.forwardRef<HTMLElement, TypographyProps>((props, ref) => {
  const {
    variant,
    className,
    as,
    color,
    ...other
  } = props;
  let asComponent = 'p';

  if (/h/.test(variant)) {
    asComponent = variant;
  } else if (/s/.test(variant)) {
    asComponent = 'h6';
  } else if (/btn/.test(variant)) {
    asComponent = 'span';
  }

  return React.createElement(as || asComponent, {
    ref,
    className: cx(
      stylesBase(),
      css({
        label: variant,
        fontWeight: `var(--pv-text-${variant}-weight)`,
        fontSize: `var(--pv-text-${variant}-size)`,
        lineHeight: `var(--pv-text-${variant}-height)`,
        letterSpacing: `var(--pv-text-${variant}-spacing)`,
      } as any),
      (color && css({
        label: color,
        color: `var(--pv-color-${color})`,
      })),
      className,
    ),
    ...other,
  });
});

Typography.displayName = 'Typography';

Typography.defaultProps = {
  variant: 'b1',
};
