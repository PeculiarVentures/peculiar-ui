import * as React from 'react';
import styled from '@emotion/styled';
import type { Property } from 'csstype';
import { IOverridableComponent, TOverrideProps } from '../OverridableComponent';

/**
 * Types.
 */
export interface IFlexContainerOwnProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Defines the `flex-direction` style property.
   * @default 'row'
   */
  direction?: Property.FlexDirection;
  /**
   * Defines the `flex-wrap` style property.
   */
  wrap?: Property.FlexWrap;
  /**
   * Defines the `gap` style property.
   */
  gap?: string | number;
  /**
   * Defines the `align-items` style property.
   */
  align?: Property.AlignItems;
  /**
   * Defines the `justify-content` style property.
   */
  justify?: Property.JustifyContent;
}

export interface IFlexContainerTypeMap<P = object, D extends React.ElementType = 'div'> {
  props: P & IFlexContainerOwnProps;
  defaultComponent: D;
}

export type TFlexContainerProps<
  D extends React.ElementType = IFlexContainerTypeMap['defaultComponent'],
> = TOverrideProps<IFlexContainerTypeMap<object, D>, D> & {
  component?: D;
};
/**
 *
 */

const reactPropsRegex = /^(as|direction|wrap|gap|align|justify)$/;

/**
 * Styles.
 */
const FlexRoot = styled('div', {
  shouldForwardProp: (prop) => !reactPropsRegex.test(prop),
})<IFlexContainerOwnProps>(
  (props) => ({
    display: 'flex',
    flexDirection: props.direction,
    flexWrap: props.wrap,
    gap: props.gap,
    alignItems: props.align,
    justifyContent: props.justify,
  }),
);
/**
 *
 */

export const FlexContainer = React.forwardRef<any, TFlexContainerProps>((props, ref) => {
  const {
    component,
    direction = 'row',
    ...other
  } = props;
  const Component = component || 'div';

  return (
    <FlexRoot
      as={Component}
      ref={ref}
      direction={direction}
      {...other}
    />
  );
}) as IOverridableComponent<IFlexContainerTypeMap>;

FlexContainer.displayName = 'FlexContainer';
