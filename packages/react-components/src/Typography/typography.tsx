import * as React from 'react';
import { forwardRef } from '../system';
import {
  css,
  cx,
  ColorType,
  TypographyType,
} from '../styles';

export type TypographyProps = {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * The variant to use.
   */
  variant?: TypographyType;
  /**
   * The color of the component.
   */
  color?: ColorType | 'inherit';
  /**
   * The className of the component.
   */
  className?: string;
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   */
  noWrap?: boolean;
  'data-testid'?: string;
};

const stylesBase = () => css({
  label: 'Typography',
  margin: 0,
});

const stylesVariant = (variant: TypographyProps['variant']) => css({
  label: variant,
  fontWeight: `var(--pv-text-${variant}-weight)`,
  fontSize: `var(--pv-text-${variant}-size)`,
  lineHeight: `var(--pv-text-${variant}-height)`,
  letterSpacing: `var(--pv-text-${variant}-spacing)`,
} as any);

const stylesColor = (color: TypographyProps['color']) => css({
  label: color,
  color: color === 'inherit' ? 'inherit' : `var(--pv-color-${color})`,
});

const stylesNoWrap = () => css({
  label: 'noWrap',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

export const Typography = forwardRef<TypographyProps, 'p'>((props, ref) => {
  const {
    variant,
    className,
    color,
    noWrap,
    as,
    ...other
  } = props;

  const getTagFromVariantProp = () => {
    if (/h/.test(variant)) {
      return variant as string;
    }

    if (/s/.test(variant)) {
      return 'h6';
    }

    if (/btn/.test(variant)) {
      return 'span';
    }

    return 'p';
  };

  const Component = as || getTagFromVariantProp();

  return (
    <Component
      {...other}
      ref={ref}
      className={cx({
        [stylesBase()]: true,
        [stylesVariant(variant)]: !!variant,
        [stylesColor(color)]: !!color,
        [stylesNoWrap()]: noWrap,
        [className]: !!className,
      })}
    />
  );
});

Typography.displayName = 'Typography';

Typography.defaultProps = {
  variant: 'b1',
  color: 'black',
};
