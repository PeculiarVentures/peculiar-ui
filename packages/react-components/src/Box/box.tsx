import * as React from 'react';
import styled from '@emotion/styled';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';
import { ColorType, ShadowType } from '../styles';

/**
 * Types.
 */
export interface BoxOwnProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  background?: ColorType;
  borderColor?: ColorType;
  borderWidth?: number;
  borderStyle?: ('solid' | 'dashed');
  borderPosition?: ('horizontal' | 'vertical' | 'top' | 'right' | 'bottom' | 'left');
  borderRadius?: number;
  boxShadow?: ShadowType;
}

export interface BoxTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & BoxOwnProps;
  defaultComponent: D;
}

export type BoxProps<
  D extends React.ElementType = BoxTypeMap['defaultComponent'],
> = OverrideProps<BoxTypeMap<{}, D>, D> & {
  component?: D;
};
/**
 *
 */

const reactPropsRegex = /^(as|background|borderColor|borderWidth|borderStyle|borderPosition|borderRadius)$/;

/**
 * Styles.
 */
const BoxRoot = styled('div', {
  shouldForwardProp: (prop) => !reactPropsRegex.test(prop),
})<BoxOwnProps>(
  (props) => ({
    background: props.background && `var(--pv-color-${props.background})`,
    borderColor: props.borderColor && `var(--pv-color-${props.borderColor})`,
    borderStyle: props.borderStyle,
    borderRadius: props.borderRadius,
    boxShadow: props.boxShadow && `var(--pv-shadow-${props.boxShadow})`,
  }),
  (props) => {
    const { borderWidth, borderPosition } = props;

    if (typeof borderWidth !== 'number') {
      return {};
    }

    if (borderPosition) {
      return {
        borderWidth: [
          ['horizontal', 'top'].includes(borderPosition) ? borderWidth : 0,
          ['vertical', 'right'].includes(borderPosition) ? borderWidth : 0,
          ['horizontal', 'bottom'].includes(borderPosition) ? borderWidth : 0,
          ['vertical', 'left'].includes(borderPosition) ? borderWidth : 0,
          '',
        ].join('px '),
      };
    }

    return {
      borderWidth,
    };
  },
);
/**
 *
 */

export const Box = React.forwardRef<any, BoxProps>((props, ref) => {
  const {
    component,
    ...other
  } = props;

  const Component = component || 'div';

  return (
    <BoxRoot
      as={Component}
      ref={ref}
      {...other}
    />
  );
}) as OverridableComponent<BoxTypeMap>;

Box.displayName = 'Box';
