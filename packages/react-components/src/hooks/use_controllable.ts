import { useState, useCallback } from 'react';

const runIfFn = (value: any, ...args: any[]) => (typeof value === 'function' ? value(...args) : value);

export type UseControllableStateProps<T> = {
  /**
   * The value to used in controlled mode
   */
  value?: T;
  /**
   * The initial value to be used, in uncontrolled mode
   */
  defaultValue?: T | (() => T);
  /**
   * The callback fired when the value changes
   */
  onChange?: (value: T) => void;
  /**
   * The function that determines if the state should be updated
   */
  shouldUpdate?: (prev: T, next: T) => boolean;
};

/**
 * React hook for using controlling component state.
 * @param props
 */
export function useControllableState<T>(props: UseControllableStateProps<T>) {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    shouldUpdate,
  } = props;

  const [valueState, setValue] = useState(defaultValue as T);

  const isControlled = valueProp !== undefined;
  const value = isControlled ? (valueProp as T) : valueState;

  const updateValue = useCallback(
    (next: React.SetStateAction<T>) => {
      const nextValue = runIfFn(next, value);

      if (shouldUpdate && !shouldUpdate(value, nextValue)) {
        return;
      }

      if (!isControlled) {
        setValue(nextValue);
      }

      if (onChange) {
        onChange(nextValue);
      }
    },
    [isControlled, onChange, value, shouldUpdate],
  );

  return [value, updateValue] as [T, React.Dispatch<React.SetStateAction<T>>];
}
