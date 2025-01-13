import * as React from 'react';

/**
 * Remove properties `K` from `T`.
 * Distributive for union types.
 */
export type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;

/**
 * A component whose root component can be controlled via a `component` prop.
 *
 * Adjusts valid props based on the type of `component`.
 */
export interface OverridableComponent<M extends OverridableTypeMap> {
  <C extends React.ElementType>(
    props: {
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: C;
    } & OverrideProps<M, C>,
  ): JSX.Element | null;
  (props: DefaultComponentProps<M>): JSX.Element | null;
  propTypes?: any;
  displayName?: string;
  defaultProps?: Partial<DefaultComponentProps<M>>;
}

/**
 * Props of the component if `component={Component}` is used.
 */
export type OverrideProps<
  M extends OverridableTypeMap,
  C extends React.ElementType,
> = (
  & BaseProps<M>
  & DistributiveOmit<React.ComponentPropsWithRef<C>, keyof BaseProps<M>>
);

/**
 * Props if `component={Component}` is NOT used.
 */
export type DefaultComponentProps<M extends OverridableTypeMap> =
  & BaseProps<M>
  & DistributiveOmit<React.ComponentPropsWithRef<M['defaultComponent']>, keyof BaseProps<M>>;

/**
 * Props defined on the component.
 */
export type BaseProps<M extends OverridableTypeMap> = M['props'] & CommonProps;

/**
 * Props that are valid for components.
 */
export interface CommonProps {
  /**
   * The className of the component.
   */
  'className'?: string;
  'data-testid'?: string;
}

export interface OverridableTypeMap {
  props: {};
  defaultComponent: React.ElementType;
}
