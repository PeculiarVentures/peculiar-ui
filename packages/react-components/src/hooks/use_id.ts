import { useState } from 'react';
import { nanoid } from 'nanoid';

/**
 * React hook for generate unique id.
 * @param defaultValue The default id value.
 */
export function useId(defaultValue?: string) {
  const [id] = useState(() => nanoid());

  return defaultValue || id;
}
