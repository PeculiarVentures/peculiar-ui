import { renderHook } from '../test-utils';
import { useId } from './use_id';

describe('useId()', () => {
  it('should generate 21 characters long ID', () => {
    const { result } = renderHook(useId);

    expect(result.current.length).toBe(21);
  });

  it('should generate unique IDs', () => {
    const { result: resultA } = renderHook(useId);
    const { result: resultB } = renderHook(useId);

    expect(resultA.current).not.toEqual(resultB.current);
  });

  it('should return the provided ID', () => {
    const { result } = renderHook(() => useId('my-custom-id'));

    expect(result.current).toBe('my-custom-id');
  });
});
