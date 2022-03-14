import * as React from 'react';

/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */
export function useEventCallback<Args extends unknown[], Return>(
  fn: (...args: Args) => Return,
): (...args: Args) => Return {
  const ref = React.useRef(fn);

  React.useLayoutEffect(() => {
    ref.current = fn;
  });

  return React.useCallback(
    (...args: Args) =>
      // @ts-expect-error hide `this`
      // tslint:disable-next-line:ban-comma-operator
      // eslint-disable-next-line implicit-arrow-linebreak
      (0, ref.current!)(...args),
    [],
  );
}
