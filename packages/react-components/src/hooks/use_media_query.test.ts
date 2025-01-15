import { act, renderHook } from '../test-utils';
import { useMediaQuery } from './use_media_query';

const matchMediaInstances = new Map();

const createMatchMedia = (mediaQuery: string) => {
  const listeners: VoidFunction[] = [];

  return (query: string) => {
    let instance = matchMediaInstances.get(query)?.instance;

    if (!instance) {
      instance = {
        matches: query === mediaQuery,
        addListener: (listener: VoidFunction) => {
          listeners.push(listener);
        },
        removeListener: (listener: VoidFunction) => {
          const index = listeners.indexOf(listener);

          if (index > -1) {
            listeners.splice(index, 1);
          }
        },
      };

      matchMediaInstances.set(query, {
        instance,
        listeners,
      });
    }

    return instance;
  };
};

describe('useMediaQuery()', () => {
  const originalMatchMedia = window.matchMedia;
  const mediaQuery = '(max-width: 1024px)';

  beforeAll(() => {
    window.matchMedia = createMatchMedia('(max-width: 1024px)');
  });

  afterAll(() => {
    window.matchMedia = originalMatchMedia;
  });

  it('should return `false` if query is not matched', () => {
    const {
      result,
    } = renderHook(() => useMediaQuery('(max-width: 526px)'));

    expect(result.current).toBe(false);
  });

  it('should return `true` if query is matched', () => {
    const {
      result,
    } = renderHook(() => useMediaQuery(mediaQuery));

    expect(result.current).toBe(true);
  });

  it('should update update matches when query is changed', () => {
    const {
      result,
    } = renderHook(() => useMediaQuery(mediaQuery));

    expect(result.current).toBe(true);

    act(() => {
      matchMediaInstances.get(mediaQuery).instance.matches = false;
      matchMediaInstances.get(mediaQuery).listeners[0]();
    });

    expect(result.current).toBe(false);
  });
});
