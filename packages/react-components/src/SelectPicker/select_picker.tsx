import React, { useMemo } from 'react';
import { Popover, PopoverProps } from '../Popover';
import { SelectPickerList } from './select_picker_list';
import { SelectPickerItem } from './select_picker_item';
import { cx, css } from '../styles';
import {
  Box,
  CircularProgress,
  TextField,
  Typography,
  useWindowEventListener,
} from '..';

type OptionType = {
  label: string;
  value: string;
  // disabled?: boolean;
};

type BaseProps = {
  /**
   * Menu contents.
   */
  options: OptionType[];
  /**
   * Props applied to the `Popover` element.
   */
  popoverProps?: Partial<PopoverProps>;
  placeholder?: string;
  defaultValue?: string;
  loading?: boolean;
  error?: string | React.ReactNode;
  notMatch?: string | React.ReactNode;
  onChange: (label: string) => void;
};

type HighlightedType = {
  diff: number | 'start' | 'end';
  direction: 'next' | 'previous';
  reason?: string;
  event?: Event
  index?: number;
};

type SelectPickerProps = BaseProps;

const stylesBase = () => css({
  label: 'Menu',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'hidden',
  width: '300px',
  maxHeight: '450px',
});

const stylesSearchWrapper = () => css({
  label: 'Search-wrapper',
  padding: '16px 16px 12px',
});

const stylesContent = () => css({
  label: 'Content',
  display: 'flex',
  justifyContent: 'center',
  padding: '7px 10px',
});

const stylesLoading = () => css({
  label: 'Loading',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100px',
  padding: '7px 10px',
});

const stylesTextField = () => css({
  label: 'TextField',
  '*::selection': {
    backgroundColor: 'transparent',
  },
});

export const SelectPicker = React.forwardRef<HTMLDivElement, SelectPickerProps>((props, ref) => {
  const {
    options,
    onChange,
    loading,
    defaultValue,
    placeholder,
    error,
    notMatch,
    popoverProps = {},
  } = props;
  const {
    className,
    modalProps = {},
  } = popoverProps;
  const [open, setOpen] = React.useState(false);
  const [filter, setFilter] = React.useState<string | undefined>();
  const [textFieldValue, setTextFieldValue] = React.useState<string | undefined>();
  const childRef = React.useRef(null);
  const highlightedIndexRef = React.useRef(-1);
  const listboxRef = React.useRef(null);

  const filterList = () => {
    if (filter) {
      return options.filter((option) => option.label.toLowerCase().includes(filter.toLowerCase()));
    }

    return options;
  };

  const sortedList = useMemo(filterList, [filter, open, loading]);

  const validOptionIndex = (data: Pick<HighlightedType, 'index' | 'direction'>) => {
    const { index, direction } = data;

    if (!listboxRef.current || index === -1) {
      return -1;
    }

    let nextFocus = index;

    while (true) {
      // Out of range
      if (
        (direction === 'next' && nextFocus === options.length)
        || (direction === 'previous' && nextFocus === -1)
      ) {
        return -1;
      }

      const option = listboxRef.current.querySelector(`[data-option-index="${nextFocus}"]`);

      // Same logic as MenuList.js
      const nextFocusDisabled = !option
        || option.disabled
        || option.getAttribute('aria-disabled') === 'true';

      if (nextFocusDisabled) {
        // Move to the next element.
        nextFocus += direction === 'next' ? 1 : -1;
      } else {
        return nextFocus;
      }
    }
  };

  const setHighlightedIndex = (data: Pick<HighlightedType, 'index' | 'reason' | 'event'>) => {
    const { index, reason } = data;

    highlightedIndexRef.current = index;

    if (!listboxRef.current) {
      return;
    }

    const prev = listboxRef.current.querySelector('[role="menuitem"][data-focus="true"]');

    if (prev) {
      prev.removeAttribute('data-focus');
    }

    const listboxNode = listboxRef.current.parentElement.querySelector('[role="menu"]');

    // "No results"
    if (!listboxNode) {
      return;
    }

    if (index === -1) {
      listboxNode.scrollTop = 0;

      return;
    }

    const option = listboxRef.current.querySelector(`[data-option-index="${index}"]`);

    if (!option) {
      return;
    }

    option.setAttribute('data-focus', 'true');

    if (listboxNode.scrollHeight > listboxNode.clientHeight && reason !== 'mouse') {
      const element = option;

      const scrollBottom = listboxNode.clientHeight + listboxNode.scrollTop;
      const elementBottom = element.offsetTop + element.offsetHeight;

      if (elementBottom > scrollBottom) {
        listboxNode.scrollTop = elementBottom - listboxNode.clientHeight;
      } else if (
        element.offsetTop - element.offsetHeight - 90 < listboxNode.scrollTop
      ) {
        listboxNode.scrollTop = element.offsetTop - element.offsetHeight - 90;
      }
    }
  };

  const changeHighlightedIndex = (data: HighlightedType) => {
    const {
      diff, direction, reason, event,
    } = data;

    if (!open) {
      return;
    }

    const getNextIndex = () => {
      const maxIndex = sortedList.length - 1;

      if (diff === 'start') {
        return 0;
      }

      if (diff === 'end') {
        return maxIndex;
      }

      const newIndex = highlightedIndexRef.current + diff;

      if (newIndex < 0) {
        if (Math.abs(diff) > 1) {
          return 0;
        }

        return maxIndex;
      }

      if (newIndex > maxIndex) {
        if (Math.abs(diff) > 1) {
          return maxIndex;
        }

        return 0;
      }

      return newIndex;
    };

    const nextIndex = validOptionIndex({ index: getNextIndex(), direction });

    setHighlightedIndex({ index: nextIndex, reason, event });
  };

  const measuredListboxRef = React.useCallback((node) => {
    if (node !== null) {
      listboxRef.current = node;

      for (let i = 0; i < sortedList.length; i += 1) {
        if (textFieldValue === sortedList[i].label) {
          highlightedIndexRef.current = i;
        }
      }

      setHighlightedIndex({ index: highlightedIndexRef.current });
    }
  }, [open, filter]);

  const prepareDefaultValue = () => {
    if (highlightedIndexRef.current === -1) {
      for (let i = 0; i < options.length; i += 1) {
        if (defaultValue === options[i].value) {
          highlightedIndexRef.current = i;

          return options[i].label;
        }
      }
    }

    return '';
  };

  const handleChildClick = () => {
    setOpen(true);
  };

  const handlePopoverClose = () => {
    setFilter(undefined);
    setOpen(false);
  };

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setFilter(value);
  };

  const handleMenuItemClick = (
    option: OptionType,
    index: number,
  ) => () => {
    handlePopoverClose();

    if (onChange) {
      onChange(option.value);
      setTextFieldValue(option.label);
      highlightedIndexRef.current = index;
    }
  };

  const handleChildKeyDown = (event: KeyboardEvent) => {
    const { key } = event;

    if (key === 'Tab') {
      handlePopoverClose();

      return;
    }

    if (!open) {
      return;
    }

    if (key === 'ArrowDown') {
      event.preventDefault();

      changeHighlightedIndex({
        diff: 1, direction: 'next', reason: 'keyboard', event,
      });
    } else if (key === 'ArrowUp') {
      event.preventDefault();

      changeHighlightedIndex({
        diff: -1, direction: 'previous', reason: 'keyboard', event,
      });
    } else if (key === 'Escape') {
      // Avoid Opera to exit fullscreen mode.
      event.preventDefault();
      // Avoid the Modal to handle the event.
      event.stopPropagation();

      handlePopoverClose();
    } else if (key === 'Enter') {
      if (highlightedIndexRef.current !== -1 && sortedList[highlightedIndexRef.current]) {
        const option = sortedList[highlightedIndexRef.current];

        handlePopoverClose();

        event.preventDefault();

        for (let i = 0; i < options.length; i += 1) {
          if (option.value === options[i].value) {
            highlightedIndexRef.current = i;
          }
        }

        setTextFieldValue(option.label);

        if (onChange) {
          onChange(option.value);
        }
      }
    }
  };

  useWindowEventListener('keydown', handleChildKeyDown);

  const renderList = () => {
    if (loading) {
      return (
        <div
          data-testid="loading-list"
          className={cx({
            [stylesLoading()]: true,
          })}
        >
          <CircularProgress
            size="small"
            color="secondary"
          />
        </div>
      );
    }

    if (error) {
      return (
        <div
          data-testid="error-list"
          className={cx({
            [stylesContent()]: true,
          })}
        >
          {error}
        </div>
      );
    }

    if (!options.length) {
      return (
        <div
          data-testid="empty-list"
          className={cx({
            [stylesContent()]: true,
          })}
        >
          <Typography
            variant="b3"
          >
            Empty list
          </Typography>
        </div>
      );
    }

    if (!sortedList.length) {
      return (
        <div
          data-testid="not-match-list"
          className={cx({
            [stylesContent()]: true,
          })}
        >
          {notMatch || (
            <Typography
              variant="b3"
            >
              Not match found
            </Typography>
          )}
        </div>
      );
    }

    return (
      <SelectPickerList
        ref={measuredListboxRef}
        data-testid="select-picker-list"
      >
        {sortedList.map((option, index) => {
          const isSelect = index === highlightedIndexRef.current;

          return (
            <SelectPickerItem
              key={option.label}
              onClick={handleMenuItemClick(option, index)}
              index={index}
              selected={isSelect}
            >
              {option.label}
            </SelectPickerItem>
          );
        })}
      </SelectPickerList>
    );
  };

  return (
    <>
      <TextField
        readOnly
        defaultValue={prepareDefaultValue()}
        placeholder={placeholder}
        value={textFieldValue}
        ref={childRef}
        onClick={handleChildClick}
        onKeyDown={(event) => {
          event.stopPropagation();

          if (event.key === 'Enter') {
            handleChildClick();
          }
        }}
        aria-haspopup="menu"
        aria-expanded={String(open) as any}
        className={cx({
          [stylesTextField()]: true,
          [className]: !!className,
        })}
        data-testid="select-picker"
      />
      <Popover
        {...popoverProps}
        modalProps={{
          onMouseDown: (event) => {
            // Prevent blur
            event.preventDefault();
          },
          ...modalProps,
          disableEnforceFocus: false,
        }}
        ref={ref}
        open={open}
        anchorEl={childRef.current}
        onClose={handlePopoverClose}
        placement="bottom-start"
        className={cx({
          [stylesBase()]: true,
        })}
      >
        <Box
          borderColor="gray-4"
          borderPosition="bottom"
          borderStyle="solid"
          borderWidth={1}
          className={cx({
            [stylesSearchWrapper()]: true,
          })}
        >
          <TextField
            data-testid="search-text-field"
            size="medium"
            type="search"
            disabled={loading || !!error}
            onChange={handleChangeSearch}
          />
        </Box>
        {renderList()}
      </Popover>
    </>
  );
});

SelectPicker.displayName = 'SelectPicker';

SelectPicker.defaultProps = {};
