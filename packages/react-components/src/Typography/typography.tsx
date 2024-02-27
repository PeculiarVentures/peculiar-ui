import * as React from 'react';
import styled from '@emotion/styled';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';
import {
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

const reactPropsRegex = /^(as|color|variant|noWrap)$/;

/**
 * Styles.
 */
const TypographyRoot = styled('p', {
  shouldForwardProp: (prop) => !reactPropsRegex.test(prop),
})<TypographyOwnProps>((props) => ({
  margin: 0,
  color: props.color === 'inherit' ? 'inherit' : `var(--pv-color-${props.color})`,
  fontWeight: `var(--pv-text-${props.variant}-weight)` as 'normal',
  fontSize: `var(--pv-text-${props.variant}-size)`,
  lineHeight: `var(--pv-text-${props.variant}-height)`,
  letterSpacing: `var(--pv-text-${props.variant}-spacing)`,
  ...(props.noWrap && {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  }),
}));
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
    component,
    ...other
  } = props;

  const Component = component || variantMapping[variant] || 'p';

  return (
    <TypographyRoot
      as={Component}
      ref={ref}
      variant={variant}
      {...other}
    />
  );
}) as OverridableComponent<TypographyTypeMap>;

Typography.displayName = 'Typography';

Typography.defaultProps = {
  variant: 'b1',
  color: 'black',
};
