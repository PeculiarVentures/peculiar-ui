import * as React from 'react';

/**
 * Returns the ref attached to a React element.
 * React 19 passes `ref` as a regular prop and warns when `element.ref` is read;
 * React 18 strips it from the props and only exposes `element.ref`.
 */
export function getElementRef<T>(element: React.ReactElement): React.Ref<T> | undefined {
  if (Number.parseInt(React.version, 10) >= 19) {
    return (element.props as { ref?: React.Ref<T> }).ref;
  }

  return (element as unknown as { ref?: React.Ref<T> }).ref;
}
