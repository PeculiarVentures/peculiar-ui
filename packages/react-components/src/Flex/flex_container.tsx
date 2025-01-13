import * as React from 'react';
import styled from '@emotion/styled';
import type { Property } from 'csstype';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';

/**
 * Types.
 */
export interface FlexContainerOwnProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Defines the `flex-direction` style property.
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

export interface FlexContainerTypeMap<P = object, D extends React.ElementType = 'div'> {
  props: P & FlexContainerOwnProps;
  defaultComponent: D;
}

export type FlexContainerProps<
  D extends React.ElementType = FlexContainerTypeMap['defaultComponent'],
> = OverrideProps<FlexContainerTypeMap<object, D>, D> & {
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
})<FlexContainerOwnProps>(
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

export const FlexContainer = React.forwardRef<any, FlexContainerProps>((props, ref) => {
  const {
    component,
    ...other
  } = props;
  const Component = component || 'div';

  return (
    <FlexRoot
      as={Component}
      ref={ref}
      {...other}
    />
  );
}) as OverridableComponent<FlexContainerTypeMap>;

FlexContainer.displayName = 'FlexContainer';

FlexContainer.defaultProps = {
  direction: 'row',
};
