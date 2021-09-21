import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import { Popover } from '../Popover';
import { TextField } from '../TextField';
import { Typography } from '../Typography';
import { Box } from '../Box';
import { ArrowDropDownIcon } from '../icons';
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
  /**
   * Array of options.
   */
  options: ReadonlyArray<T>;
  /**
   * Used to determine the string value for a given option. It's used to fill the input.
   */
  getOptionLabel: (option: T) => string;
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * If `true`, the component is in a loading state.
   */
  loading?: boolean;
  /**
   * Text to display when in a loading state.
   */
  loadingText?: React.ReactNode;
  /**
   * Text to display when there are no options.
   */
  noOptionsText?: React.ReactNode;
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue?: T;
  /**
   * The value of the select.
   */
  value?: T;
  /**
   * The id of the `input` element.
   */
  id?: string;
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder?: string;
  /**
   * The short hint displayed in the search `input` before the user enters a value.
   */
  placeholderSearch?: string;
  /**
   * Name attribute of the `input` element.
   */
  name?: string;
  /**
   * If `true`, the `input` element is required.
   */
  required?: boolean;
  /**
   * The size of the input.
   */
  size?: (
    'small' |
    'medium' |
    'large'
  );
  /**
   * A filter function that determines the options that are eligible.
   */
  filterOptions?: FilterOptionsType;
  /**
   * Callback fired when the popup requests to be opened.
   */
  onOpen?: () => void;
  /**
   * Callback fired when the value changes.
   */
  onChange?: (event: React.SyntheticEvent, value: T) => void;
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

/**
 * Styles.
 */
const stylesRoot = () => css({
  label: 'SelectPicker-root',
  position: 'relative',
});

const stylesInput = () => css({
  label: 'SelectPicker-input',
  outline: 'none',
  boxSizing: 'border-box',
  width: '100%',
  borderRadius: '4px',
  padding: '0 calc(var(--pv-size-base-2) + 24px) 0 var(--pv-size-base-2)',
  backgroundColor: 'var(--pv-color-gray-1)',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'var(--pv-color-gray-8)',
  transition: 'background-color 200ms, color 200ms, border-color 200ms',
  appearance: 'none',
  userSelect: 'none',
  '&:hover': {
    backgroundColor: 'var(--pv-color-gray-3)',
    borderColor: 'var(--pv-color-gray-7)',
  },
  '&:focus': {
    backgroundColor: 'var(--pv-color-secondary-tint-5)',
    borderColor: 'var(--pv-color-secondary-tint-3)',
  },
  '&[aria-disabled="true"]': {
    cursor: 'not-allowed',
    backgroundColor: 'var(--pv-color-gray-1)',
    borderColor: 'var(--pv-color-gray-5)',
    color: 'var(--pv-color-gray-7)',
  },
});

const stylesInputSizeSmall = () => css({
  label: 'small',
  height: 'var(--pv-size-base-6)',
  lineHeight: 'var(--pv-size-base-6)',
});

const stylesInputSizeMedium = () => css({
  label: 'medium',
  height: 'var(--pv-size-base-7)',
  lineHeight: 'var(--pv-size-base-7)',
});

const stylesInputSizeLarge = () => css({
  label: 'large',
  height: 'var(--pv-size-base-8)',
  lineHeight: 'var(--pv-size-base-8)',
});

const stylesNativeInput = () => css({
  label: 'SelectPicker-native-input',
  bottom: 0,
  left: 0,
  height: '100%',
  position: 'absolute',
  opacity: 0,
  pointerEvents: 'none',
  width: '100%',
  boxSizing: 'border-box',
});

const stylesInputSearch = () => css({
  label: 'SelectPicker-input-search',
  padding: 'var(--pv-size-base-2)',
});

const stylesPopper = () => css({
  label: 'SelectPicker-popper',
  width: 300,
});

const stylesListBox = () => css({
  label: 'SelectPicker-listbox',
  padding: 0,
  maxHeight: '40vh',
  overflowY: 'auto',
  margin: 0,
  listStyleType: 'none',
  position: 'relative',
});

const stylesListBoxState = () => css({
  label: 'SelectPicker-listbox-state',
  padding: 'var(--pv-size-base-3) var(--pv-size-base-2)',
});

const stylesOption = () => css({
  label: 'SelectPicker-option',
  padding: '0px var(--pv-size-base-2)',
  fontFamily: 'inherit',
  outline: 'none',
  width: '100%',
  height: 'var(--pv-size-base-7)',
  textDecoration: 'none',
  userSelect: 'none',
  cursor: 'pointer',
  transition: 'background-color 200ms',
  backgroundColor: 'transparent',
  border: 'none',
  color: 'var(--pv-color-black)',
  boxSizing: 'border-box',
  display: 'flex',
  textAlign: 'left',
  alignItems: 'center',
  justifyContent: 'flex-start',
  '&:hover': {
    backgroundColor: 'var(--pv-color-gray-3)',
  },
  '&[data-focused="true"]': {
    backgroundColor: 'var(--pv-color-gray-4)',
  },
  '&[aria-selected="true"]': {
    backgroundColor: 'var(--pv-color-gray-5)',
  },
});

const stylesInputArrowIcon = () => css({
  label: 'Select-arrow-icon',
  position: 'absolute',
  right: '0px',
  top: 'calc(50% - 12px)',
  pointerEvents: 'none',
  margin: '0px var(--pv-size-base)',
  color: 'var(--pv-color-gray-10)',
});

const stylesInputArrowIconDisabled = () => css({
  label: 'disabled',
  color: 'var(--pv-color-gray-7)',
});
/**
 *
 */

export const SelectPicker: <T>(props: SelectPickerProps<T>) => JSX.Element = (props) => {
  const {
    options,
    getOptionLabel,
    disabled,
    loading,
    loadingText,
    noOptionsText,
    defaultValue,
    value: valueProp,
    id,
    placeholder,
    placeholderSearch,
    name,
    required,
    size,
    filterOptions = defaultFilterOptions,
    onChange,
    onOpen,
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

  const handleInputClick = () => {
    if (disabled) {
      return;
    }

    setOpen(true);

    if (onOpen) {
      onOpen();
    }
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) {
      return;
    }

    if (event.key === 'Enter') {
      // Avoid early form validation, let the end-users continue filling the form.
      event.preventDefault();

      setOpen(true);

      if (onOpen) {
        onOpen();
      }
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

  const renderListBoxState = (text: React.ReactNode) => (
    <div
      className={cx(stylesListBoxState())}
    >
      {typeof text === 'string' ? (
        <Typography
          variant="b2"
          color="gray-10"
        >
          {text}
        </Typography>
      ) : text}
    </div>
  );

  const renderPopoverContent = () => {
    if (loading) {
      return renderListBoxState(loadingText);
    }

    if (!filteredOptions.length) {
      return renderListBoxState(noOptionsText);
    }

    return (
      <ul
        role="listbox"
        tabIndex={-1}
        ref={handleListboxRef}
        className={cx(stylesListBox())}
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
              className={cx(stylesOption())}
            >
              <Typography
                variant="b3"
                color="inherit"
                noWrap
              >
                {optionLabel}
              </Typography>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      <div className={stylesRoot()}>
        <Typography
          noWrap
          component="div"
          variant="c1"
          role="button"
          tabIndex={disabled ? undefined : 0}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-disabled={disabled}
          onClick={handleInputClick}
          onKeyDown={handleInputKeyDown}
          ref={rootRef}
          color={value ? 'black' : 'gray-9'}
          className={cx({
            [stylesInput()]: true,
            [stylesInputSizeSmall()]: size === 'small',
            [stylesInputSizeMedium()]: size === 'medium',
            [stylesInputSizeLarge()]: size === 'large',
          })}
        >
          {value ? getOptionLabel(value) : placeholder}
        </Typography>
        <input
          type="text"
          value={JSON.stringify(value) || ''}
          tabIndex={-1}
          aria-hidden="true"
          className={stylesNativeInput()}
          autoComplete="off"
          id={id}
          name={name}
          required={required}
          onChange={() => {}}
          disabled={disabled}
        />
        <ArrowDropDownIcon
          className={cx({
            [stylesInputArrowIcon()]: true,
            [stylesInputArrowIconDisabled()]: disabled,
          })}
          aria-hidden
        />
      </div>
      <Popover
        open={open}
        anchorEl={rootRef.current}
        onClose={handleClose}
        placement="bottom-start"
        className={stylesPopper()}
      >
        <Box
          borderColor="gray-3"
          borderPosition="bottom"
          borderStyle="solid"
          borderWidth={1}
        >
          <TextField
            type="search"
            onChange={handleInputSearchChange}
            disabled={!options.length}
            onKeyDown={handleInputSearchKeyDown}
            value={searchValue}
            placeholder={placeholderSearch}
            className={stylesInputSearch()}
          />
        </Box>
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
  placeholderSearch: 'Search',
  size: 'medium',
};
