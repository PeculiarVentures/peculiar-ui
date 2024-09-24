import React from 'react';

import { render, renderHook } from '../test-utils';
import { useIntersectionObserver } from './use_intersection_observer';
import { intersectionObserver } from '../utils/intersection_observer';

jest.mock('../utils/intersection_observer.ts');

describe('useIntersectionObserver()', () => {
  it('Don\'t add a node to the observer if the node doesn\'t exist', () => {
    const { result } = renderHook(useIntersectionObserver);
    const [refCallback] = result.current;

    refCallback(null);

    expect(intersectionObserver.add).not.toBeCalled();
  });

  it('Init hook and add a node to the observer', () => {
    const { result } = renderHook(useIntersectionObserver);
    const [refCallback] = result.current;

    render(<div ref={refCallback} />);

    expect(intersectionObserver.add).toHaveBeenCalledWith(
      expect.any(HTMLDivElement),
      expect.any(Function),
    );
  });

  it('Remove node from observer on unmount', () => {
    const { result, unmount } = renderHook(useIntersectionObserver);
    const [refCallback] = result.current;

    render(<div ref={refCallback} />);

    unmount();

    expect(intersectionObserver.remove).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });
});
