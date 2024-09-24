import { renderHook, fireEvent } from '../test-utils';
import { useImage } from './use_image';

describe('useImage()', () => {
  const fakeImagePath = 'fake_path_to_img.png';

  it('Return "loading" status while loading', () => {
    const { result } = renderHook(() => useImage(fakeImagePath));

    expect(result.current.status).toEqual('loading');
    expect(result.current.image).toBeInstanceOf(HTMLImageElement);
  });

  it('Return "loaded" status and call `onLoad` on successfully loaded', () => {
    const onErrorMock = jest.fn();
    const onLoadMock = jest.fn();

    const { result } = renderHook(() => useImage(
      fakeImagePath,
      {
        onError: onErrorMock,
        onLoad: onLoadMock,
      },
    ));

    fireEvent.load(result.current.image);

    expect(result.current.status).toEqual('loaded');
    expect(result.current.image).toBeInstanceOf(HTMLImageElement);
    expect(onErrorMock).not.toBeCalled();
    expect(onLoadMock).toBeCalled();
  });

  it('Change image on `src` changing', () => {
    const newImagePath = 'new_image_path.png';
    const { result, rerender } = renderHook(useImage, {
      initialProps: fakeImagePath,
    });

    fireEvent.load(result.current.image);

    expect(result.current.image.src).toContain(fakeImagePath);

    rerender(newImagePath);

    expect(result.current.image.src).toContain(newImagePath);
  });

  it('Return "failed" status and call `onError` on loading error', () => {
    const onErrorMock = jest.fn();
    const onLoadMock = jest.fn();

    const { result } = renderHook(() => useImage(
      './fake_path_to_img.png',
      {
        onError: onErrorMock,
        onLoad: onLoadMock,
      },
    ));

    fireEvent.error(result.current.image);

    expect(result.current.status).toEqual('failed');
    expect(result.current.image).toBeUndefined();
    expect(onErrorMock).toBeCalled();
    expect(onLoadMock).not.toBeCalled();
  });
});
