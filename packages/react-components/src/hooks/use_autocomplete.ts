import React from 'react';
import { useId } from './use_id';
import { useControllableState } from './use_controllable';
import { useEventCallback } from './use_event_callback';
import type { PopoverProps } from '../Popover';

/**
 * Types.
 */
export type AutocompleteHighlightChangeReason = ('auto' | 'mouse' | 'keyboard');
export type AutocompleteHighlightChangeDirectionType = ('next' | 'previous');
export type AutocompleteHighlightChangeDiffType = (number | 'reset' | 'start' | 'end');

export type FilterOptionsType = <T>(
  options: ReadonlyArray<T>,
  value: string,
  getOptionLabel: (option: T) => string,
) => T[];

export type AutocompleteValue<T, Multiple> = Multiple extends
| undefined
| false
  ? T
  : T[];

export type UseAutocompleteProps<T, Multiple extends boolean | undefined> = {
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide an id it will fall back to a randomly generated one.
   */
  id?: string;
  /**
   * Array of options.
   */
  options: ReadonlyArray<T>;
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue?: AutocompleteValue<T, Multiple>;
  /**
   * The value of the select.
   */
  value?: AutocompleteValue<T, Multiple>;
  /**
   * If `true`, the popup won't close when a value is selected.
   */
  disableCloseOnSelect?: boolean;
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple?: Multiple;
  /**
   * Used to determine the string value for a given option. It's used to fill the input.
   */
  getOptionLabel?: (option: T) => string;
  /**
  * A filter function that determines the options that are eligible.
  */
  filterOptions?: FilterOptionsType;
  /**
   * Callback fired when the popup requests to be closed.
   */
  onClose?: (event: React.SyntheticEvent) => void;
  /**
   * Callback fired when the popup requests to be opened.
   */
  onOpen?: (event: React.SyntheticEvent) => void;
  /**
   * Callback fired when the value changes.
   */
  onChange?: (
    event: React.SyntheticEvent,
    value: AutocompleteValue<T, Multiple>,
  ) => void;
  /**
   * Callback fired when the input value changes.
   */
  onInputChange?: (
    event: React.SyntheticEvent,
    value: string,
  ) => void;
};

/**
 *
 */

const defaultFilterOptions: FilterOptionsType = (options, value, getOptionLabel) => {
  if (!options || !options.length) {
    return [];
  }

  return options.filter((option) => {
    const labelValue = getOptionLabel(option).trim().toLowerCase();
    const searchValue = value.trim().toLowerCase();

    return labelValue.includes(searchValue);
  });
};

// eslint-disable-next-line max-len
export function useAutocomplete<T, Multiple extends boolean | undefined>(props: UseAutocompleteProps<T, Multiple>): {
  groupedOptions: T[];
  value: AutocompleteValue<T, Multiple>;
  popupOpen: boolean;
  id: string;
  getOptionProps: (option: T, index: number) => React.HTMLAttributes<HTMLLIElement>;
  getListboxProps: () => React.HTMLAttributes<HTMLUListElement>;
  getRootProps: () => React.HTMLAttributes<HTMLDivElement>;
  getInputProps: () => React.HTMLAttributes<HTMLInputElement>;
  getPopoverProps: () => Pick<Required<PopoverProps>, 'open' | 'anchorEl' | 'onClose' | 'onKeyDown'>;
  getTagProps: (option: T, index: number) => {
    key: number;
    'data-tag-index': number;
    tabIndex: -1;
    onDelete: (event: React.SyntheticEvent) => void;
  };
  getOptionLabel?: (option: T) => string;
} {
  const {
    id: idProp,
    options,
    defaultValue = props.multiple ? [] as AutocompleteValue<T, Multiple> : null,
    value: valueProp,
    disableCloseOnSelect = false,
    multiple = false,
    // @ts-ignore
    getOptionLabel = (option) => option.label ?? option,
    filterOptions = defaultFilterOptions,
    onOpen,
    onClose,
    onInputChange,
    onChange,
  } = props;

  const id = useId(idProp);
  const anchorEl = React.useRef(null);
  const listboxRef = React.useRef(null);
  const highlightedIndexRef = React.useRef(-1);

  const [popupOpen, setPopupOpen] = React.useState<boolean>(false);
  const [searchValue, setSearchValue] = React.useState<string>('');
  const [value, setValue] = useControllableState({
    value: valueProp,
    defaultValue,
  });

  const filteredOptions = popupOpen
    ? filterOptions(options, searchValue, getOptionLabel)
    : [];

  const validOptionIndex = (index: number, direction: AutocompleteHighlightChangeDirectionType) => {
    if (!listboxRef.current || index === -1) {
      return -1;
    }

    let nextFocus = index;

    while (true) {
      // Out of range
      if (
        (direction === 'next' && nextFocus === filteredOptions.length)
        || (direction === 'previous' && nextFocus === -1)
      ) {
        return -1;
      }

      const option = listboxRef.current.querySelector(`[data-option-index="${nextFocus}"]`);

      if ((option && !option.hasAttribute('tabindex'))) {
        // Move to the next element.
        nextFocus += direction === 'next' ? 1 : -1;
      } else {
        return nextFocus;
      }
    }
  };

  const setHighlightedIndex = useEventCallback((index: number, reason: AutocompleteHighlightChangeReason = 'auto') => {
    highlightedIndexRef.current = index;

    const listboxNode = listboxRef.current;

    if (!listboxNode) {
      return;
    }

    const prevOptionNode = listboxNode.querySelector('[role="option"][data-focused="true"]');

    if (prevOptionNode) {
      prevOptionNode.setAttribute('data-focused', 'false');
    }

    if (index === -1) {
      listboxNode.scrollTop = 0;
      return;
    }

    const option = listboxNode.querySelector(`[data-option-index="${index}"]`);

    if (!option) {
      return;
    }

    option.setAttribute('data-focused', 'true');

    // Scroll active descendant into view.
    // Logic copied from https://www.w3.org/TR/wai-aria-practices/examples/listbox/js/listbox.js
    //
    // Consider this API instead once it has a better browser support:
    // .scrollIntoView({ scrollMode: 'if-needed', block: 'nearest' });
    if (listboxNode.scrollHeight > listboxNode.clientHeight && reason !== 'mouse') {
      const element = option;

      const scrollBottom = listboxNode.clientHeight + listboxNode.scrollTop;
      const elementBottom = element.offsetTop + element.offsetHeight;

      if (elementBottom > scrollBottom) {
        listboxNode.scrollTop = elementBottom - listboxNode.clientHeight;
      } else if (
        element.offsetTop - element.offsetHeight * 0 < listboxNode.scrollTop
      ) {
        listboxNode.scrollTop = element.offsetTop - element.offsetHeight * 0;
      }
    }
  });

  const changeHighlightedIndex = useEventCallback((
    diff: AutocompleteHighlightChangeDiffType,
    direction: AutocompleteHighlightChangeDirectionType = 'next',
    reason: AutocompleteHighlightChangeReason = 'auto',
  ) => {
    if (!popupOpen) {
      return;
    }

    const getNextIndex = () => {
      const maxIndex = filteredOptions.length - 1;

      if (diff === 'reset') {
        return -1;
      }

      if (diff === 'start') {
        return 0;
      }

      if (diff === 'end') {
        return maxIndex;
      }

      const newIndex = highlightedIndexRef.current + diff;

      if (newIndex < 0) {
        if (newIndex === -1) {
          return -1;
        }

        if ((highlightedIndexRef.current !== -1) || Math.abs(diff) > 1) {
          return 0;
        }

        return maxIndex;
      }

      if (newIndex > maxIndex) {
        if (newIndex === maxIndex + 1) {
          return -1;
        }

        if (Math.abs(diff) > 1) {
          return maxIndex;
        }

        return 0;
      }

      return newIndex;
    };

    const nextIndex = validOptionIndex(getNextIndex(), direction);

    setHighlightedIndex(nextIndex, reason);
  });

  const syncHighlightedIndex = React.useCallback(() => {
    if (!popupOpen) {
      return;
    }

    const valueItem = Array.isArray(value) ? value[0] : value;

    if (filteredOptions.length === 0 || valueItem == null) {
      changeHighlightedIndex('reset');

      return;
    }

    if (!listboxRef.current) {
      return;
    }

    if (valueItem != null) {
      const itemIndex = filteredOptions.findIndex((o) => o === valueItem);

      if (itemIndex === -1) {
        changeHighlightedIndex('reset');
      } else {
        setHighlightedIndex(itemIndex);
      }

      return;
    }

    // Prevent the highlighted index to leak outside the boundaries.
    if (highlightedIndexRef.current >= filteredOptions.length - 1) {
      setHighlightedIndex(filteredOptions.length - 1);

      return;
    }

    setHighlightedIndex(highlightedIndexRef.current);
  }, [
    filteredOptions.length,
    multiple ? false : value,
    changeHighlightedIndex,
    setHighlightedIndex,
    popupOpen,
    searchValue,
    multiple,
  ]);

  const handleListboxRef = useEventCallback((node: HTMLUListElement) => {
    listboxRef.current = node;

    if (!node) {
      return;
    }

    syncHighlightedIndex();
  });

  React.useEffect(() => {
    syncHighlightedIndex();
  }, [syncHighlightedIndex]);

  const handleOpen = (event: React.SyntheticEvent) => {
    if (popupOpen) {
      return;
    }

    setPopupOpen(true);

    if (onOpen) {
      onOpen(event);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    handleOpen(event);
  };

  const handleClose = (event: React.SyntheticEvent) => {
    if (!popupOpen) {
      return;
    }

    setPopupOpen(false);
    setSearchValue('');

    if (onClose) {
      onClose(event);
    }
  };

  const selectNewValue = (event: React.SyntheticEvent, option: T) => {
    let newValue: T | T[] = option;

    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];

      const itemIndex = newValue.findIndex((v) => option === v);

      if (itemIndex === -1) {
        newValue.push(option);
      } else {
        newValue.splice(itemIndex, 1);
      }
    }

    setValue(newValue as AutocompleteValue<T, Multiple>);

    if (!disableCloseOnSelect) {
      handleClose(event);
    }

    if (onChange) {
      onChange(event, newValue as AutocompleteValue<T, Multiple>);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: valueInput } = event.target;

    setSearchValue(valueInput);

    if (onInputChange) {
      onInputChange(event, valueInput);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // Wait until IME is settled.
    if (event.which !== 229) {
      switch (event.key) {
        case 'ArrowDown':
          // Prevent cursor move
          event.preventDefault();

          changeHighlightedIndex(1, 'next', 'keyboard');
          break;

        case 'ArrowUp':
          // Prevent cursor move
          event.preventDefault();

          changeHighlightedIndex(-1, 'previous', 'keyboard');
          break;

        case 'Enter':
          // Avoid early form validation, let the end-users continue filling the form.
          event.preventDefault();

          if (highlightedIndexRef.current !== -1 && popupOpen) {
            const option = filteredOptions[highlightedIndexRef.current];

            selectNewValue(event, option);
          }
          break;

        default:
      }
    }
  };

  const handleOptionClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const index = Number(event.currentTarget.getAttribute('data-option-index'));
    const option = filteredOptions[index];

    selectNewValue(event, option);
  };

  const handleTagDelete = (option: T) => (event: React.SyntheticEvent) => {
    selectNewValue(event, option);
  };

  return {
    groupedOptions: filteredOptions,
    getRootProps: () => ({
      ref: anchorEl,
      'aria-expanded': popupOpen,
      onClick: handleClick,
    }),
    getListboxProps: () => ({
      ref: handleListboxRef,
      role: 'listbox',
      tabIndex: -1,
      id: `${id}-listbox`,
    }),
    getInputProps: () => ({
      type: 'search',
      value: searchValue,
      autoComplete: 'off',
      autoCapitalize: 'none',
      autoCorrect: 'false',
      spellCheck: 'false',
      onChange: handleInputChange,
    }),
    getOptionProps: (option, index) => {
      const selected = (Array.isArray(value) ? value : [value]).some(
        (v) => v != null && option === v,
      );

      return {
        key: getOptionLabel(option),
        tabIndex: -1,
        role: 'option',
        id: `${id}-option-${index}`,
        'data-option-index': index,
        'aria-selected': selected,
        onClick: handleOptionClick,
      };
    },
    getPopoverProps: () => ({
      open: popupOpen,
      anchorEl: anchorEl.current,
      onClose: handleClose,
      onKeyDown: handleKeyDown,
    }),
    getTagProps: (option, index) => ({
      key: index,
      'data-tag-index': index,
      tabIndex: -1,
      onDelete: handleTagDelete(option),
    }),
    getOptionLabel,
    popupOpen,
    value,
    id,
  };
}
