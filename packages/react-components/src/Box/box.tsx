import * as React from 'react';
import styled from '@emotion/styled';
import { IOverridableComponent, TOverrideProps } from '../OverridableComponent';
import { TColorType, TShadowType } from '../styles';

/**
 * Types.
 */
export interface IBoxOwnProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  background?: TColorType;
  borderColor?: TColorType;
  borderWidth?: number;
  borderStyle?: ('solid' | 'dashed');
  borderPosition?: ('horizontal' | 'vertical' | 'top' | 'right' | 'bottom' | 'left');
  borderRadius?: number;
  boxShadow?: TShadowType;
}

export interface IBoxTypeMap<P = object, D extends React.ElementType = 'div'> {
  props: P & IBoxOwnProps;
  defaultComponent: D;
}

export type TBoxProps<
  D extends React.ElementType = IBoxTypeMap['defaultComponent'],
> = TOverrideProps<IBoxTypeMap<object, D>, D> & {
  component?: D;
};
/**
 *
 */

const reactPropsRegex = /^(as|background|borderColor|borderWidth|borderStyle|borderPosition|borderRadius|boxShadow)$/;

/**
 * Styles.
 */
const BoxRoot = styled('div', { shouldForwardProp: (prop) => !reactPropsRegex.test(prop) })<IBoxOwnProps>(
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

    return { borderWidth };
  },
);
/**
 *
 */

export const Box = React.forwardRef<any, TBoxProps>((props, ref) => {
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
}) as IOverridableComponent<IBoxTypeMap>;

Box.displayName = 'Box';
