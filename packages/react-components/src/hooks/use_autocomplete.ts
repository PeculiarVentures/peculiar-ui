import React from 'react';
import { useId } from './use_id';
import { useControllableState } from './use_controllable';
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

export type UseAutocompletePropsType<T> = {
  /**
   * Array of options.
   */
  options: ReadonlyArray<T>;
  /**
   * Used to determine the string value for a given option. It's used to fill the input.
   */
  getOptionLabel?: (option: T) => string;
  /**
   * A filter function that determines the options that are eligible.
   */
  filterOptions?: FilterOptionsType;
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue?: T;
  /**
   * The value of the select.
   */
  value?: T;
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
    value: T,
  ) => void;
  /**
   * Callback fired when the input value changes.
   */
  onInputChange?: (
    event: React.SyntheticEvent,
    value: string,
  ) => void;
};

export type UseAutocompleteType = <T>(props: UseAutocompletePropsType<T>) => {
  groupedOptions: T[];
  value: T;
  getOptionProps: (option: T, index: number) => React.HTMLAttributes<HTMLLIElement>;
  getListboxProps: () => React.HTMLAttributes<HTMLUListElement>;
  getRootProps: () => React.HTMLAttributes<HTMLDivElement>;
  getInputProps: () => React.HTMLAttributes<HTMLInputElement>;
  getPopoverProps: () => Pick<Required<PopoverProps>, 'open' | 'anchorEl' | 'onClose' | 'onKeyDown'>
  popupOpen: boolean;
  id: string;
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

export const useAutocomplete: UseAutocompleteType = (props) => {
  const {
    options,
    defaultValue,
    value: valueProp,
    // @ts-ignore
    getOptionLabel = (option) => option.label ?? option,
    filterOptions = defaultFilterOptions,
    onOpen,
    onClose,
    onInputChange,
    onChange,
  } = props;

  const id = useId();
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

  const setHighlightedIndex = (index: number, reason: AutocompleteHighlightChangeReason = 'auto') => {
    highlightedIndexRef.current = index;

    const listboxNode = listboxRef.current;

    if (!listboxNode) {
      return;
    }

    const prevOptionNode = listboxNode.querySelector('[role="option"][data-focused="true"]');

    if (prevOptionNode) {
      prevOptionNode.setAttribute('data-focused', 'false');
    }

    // No results.
    if (!listboxNode) {
      return;
    }

    if (index === -1) {
      listboxNode.scrollTop = 0;
      return;
    }

    const nextOptionNode = listboxNode.querySelector(`[data-option-index="${index}"]`);

    if (!nextOptionNode) {
      return;
    }

    nextOptionNode.setAttribute('data-focused', 'true');

    // Scroll active descendant into view.
    if (listboxNode.scrollHeight > listboxNode.clientHeight && reason !== 'mouse') {
      const scrollBottom = listboxNode.clientHeight + listboxNode.scrollTop;
      const elementBottom = nextOptionNode.offsetTop + nextOptionNode.offsetHeight;

      if (elementBottom > scrollBottom) {
        listboxNode.scrollTop = elementBottom - listboxNode.clientHeight;
      } else if (
        nextOptionNode.offsetTop - nextOptionNode.offsetHeight * 0 < listboxNode.scrollTop
      ) {
        listboxNode.scrollTop = nextOptionNode.offsetTop - nextOptionNode.offsetHeight * 0;
      }
    }
  };

  const changeHighlightedIndex = (
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
  };

  const syncHighlightedIndex = React.useCallback(() => {
    if (!popupOpen) {
      return;
    }

    if (filteredOptions.length === 0 || value == null) {
      changeHighlightedIndex('reset');

      return;
    }

    if (!listboxRef.current) {
      return;
    }

    if (value != null) {
      const optionIndex = filteredOptions.findIndex((optionItem) => optionItem === value);

      if (optionIndex === -1) {
        changeHighlightedIndex('reset');
      } else {
        setHighlightedIndex(optionIndex);
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
    value,
    popupOpen,
    searchValue,
  ]);

  const handleListboxRef = (node: HTMLUListElement) => {
    listboxRef.current = node;

    if (!node) {
      return;
    }

    syncHighlightedIndex();
  };

  React.useEffect(() => {
    syncHighlightedIndex();
  }, [syncHighlightedIndex]);

  const handleOpen = (event: React.SyntheticEvent) => {
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

  const selectNewValue = (event: React.SyntheticEvent, option: any) => {
    setValue(option);
    handleClose(event);

    if (onChange) {
      onChange(event, option);
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

  return {
    groupedOptions: filteredOptions,
    getRootProps: () => ({
      onClick: handleClick,
      ref: anchorEl,
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
      spellCheck: 'false',
      onChange: handleInputChange,
    }),
    getOptionProps: (option, index) => {
      const selected = option === value;

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
    popupOpen,
    value,
    id,
  };
};
