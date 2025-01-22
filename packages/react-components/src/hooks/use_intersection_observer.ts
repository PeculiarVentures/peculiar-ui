import React from 'react';
import { intersectionObserver } from '../utils/intersection_observer';

export type TIntersectionObserverHookRefCallbackNode = HTMLElement | null;

export type TIntersectionObserverHookRefCallback = (
  node: TIntersectionObserverHookRefCallbackNode,
) => void;

export type TIntersectionObserverHookResult = [
  TIntersectionObserverHookRefCallback,
  {
    isIntersecting: boolean;
  },
];

/**
 * React sensor hook that tracks the changes in
 * the intersection of a target element with an ancestor element
 * or with a top-level document's viewport.
 *
 * @returns
 * the refCallback function to determine which item to observe
 * @returns
 * the isIntersecting value to detect observing item is intersecting
 *
 * @example
 *
 * ```jsx
 * function App(){
 *   const [refIntersecting, { isIntersecting }] = useIntersectionObserver();
 *   return (
 *      <div
 *        ref={refIntersecting}
 *      >
 *        {isIntersecting ? 'I\'m in the viewport' : null}
 *      </div>
 *   );
 * }
 * ```
 */
export function useIntersectionObserver(): TIntersectionObserverHookResult {
  const nodeRef = React.useRef<TIntersectionObserverHookRefCallbackNode>(null);
  const [isIntersecting, setIntersecting] = React.useState(false);

  React.useEffect(() => () => {
    if (nodeRef.current) {
      intersectionObserver.remove(nodeRef.current);
    }
  }, []);

  const refCallback = React.useCallback<TIntersectionObserverHookRefCallback>(
    (node) => {
      if (node) {
        intersectionObserver.init();
        nodeRef.current = node;
        intersectionObserver.add(node, setIntersecting);
      }
    },
    [],
  );

  return [refCallback, { isIntersecting }];
}
