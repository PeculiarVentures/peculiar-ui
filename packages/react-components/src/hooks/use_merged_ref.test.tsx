import React, {
  createRef,
  RefCallback,
  MutableRefObject,
  useRef,
} from 'react';
import { render } from '../test-utils';
import { useMergedRef } from './use_merged_ref';

const Component = ({
  refs,
}: { refs: (MutableRefObject<any> | RefCallback<HTMLElement>)[] }) => {
  const ref = useRef();
  const mergedRef = useMergedRef(ref, ...refs);

  return <div ref={mergedRef} />;
};

describe('useMergedRef()', () => {
  it('should assign node to the refs', () => {
    const ref = createRef();
    const reference: { current: HTMLDivElement | null } = {
      current: null,
    };
    let refFromCallback = null;

    const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValue(reference);
    const refCallback: RefCallback<HTMLElement> = (nodeRef) => {
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
