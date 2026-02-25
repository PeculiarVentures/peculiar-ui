import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import {
  act, renderHook, screen,
} from '../test-utils';
import { ToastProvider } from './toast_provider';
import { useToast } from './use_toast';

const DURATION = 5000;

const Provider = ({ children }: { children: React.ReactNode }) => (
  <ToastProvider maxToasts={2}>
    {children}
  </ToastProvider>
);

vi.useFakeTimers();

describe('<ToastProvider />', () => {
  it('should render toast', () => {
    const { result } = renderHook(useToast, {
      wrapper: Provider,
    });
    const { addToast } = result.current;

    act(() => addToast({
      message: 'Toast',
    }));

    expect(screen.queryByText('Toast')).toBeInTheDocument();
  });

  it('should unmount toast after expiration', () => {
    const { result } = renderHook(useToast, {
      wrapper: Provider,
    });
    const { addToast } = result.current;

    act(() => addToast({
      message: 'Toast', duration: DURATION,
    }));

    expect(screen.queryByText('Toast')).toBeInTheDocument();

    act(() => vi.advanceTimersByTime(DURATION));

    expect(screen.queryByText('Toast')).not.toBeInTheDocument();
  });

  it('should not render toast if toast with the same `id` is already in the state', () => {
    const { result } = renderHook(useToast, {
      wrapper: Provider,
    });
    const { addToast } = result.current;

    act(() => addToast({
      id: '0', message: 'Toast-0',
    }));
    act(() => addToast({
      id: '0', message: 'Toast-1',
    }));

    expect(screen.queryByText('Toast-1')).not.toBeInTheDocument();
  });

  it('should render the next toast in the queue after the first one expires', () => {
    const { result } = renderHook(useToast, {
      wrapper: Provider,
    });
    const { addToast } = result.current;

    act(() => addToast({
      message: 'Toast-0', duration: 10,
    }));
    act(() => addToast({
      message: 'Toast-1', duration: DURATION,
    }));
    act(() => addToast({
      message: 'Toast-2', duration: DURATION,
    }));

    expect(screen.queryAllByText(/^Toast/)).toHaveLength(2);

    act(() => vi.advanceTimersByTime(10));

    expect(screen.queryByText('Toast-1')).toBeInTheDocument();
    expect(screen.queryByText('Toast-2')).toBeInTheDocument();

    act(vi.runAllTimers);
  });

  it('should render maximum `maxToasts` toasts', () => {
    const { result } = renderHook(useToast, {
      wrapper: Provider,
    });
    const { addToast } = result.current;

    act(() => addToast({
      message: 'Toast-0',
    }));
    act(() => addToast({
      message: 'Toast-1',
    }));
    act(() => addToast({
      message: 'Toast-2',
    }));

    expect(screen.queryByText('Toast-0')).toBeInTheDocument();
    expect(screen.queryByText('Toast-1')).toBeInTheDocument();
    expect(screen.queryByText('Toast-2')).not.toBeInTheDocument();
  });

  it('should remove toast by id and render the next toast in the queue', () => {
    const { result } = renderHook(useToast, {
      wrapper: Provider,
    });
    const { addToast, removeToast } = result.current;

    act(() => addToast({
      id: '0', message: 'Toast-0',
    }));
    act(() => addToast({
      id: '1', message: 'Toast-1',
    }));
    act(() => addToast({
      id: '2', message: 'Toast-2',
    }));

    expect(screen.queryByText('Toast-0')).toBeInTheDocument();
    expect(screen.queryByText('Toast-1')).toBeInTheDocument();
    expect(screen.queryByText('Toast-2')).not.toBeInTheDocument();

    act(() => removeToast('0'));

    expect(screen.queryByText('Toast-0')).not.toBeInTheDocument();
    expect(screen.queryByText('Toast-1')).toBeInTheDocument();
    expect(screen.queryByText('Toast-2')).toBeInTheDocument();
  });

  it('should unmount and remove all toasts from queue', () => {
    const { result } = renderHook(useToast, {
      wrapper: Provider,
    });
    const { addToast, removeAllToasts } = result.current;

    for (let i = 0; i <= 5; i += 1) {
      act(() => addToast({
        message: `Toast-${i}`,
      }));
    }

    act(removeAllToasts);

    expect(screen.queryByText(/^Toast/)).not.toBeInTheDocument();
  });

  it('should return stable callback identities across state changes', () => {
    const { result } = renderHook(useToast, {
      wrapper: Provider,
    });
    const initialAddToast = result.current.addToast;
    const initialRemoveToast = result.current.removeToast;
    const initialRemoveAllToasts = result.current.removeAllToasts;

    act(() => {
      initialAddToast({
        message: 'Stable toast',
      });
    });

    // Verify state was updated
    expect(screen.queryByText('Stable toast')).toBeInTheDocument();

    // Verify callback identities remained the same
    expect(result.current.addToast).toBe(initialAddToast);
    expect(result.current.removeToast).toBe(initialRemoveToast);
    expect(result.current.removeAllToasts).toBe(initialRemoveAllToasts);
  });
});
