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
  dataTestId?: string;
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   */
  noWrap?: boolean;
};

type TypographyProps = BaseProps & React.HTMLAttributes<HTMLElement>;

const stylesBase = () => css({
  label: 'Typography',
  margin: 0,
});

const stylesVariant = (variant: TypographyType) => css({
  label: variant,
  fontWeight: `var(--pv-text-${variant}-weight)`,
  fontSize: `var(--pv-text-${variant}-size)`,
  lineHeight: `var(--pv-text-${variant}-height)`,
  letterSpacing: `var(--pv-text-${variant}-spacing)`,
} as any);

const stylesColor = (color: ColorType) => css({
  label: color,
  color: `var(--pv-color-${color})`,
});

const stylesNoWrap = () => css({
  label: 'noWrap',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

export const Typography = React.forwardRef<HTMLElement, TypographyProps>((props, ref) => {
  const {
    variant,
    className,
    as,
    color,
    dataTestId,
    noWrap,
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
    ...other,
    ref,
    className: cx({
      [stylesBase()]: true,
      [stylesVariant(variant)]: !!variant,
      [stylesColor(color)]: !!color,
      [stylesNoWrap()]: noWrap,
      [className]: !!className,
    }),
    'data-testid': dataTestId,
  });
});

Typography.displayName = 'Typography';

Typography.defaultProps = {
  variant: 'b1',
};
