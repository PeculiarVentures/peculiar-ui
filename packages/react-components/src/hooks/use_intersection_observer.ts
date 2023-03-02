import React from 'react';
import { intersectionObserver } from '../utils/intersection_observer';

export type IntersectionObserverHookRefCallbackNode = HTMLElement | null;

export type IntersectionObserverHookRefCallback = (
  node: IntersectionObserverHookRefCallbackNode,
) => void;

export type IntersectionObserverHookResult = [
  IntersectionObserverHookRefCallback,
  {
    isIntersecting: boolean;
  },
];

/**
 * React sensor hook that tracks the changes in
 * the intersection of a target element with an ancestor element
 * or with a top-level document's viewport.
 */
export function useIntersectionObserver(): IntersectionObserverHookResult {
  const nodeRef = React.useRef<IntersectionObserverHookRefCallbackNode>(null);
  const [isIntersecting, setIntersecting] = React.useState(false);

  React.useEffect(() => () => {
    if (nodeRef.current) {
      intersectionObserver.remove(nodeRef.current);
    }
  }, []);

  const refCallback = React.useCallback<IntersectionObserverHookRefCallback>(
    (node) => {
      if (node) {
        nodeRef.current = node;
        intersectionObserver.add(node, setIntersecting);
      }
    },
    [],
  );

  return [refCallback, { isIntersecting }];
}
