import React from 'react';
import { nanoid } from 'nanoid';

/**
 * React hook for generate unique id.
 * @param defaultValue The default id value.
 */
export function useId(defaultValue?: string) {
  const [id] = React.useState(() => nanoid());

  return defaultValue || id;
}
