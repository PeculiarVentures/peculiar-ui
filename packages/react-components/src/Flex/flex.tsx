import * as React from 'react';
import styled from '@emotion/styled';
import { IOverridableComponent, TOverrideProps } from '../OverridableComponent';

/**
 * Types.
 */
export interface IFlexOwnProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  size?: ('auto' | 'grow');
}

export interface IFlexTypeMap<P = object, D extends React.ElementType = 'div'> {
  props: P & IFlexOwnProps;
  defaultComponent: D;
}

export type TFlexProps<
  D extends React.ElementType = IFlexTypeMap['defaultComponent'],
> = TOverrideProps<IFlexTypeMap<object, D>, D> & {
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
})<IFlexOwnProps>(
  (props) => ({
    minWidth: '0px',
    ...(props.size === 'auto' && {
      flex: '0 0 auto',
      maxWidth: 'none',
      width: 'auto',
    }),
    ...(props.size === 'grow' && {
      flexBasis: '0px',
      flexGrow: 1,
      maxWidth: '100%',
    }),
    ...(!props.size && {
      flexGrow: 0,
      flexBasis: 'auto',
    }),
  }),
);
/**
 *
 */

export const Flex = React.forwardRef<any, TFlexProps>((props, ref) => {
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
}) as IOverridableComponent<IFlexTypeMap>;

Flex.displayName = 'Flex';
