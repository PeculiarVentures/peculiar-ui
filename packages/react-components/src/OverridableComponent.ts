import * as React from 'react';

/**
 * Remove properties `K` from `T`.
 * Distributive for union types.
 */
export type TDistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;

/**
 * A component whose root component can be controlled via a `component` prop.
 *
 * Adjusts valid props based on the type of `component`.
 */
export interface IOverridableComponent<M extends IOverridableTypeMap> {
  <C extends React.ElementType>(
    props: {
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: C;
    } & TOverrideProps<M, C>,
  ): JSX.Element | null;
  (props: TDefaultComponentProps<M>): JSX.Element | null;
  propTypes?: any;
  displayName?: string;
  defaultProps?: Partial<TDefaultComponentProps<M>>;
}

/**
 * Props of the component if `component={Component}` is used.
 */
export type TOverrideProps<
  M extends IOverridableTypeMap,
  C extends React.ElementType,
> = (
  & TBaseProps<M>
  & TDistributiveOmit<React.ComponentPropsWithRef<C>, keyof TBaseProps<M>>
);

/**
 * Props if `component={Component}` is NOT used.
 */
export type TDefaultComponentProps<M extends IOverridableTypeMap>
  = & TBaseProps<M>
    & TDistributiveOmit<React.ComponentPropsWithRef<M['defaultComponent']>, keyof TBaseProps<M>>;

/**
 * Props defined on the component.
 */
export type TBaseProps<M extends IOverridableTypeMap> = M['props'] & ICommonProps;

/**
 * Props that are valid for components.
 */
export interface ICommonProps {
  /**
   * The className of the component.
   */
  className?: string;
  'data-testid'?: string;
}

export interface IOverridableTypeMap {
  props: object;
  defaultComponent: React.ElementType;
}
