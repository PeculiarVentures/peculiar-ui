import { renderHook } from '../test-utils';
import { useId } from './use_id';

describe('useId()', () => {
  it('generated ID is 21 characters long', () => {
    const { result } = renderHook(() => useId());

    expect(result.current.length).toBe(21);
  });

  it('generated IDs are unique', () => {
    const { result: resultA } = renderHook(() => useId());
    const { result: resultB } = renderHook(() => useId());

    expect(resultA.current).not.toEqual(resultB.current);
  });

  it('returns the provided ID', () => {
    const { result } = renderHook(() => useId('my-custom-id'));

    expect(result.current).toBe('my-custom-id');
  });
});
