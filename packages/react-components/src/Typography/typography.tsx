import * as React from 'react';
import styled from '@emotion/styled';
import { IOverridableComponent, TOverrideProps } from '../OverridableComponent';
import {
  TColorType,
  TTypographyType,
} from '../styles';

/**
 * Types.
 */
export interface ITypographyOwnProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * The variant to use.
   * @default 'b1'
   */
  variant?: TTypographyType;
  /**
   * The color of the component.
   * @default 'black'
   */
  color?: TColorType | 'inherit';
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   */
  noWrap?: boolean;
}

export interface ITypographyTypeMap<P = object, D extends React.ElementType = 'p'> {
  props: P & ITypographyOwnProps;
  defaultComponent: D;
}

export type TTypographyProps<
  D extends React.ElementType = ITypographyTypeMap['defaultComponent'],
> = TOverrideProps<ITypographyTypeMap<object, D>, D> & {
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
})<ITypographyOwnProps>((props) => ({
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

const variantMapping: Record<TTypographyType, 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> = {
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

export const Typography = React.forwardRef<any, TTypographyProps>((props, ref) => {
  const {
    variant = 'b1',
    component,
    color = 'black',
    ...other
  } = props;

  const Component = component || variantMapping[variant] || 'p';

  return (
    <TypographyRoot
      as={Component}
      ref={ref}
      variant={variant}
      color={color}
      {...other}
    />
  );
}) as IOverridableComponent<ITypographyTypeMap>;

Typography.displayName = 'Typography';
