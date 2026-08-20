import { ownerDocument } from '../utils/owner_document';
import { ownerWindow } from '../utils/owner_window';

export interface IManagedModalProps {
  disableScrollLock?: boolean;
}

/**
 * Identity token for an open modal. Compared by reference.
 */
export type TModalInstance = object;

interface IRestoreStyle {
  property: string;
  el: HTMLElement;
  value: string;
}

interface IContainerInfo {
  container: HTMLElement;
  modals: TModalInstance[];
  restore: null | (() => void);
}

function isOverflowing(container: Element): boolean {
  const doc = ownerDocument(container);

  if (container === doc.body || container === doc.documentElement) {
    const clientWidth = doc.documentElement.clientWidth;

    // Skip when the viewport cannot be measured (jsdom reports 0).
    if (clientWidth <= 0) {
      return false;
    }

    return ownerWindow(container).innerWidth > clientWidth;
  }

  return container.scrollHeight > container.clientHeight;
}

function getPaddingRight(element: Element): number {
  return parseFloat(ownerWindow(element).getComputedStyle(element).paddingRight) || 0;
}

function isDocumentElementScrollContainer(html: HTMLElement, win: Window): boolean {
  const overflowY = win.getComputedStyle(html).overflowY;

  return overflowY === 'scroll' || overflowY === 'auto' || overflowY === 'overlay';
}

/**
 * Pages that set `html { overflow-y: scroll | auto }` scroll on `<html>`, not `<body>`.
 * Shadow-root portals don't have a useful parent, so lock `body` instead.
 */
function getScrollContainer(container: HTMLElement): HTMLElement {
  if (container.parentNode instanceof DocumentFragment) {
    return ownerDocument(container).body;
  }

  const parent = container.parentElement;
  const containerWindow = ownerWindow(container);

  if (
    parent &&
    parent.nodeName === 'HTML' &&
    isDocumentElementScrollContainer(parent, containerWindow)
  ) {
    return parent;
  }

  return container;
}

/**
 * Applies the scroll lock and returns a restore function for the previous inline styles.
 *
 * `overflow: hidden` is set even when no scrollbar is visible (mobile keyboards can
 * still scroll). `padding-right` is added only when a scrollbar is present, so hiding
 * it does not shift the layout.
 */
function handleContainer(containerInfo: IContainerInfo, props: IManagedModalProps) {
  const restoreStyle: IRestoreStyle[] = [];
  const { container } = containerInfo;

  if (!props.disableScrollLock) {
    const scrollContainer = getScrollContainer(container);

    if (isOverflowing(scrollContainer)) {
      // Compute the size before applying overflow hidden to avoid any scroll jumps.
      const scrollbarSize = ownerWindow(scrollContainer).innerWidth - document.documentElement.clientWidth;

      restoreStyle.push({
        value: scrollContainer.style.paddingRight,
        property: 'padding-right',
        el: scrollContainer,
      });
      // Computed padding + scrollbar width: CSS padding is kept, only the extra gap is inline.
      scrollContainer.style.paddingRight = `${getPaddingRight(scrollContainer) + scrollbarSize}px`;
    }

    // Block the scroll even if no scrollbar is visible to account for mobile keyboard
    // screensize shrink.
    restoreStyle.push(
      {
        value: scrollContainer.style.overflow,
        property: 'overflow',
        el: scrollContainer,
      },
      {
        value: scrollContainer.style.overflowX,
        property: 'overflow-x',
        el: scrollContainer,
      },
      {
        value: scrollContainer.style.overflowY,
        property: 'overflow-y',
        el: scrollContainer,
      },
    );

    scrollContainer.style.overflow = 'hidden';
  }

  return () => {
    restoreStyle.forEach(({ value, el, property }) => {
      if (value) {
        el.style.setProperty(property, value);
      } else {
        el.style.removeProperty(property);
      }
    });

    const elements = new Set(restoreStyle.map((item) => item.el));

    elements.forEach((el) => {
      if (!el.style.cssText) {
        el.removeAttribute('style');
      }
    });
  };
}

/**
 * Tracks open modals per container and locks document scroll once,
 * restoring styles when the last modal is removed.
 * Inspired by MUI ModalManager.
 */
export class ModalManager {
  private containers: IContainerInfo[] = [];

  private modals: TModalInstance[] = [];

  add(modal: TModalInstance, container: HTMLElement): void {
    if (this.modals.indexOf(modal) !== -1) {
      return;
    }

    this.modals.push(modal);

    const containerInfo = this.containers.find((item) => item.container === container);

    if (containerInfo) {
      containerInfo.modals.push(modal);

      return;
    }

    this.containers.push({
      modals: [modal],
      container,
      restore: null,
    });
  }

  mount(modal: TModalInstance, props: IManagedModalProps): void {
    const containerInfo = this.containers.find((item) => item.modals.indexOf(modal) !== -1);

    // Already locked (or explicitly not locked) by the first modal in this container.
    if (!containerInfo || containerInfo.restore) {
      return;
    }

    containerInfo.restore = handleContainer(containerInfo, props);
  }

  remove(modal: TModalInstance): void {
    const modalIndex = this.modals.indexOf(modal);

    if (modalIndex === -1) {
      return;
    }

    const containerInfo = this.containers.find((item) => item.modals.indexOf(modal) !== -1);

    this.modals.splice(modalIndex, 1);

    if (!containerInfo) {
      return;
    }

    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);

    // If that was the last modal in a container, clean up the container.
    if (containerInfo.modals.length === 0) {
      // The modal might be closed before it had the chance to be mounted in the DOM.
      if (containerInfo.restore) {
        containerInfo.restore();
      }

      this.containers.splice(this.containers.indexOf(containerInfo), 1);
    }
  }
}

export const modalManager = new ModalManager();
