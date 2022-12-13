import * as React from 'react';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';
import {
  css,
  cx,
  ColorType,
  TypographyType,
} from '../styles';

/**
 * Types.
 */
export interface TypographyOwnProps {
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
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   */
  noWrap?: boolean;
}

export interface TypographyTypeMap<P = {}, D extends React.ElementType = 'p'> {
  props: P & TypographyOwnProps;
  defaultComponent: D;
}

export type TypographyProps<
  D extends React.ElementType = TypographyTypeMap['defaultComponent'],
> = OverrideProps<TypographyTypeMap<{}, D>, D> & {
  component?: D;
};
/**
 *
 */

/**
 * Styles.
 */
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
/**
 *
 */

const variantMapping: Record<TypographyType, 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  s1: 'h6',
  s2: 'h6',
  b1: 'p',
  b2: 'p',
  b3: 'p',
  btn1: 'span',
  btn2: 'span',
  c1: 'p',
  c2: 'p',
};

export const Typography = React.forwardRef<any, TypographyProps>((props, ref) => {
  const {
    variant,
    className,
    color,
    noWrap,
    component,
    ...other
  } = props;

  const Component = component || variantMapping[variant] || 'p';

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
}) as OverridableComponent<TypographyTypeMap>;

Typography.displayName = 'Typography';

Typography.defaultProps = {
  variant: 'b1',
  color: 'black',
};
