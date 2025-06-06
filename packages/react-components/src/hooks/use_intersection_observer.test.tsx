import React from 'react';
import { render, renderHook } from '../test-utils';
import { intersectionObserver } from '../utils/intersection_observer';
import { useIntersectionObserver } from './use_intersection_observer';

jest.mock('../utils/intersection_observer.ts');

describe('useIntersectionObserver()', () => {
  it('should do not add a node to the observer if the node doesn\'t exist', () => {
    const { result } = renderHook(useIntersectionObserver);
    const [refCallback] = result.current;

    refCallback(null);

    expect(intersectionObserver.add).not.toBeCalled();
  });

  it('should init hook and add a node to the observer', () => {
    const { result } = renderHook(useIntersectionObserver);
    const [refCallback] = result.current;

    render(
      <div ref={refCallback} />,
    );

    expect(intersectionObserver.add).toHaveBeenCalledWith(
      expect.any(HTMLDivElement),
      expect.any(Function),
    );
  });

  it('should remove node from observer on unmount', () => {
    const { result, unmount } = renderHook(useIntersectionObserver);
    const [refCallback] = result.current;

    render(
      <div ref={refCallback} />,
    );

    unmount();

    expect(intersectionObserver.remove).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });
});
