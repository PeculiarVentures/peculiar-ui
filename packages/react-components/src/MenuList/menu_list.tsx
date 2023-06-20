import React from 'react';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';
import { css, cx } from '../styles';
import { useMergedRef, useEnhancedEffect } from '../hooks';
import { ownerDocument } from '../utils/owner_document';

function nextItem(list: HTMLUListElement, item: Element) {
  if (list === item) {
    return list.firstChild;
  }

  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }

  return null;
}

function previousItem(list: HTMLUListElement, item: Element) {
  if (list === item) {
    return list.firstChild;
  }

  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }

  return null;
}

function moveFocus(
  list: HTMLUListElement,
  currentFocus: Element,
  traversalFunction: Function,
) {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(list, currentFocus, false);

  while (nextFocus) {
    // Prevent infinite loop.
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return false;
      }
      wrappedOnce = true;
    }

    // Same logic as useAutocomplete.js
    const nextFocusDisabled = nextFocus.disabled || nextFocus.getAttribute('aria-disabled') === 'true';

    if (
      !nextFocus.hasAttribute('tabindex')
      || nextFocusDisabled
    ) {
      // Move to the next element.
      nextFocus = traversalFunction(list, nextFocus);
    } else {
      nextFocus.focus();

      return true;
    }
  }

  return false;
}

/**
 * Types.
 */
type MenuListOwnProps = {
  children: React.ReactElement[];
};

export interface MenuListTypeMap<P = {}, D extends React.ElementType = 'ul'> {
  props: P & MenuListOwnProps;
  defaultComponent: D;
}

export type MenuListProps<
  D extends React.ElementType = MenuListTypeMap['defaultComponent'],
> = OverrideProps<MenuListTypeMap<{}, D>, D> & {
  component?: D;
};
/**
 *
 */

/**
 * Styles.
 */
const stylesBase = () => css({
  label: 'MenuList',
  padding: 'var(--pv-size-base-2) 0px',
  outline: 'none',
  listStyle: 'none',
  margin: 0,
});
/**
 *
 */

export const MenuList = React.forwardRef<any, MenuListProps>((props, ref) => {
  const {
    children,
    className,
    component,
    ...other
  } = props;
  const rootRef = React.useRef<HTMLUListElement>(null);
  const multiRef = useMergedRef(rootRef, ref);
  const Component = component || 'ul';

  const handleKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    const list = rootRef.current;
    const { key } = event;
    const currentFocus = ownerDocument(list).activeElement;

    if (key === 'ArrowDown') {
      // Prevent scroll of the page
      event.preventDefault();
      event.stopPropagation();
      moveFocus(list, currentFocus, nextItem);
    } else if (key === 'ArrowUp') {
      event.preventDefault();
      event.stopPropagation();
      moveFocus(list, currentFocus, previousItem);
    }
  };

  useEnhancedEffect(() => {
    rootRef.current.focus();
  }, []);

  return (
    <Component
      ref={multiRef}
      role="menu"
      tabIndex={-1}
      className={cx({
        [stylesBase()]: true,
        [className]: !!className,
      })}
      onKeyDown={handleKeyDown}
      {...other}
    >
      {children}
    </Component>
  );
}) as OverridableComponent<MenuListTypeMap>;

MenuList.displayName = 'MenuList';
