import * as React from 'react';
import {
  css,
  cx,
  ColorType,
  TypographyType,
} from '../styles';

type BaseProps = {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * The variant to use.
   */
  variant?: TypographyType;
  color?: ColorType;
  className?: string;
  dataTestId?: string;
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   */
  noWrap?: boolean;
  /**
   * The component used for the root node.
   */
  component?: React.ElementType;
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
    color,
    dataTestId,
    noWrap,
    component: componentProp,
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

  const Component = componentProp || getTagFromVariantProp();

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
      data-testid={dataTestId}
    />
  );
});

Typography.displayName = 'Typography';

Typography.defaultProps = {
  variant: 'b1',
};
