import * as React from 'react';
import styled from '@emotion/styled';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';

/**
 * Types.
 */
export interface FlexOwnProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  size?: ('auto' | 'grow');
}

export interface FlexTypeMap<P = object, D extends React.ElementType = 'div'> {
  props: P & FlexOwnProps;
  defaultComponent: D;
}

export type FlexProps<
  D extends React.ElementType = FlexTypeMap['defaultComponent'],
> = OverrideProps<FlexTypeMap<object, D>, D> & {
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
})<FlexOwnProps>(
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

export const Flex = React.forwardRef<any, FlexProps>((props, ref) => {
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
}) as OverridableComponent<FlexTypeMap>;

Flex.displayName = 'Flex';

Flex.defaultProps = {};
