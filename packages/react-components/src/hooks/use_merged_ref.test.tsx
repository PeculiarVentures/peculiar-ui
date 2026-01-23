import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render } from '../test-utils';
import { useMergedRef } from './use_merged_ref';

// eslint-disable-next-line @stylistic/max-len
const Component = ({ refs }: { refs: (React.MutableRefObject<any> | React.RefCallback<HTMLElement>)[] }) => {
  const ref = React.useRef();
  const mergedRef = useMergedRef(ref, ...refs);

  return <div ref={mergedRef} />;
};

describe('useMergedRef()', () => {
  it('should assign node to the refs', () => {
    const ref = React.createRef();
    const reference: { current: HTMLDivElement | null } = {
      current: null,
    };
    let refFromCallback = null;

    const useRefSpy = vi.spyOn(React, 'useRef').mockReturnValue(reference);
    const refCallback: React.RefCallback<HTMLElement> = (nodeRef) => {
      refFromCallback = nodeRef;
    };

    render(
      <Component refs={[ref, refCallback]} />,
    );

    expect(refFromCallback).toBeInstanceOf(HTMLDivElement);
    expect(reference.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);

    useRefSpy.mockClear();
  });
});
