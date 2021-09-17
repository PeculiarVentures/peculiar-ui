import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import { Popover } from '../Popover';
import { TextField } from '../TextField';
import { useControllableState } from '../hooks';
import { cx, css } from '../styles';

type ReasonType = ('auto' | 'mouse' | 'keyboard');
type DirectionType = ('next' | 'previous');
type DiffType = (number | 'reset' | 'start' | 'end');

type FilterOptionsType = <T>(
  options: ReadonlyArray<T>,
  value: string,
  getOptionLabel: (option: T) => string,
) => ReadonlyArray<T>;

export type SelectPickerProps<T> = {
  options: ReadonlyArray<T>;
  getOptionLabel: (option: T) => string;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: React.ReactNode;
  noOptionsText?: React.ReactNode;
  filterOptions?: FilterOptionsType;
  onChange?: (event: React.SyntheticEvent, value: T) => void;
  defaultValue?: T;
  value?: T;
};

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

const stylesInputSearch = () => css({
  label: 'InputSearch',
  padding: '10px',
});

const stylesPopper = () => css({
  label: 'Popper',
  width: 300,
});

const stylesListBox = () => css({
  label: 'ListBox',
  padding: 0,
  maxHeight: '40vh',
  overflowY: 'auto',
  margin: 0,
  listStyleType: 'none',
  position: 'relative',
});

const stylesOption = () => css({
  label: 'Option',
  '&[aria-selected="true"]': {
    backgroundColor: 'yellow',
  },
  '&[data-focused="true"]': {
    backgroundColor: 'red',
  },
});

export const SelectPicker: <T>(props: SelectPickerProps<T>) => JSX.Element = (props) => {
  const {
    options,
    getOptionLabel,
    disabled,
    loading,
    loadingText,
    noOptionsText,
    filterOptions = defaultFilterOptions,
    onChange,
    defaultValue,
    value: valueProp,
  } = props;

  const [open, setOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const rootRef = useRef(null);
  const listboxRef = React.useRef(null);
  const highlightedIndexRef = useRef(-1);

  const [value, setValue] = useControllableState({
    value: valueProp,
    defaultValue,
  });

  const filteredOptions = open
    ? filterOptions(options, searchValue, getOptionLabel)
    : [];

  const handleClose = () => {
    setOpen(false);
    setSearchValue('');
  };

  const handleRootClick = () => {
    setOpen(true);
  };

  const handleRootKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    event.stopPropagation();

    if (event.key === 'Enter') {
      setOpen(true);
    }
  };

  const selectNewValue = (event: React.SyntheticEvent, option: any) => {
    setValue(option);

    handleClose();

    if (onChange) {
      onChange(event, option);
    }
  };

  const handleOptionClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const index = Number(event.currentTarget.getAttribute('data-option-index'));

    selectNewValue(event, filteredOptions[index]);
  };

  function validOptionIndex(index: number, direction: DirectionType) {
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
  }

  const setHighlightedIndex = (index: number, reason: ReasonType = 'auto') => {
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

  const changeHighlightedIndex = (diff: DiffType, direction: DirectionType = 'next', reason: ReasonType = 'auto') => {
    if (!open) {
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

  const syncHighlightedIndex = useCallback(() => {
    if (!open) {
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
    open,
    searchValue,
  ]);

  const handleListboxRef = (node: HTMLUListElement) => {
    listboxRef.current = node;

    if (!node) {
      return;
    }

    syncHighlightedIndex();
  };

  const handleInputSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleInputSearchKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
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

          if (highlightedIndexRef.current !== -1 && open) {
            const option = filteredOptions[highlightedIndexRef.current];

            selectNewValue(event, option);
          }
          break;

        default:
      }
    }
  };

  useEffect(() => {
    syncHighlightedIndex();
  }, [syncHighlightedIndex]);

  const renderPopoverContent = () => {
    if (loading) {
      return loadingText;
    }

    if (!filteredOptions.length) {
      return noOptionsText;
    }

    return (
      <ul
        role="listbox"
        tabIndex={-1}
        ref={handleListboxRef}
        className={cx({
          [stylesListBox()]: true,
        })}
      >
        {filteredOptions.map((option, index) => {
          const optionLabel = getOptionLabel(option);
          const selected = option === value;

          return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <li
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              role="option"
              tabIndex={-1}
              onClick={handleOptionClick}
              aria-selected={selected}
              data-option-index={index}
              className={cx({
                [stylesOption()]: true,
              })}
            >
              {optionLabel}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      <TextField
        readOnly
        value={value ? getOptionLabel(value) : ''}
        onClick={handleRootClick}
        onKeyDown={handleRootKeyDown}
        disabled={disabled}
        ref={rootRef}
        inputProps={{
          autoComplete: 'off',
          autoCapitalize: 'none',
          spellCheck: 'false',
        }}
      />
      <Popover
        open={open}
        anchorEl={rootRef.current}
        onClose={handleClose}
        placement="bottom-start"
        className={stylesPopper()}
      >
        <div
          className={cx({
            [stylesInputSearch()]: true,
          })}
        >
          <TextField
            type="search"
            onChange={handleInputSearchChange}
            disabled={loading || !options.length}
            onKeyDown={handleInputSearchKeyDown}
            value={searchValue}
            placeholder="Search"
          />
        </div>
        {renderPopoverContent()}
      </Popover>
    </>
  );
};

// @ts-ignore
SelectPicker.defaultProps = {
  disabled: false,
  loading: false,
  loadingText: 'Loading...',
  noOptionsText: 'No options',
};
