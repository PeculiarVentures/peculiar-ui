import { describe, it, expect, afterEach, beforeEach } from 'vitest';
import { renderWithWrapper as render } from '../test-utils';
import { Modal } from './index';
import { ModalManager } from './modal_manager';

describe('<Modal />', () => {
  afterEach(() => {
    document.body.style.cssText = '';
    document.documentElement.style.cssText = '';
  });

  it('should render with default styles', () => {
    const { baseElement } = render(
      <Modal open={false}>
        <div>Inside</div>
      </Modal>,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('should render with default open styles', () => {
    const { baseElement } = render(
      <Modal open>
        <div>Inside</div>
      </Modal>,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('should pass className', () => {
    const { baseElement } = render(
      <Modal
        open
        className="my-class-name"
      >
        <div>Inside</div>
      </Modal>,
    );

    expect(baseElement).toMatchSnapshot();
  });

  describe('scroll lock', () => {
    it('should set overflow hidden on body when open', () => {
      render(
        <Modal open>
          <div>Inside</div>
        </Modal>,
      );

      expect(document.body.style.overflow).toBe('hidden');
    });

    it('should restore overflow when closed', () => {
      const { rerender } = render(
        <Modal open>
          <div>Inside</div>
        </Modal>,
      );

      expect(document.body.style.overflow).toBe('hidden');

      rerender(
        <Modal open={false}>
          <div>Inside</div>
        </Modal>,
      );

      expect(document.body.style.overflow).toBe('');
    });

    it('should restore a previously empty inline overflow style', () => {
      document.body.style.removeProperty('overflow');

      const { unmount } = render(
        <Modal open>
          <div>Inside</div>
        </Modal>,
      );

      expect(document.body.style.overflow).toBe('hidden');

      unmount();

      expect(document.body.style.overflow).toBe('');
    });

    it('should restore a previously set inline overflow style', () => {
      document.body.style.overflow = 'scroll';

      const { unmount } = render(
        <Modal open>
          <div>Inside</div>
        </Modal>,
      );

      expect(document.body.style.overflow).toBe('hidden');

      unmount();

      expect(document.body.style.overflow).toBe('scroll');
    });

    it('should restore styles when unmounted while still open', () => {
      const { unmount } = render(
        <Modal open>
          <div>Inside</div>
        </Modal>,
      );

      expect(document.body.style.overflow).toBe('hidden');

      unmount();

      expect(document.body.style.overflow).toBe('');
    });

    it('should keep the lock while nested modals are open and restore after the last closes', () => {
      const { rerender } = render(
        <>
          <Modal open>
            <div>First</div>
          </Modal>
          <Modal open>
            <div>Second</div>
          </Modal>
        </>,
      );

      expect(document.body.style.overflow).toBe('hidden');

      rerender(
        <>
          <Modal open>
            <div>First</div>
          </Modal>
          <Modal open={false}>
            <div>Second</div>
          </Modal>
        </>,
      );

      expect(document.body.style.overflow).toBe('hidden');

      rerender(
        <>
          <Modal open={false}>
            <div>First</div>
          </Modal>
          <Modal open={false}>
            <div>Second</div>
          </Modal>
        </>,
      );

      expect(document.body.style.overflow).toBe('');
    });

    it('should not lock overflow when disableScrollLock is true', () => {
      document.body.style.overflow = 'auto';

      render(
        <Modal
          open
          disableScrollLock
        >
          <div>Inside</div>
        </Modal>,
      );

      expect(document.body.style.overflow).toBe('auto');
    });
  });
});

describe('ModalManager', () => {
  let originalInnerWidth: number;

  beforeEach(() => {
    originalInnerWidth = window.innerWidth;
  });

  afterEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      writable: true,
      value: originalInnerWidth,
    });
    Reflect.deleteProperty(document.documentElement, 'clientWidth');
    document.body.style.cssText = '';
    document.documentElement.style.cssText = '';
    document.body.removeAttribute('style');
    document.documentElement.removeAttribute('style');
  });

  it('should add padding-right equal to the scrollbar size when the container overflows', () => {
    const manager = new ModalManager();
    const modal = {};
    const scrollbarSize = 15;
    const clientWidth = 1000;

    Object.defineProperty(document.documentElement, 'clientWidth', {
      configurable: true,
      get: () => clientWidth,
    });
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      writable: true,
      value: clientWidth + scrollbarSize,
    });

    manager.add(modal, document.body);
    manager.mount(modal, {});

    expect(document.body.style.overflow).toBe('hidden');
    expect(document.body.style.paddingRight).toBe(`${scrollbarSize}px`);

    manager.remove(modal);

    expect(document.body.style.overflow).toBe('');
    expect(document.body.style.paddingRight).toBe('');
  });

  it('should add scrollbar size on top of existing padding-right', () => {
    const manager = new ModalManager();
    const modal = {};
    const scrollbarSize = 15;
    const clientWidth = 1000;
    const existingPadding = 10;

    document.body.style.paddingRight = `${existingPadding}px`;

    Object.defineProperty(document.documentElement, 'clientWidth', {
      configurable: true,
      get: () => clientWidth,
    });
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      writable: true,
      value: clientWidth + scrollbarSize,
    });

    manager.add(modal, document.body);
    manager.mount(modal, {});

    expect(document.body.style.paddingRight).toBe(`${existingPadding + scrollbarSize}px`);

    manager.remove(modal);

    expect(document.body.style.paddingRight).toBe(`${existingPadding}px`);
  });

  it.each(['scroll', 'auto'] as const)('should lock html when overflow-y is %s', (overflowY) => {
    const manager = new ModalManager();
    const modal = {};

    document.documentElement.style.overflowY = overflowY;

    manager.add(modal, document.body);
    manager.mount(modal, {});

    expect(document.documentElement.style.overflow).toBe('hidden');
    expect(document.body.style.overflow).toBe('');

    manager.remove(modal);

    expect(document.documentElement.style.overflow).toBe('');
    expect(document.documentElement.style.overflowY).toBe(overflowY);
  });

  it('should not apply a second lock for nested callers', () => {
    const manager = new ModalManager();
    const first = {};
    const second = {};

    document.body.style.overflow = 'auto';

    manager.add(first, document.body);
    manager.mount(first, {});
    manager.add(second, document.body);
    manager.mount(second, {});

    expect(document.body.style.overflow).toBe('hidden');

    manager.remove(second);

    expect(document.body.style.overflow).toBe('hidden');

    manager.remove(first);

    expect(document.body.style.overflow).toBe('auto');
  });

  it('should keep the lock when a disableScrollLock modal mounts after a locking modal', () => {
    const manager = new ModalManager();
    const first = {};
    const second = {};

    document.body.style.overflow = 'auto';

    manager.add(first, document.body);
    manager.mount(first, {});
    manager.add(second, document.body);
    manager.mount(second, { disableScrollLock: true });

    expect(document.body.style.overflow).toBe('hidden');

    manager.remove(second);

    expect(document.body.style.overflow).toBe('hidden');

    manager.remove(first);

    expect(document.body.style.overflow).toBe('auto');
  });

  it('should ignore a second remove of the same modal while another lock is held', () => {
    const manager = new ModalManager();
    const first = {};
    const second = {};

    document.body.style.overflow = 'auto';

    manager.add(first, document.body);
    manager.mount(first, {});
    manager.add(second, document.body);
    manager.mount(second, {});

    manager.remove(first);
    manager.remove(first);

    expect(document.body.style.overflow).toBe('hidden');

    manager.remove(second);

    expect(document.body.style.overflow).toBe('auto');
  });
});
