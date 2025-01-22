import { act, renderHook } from '../test-utils';
import { useControllableState } from './use_controllable';

describe('useControllableState()', () => {
  it('should set default value and change state', () => {
    const { result, rerender } = renderHook(() => useControllableState({ defaultValue: 'default_value' }));

    expect(result.current[0]).toEqual('default_value');

    act(() => result.current[1]('new_value'));
    rerender();

    expect(result.current[0]).toEqual('new_value');
  });

  it('should call `onChange` on state update is `onChange` is passed', () => {
    const onChangeMock = jest.fn();
    const { result } = renderHook(() => useControllableState({ onChange: onChangeMock }));

    act(() => result.current[1]('new_value'));

    expect(onChangeMock).toBeCalled();
  });

  it('should do not update state if `shouldUpdate` is passed but not resolved', () => {
    const shouldUpdateMock = jest.fn().mockImplementationOnce(() => false);
    const { result } = renderHook(() => useControllableState({ shouldUpdate: shouldUpdateMock }));

    act(() => result.current[1]('new_value'));

    expect(result.current[0]).toBeUndefined();
  });

  it('should update state if `shouldUpdate` is passed and resolved', () => {
    const shouldUpdateMock = jest.fn().mockImplementationOnce(() => true);
    const { result } = renderHook(() => useControllableState({ shouldUpdate: shouldUpdateMock }));

    act(() => result.current[1]('new_value'));

    expect(result.current[0]).toEqual('new_value');
  });
});
