import React from 'react';
import { UseAutocompletePropsType, useAutocomplete } from '../hooks';
import { Popover } from '../Popover';
import { TextField } from '../TextField';
import { Typography } from '../Typography';
import { Box } from '../Box';
import { ArrowDropDownIcon } from '../icons';
import { css, cx } from '../styles';

/**
 * Types.
 */
export type SelectPickerProps<T> = UseAutocompletePropsType<T> & {
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder?: string;
  noOptionsText?: React.ReactNode;
  // TODO: Add support.
  renderOption?: (props: object, option: T, state: object) => React.ReactNode;
  loading?: boolean;
  loadingText?: React.ReactNode;
  // TODO: Add support.
  groupBy?: (options: T) => string;
  // TODO: Add support.
  limitTags?: number;
  // TODO: Add support.
  multiple?: boolean;
  disableSearch?: boolean;
};
/**
 *
 */

/**
 * Styles.
 */
const stylesContainer = () => css({
  label: 'SelectPicker-root',
  position: 'relative',
});

const stylesRoot = () => css({
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
  textAlign: 'left',
  cursor: 'pointer',
  fontFamily: 'inherit',
  '&:hover': {
    backgroundColor: 'var(--pv-color-gray-3)',
    borderColor: 'var(--pv-color-gray-7)',
  },
  '&:disabled': {
    cursor: 'not-allowed',
    backgroundColor: 'var(--pv-color-gray-1)',
    borderColor: 'var(--pv-color-gray-5)',
    color: 'var(--pv-color-gray-7)',
  },
  '&:not(:disabled)': {
    '&:focus': {
      backgroundColor: 'var(--pv-color-secondary-tint-5)',
      borderColor: 'var(--pv-color-secondary-tint-3)',
    },
  },
  height: 'var(--pv-size-base-7)',
});

const stylesInputArrowIcon = () => css({
  label: 'SelectPicker-arrow-icon',
  position: 'absolute',
  right: '0px',
  top: 'calc(50% - 12px)',
  pointerEvents: 'none',
  margin: '0px var(--pv-size-base)',
  color: 'var(--pv-color-gray-10)',
});

const stylesListBox = () => css({
  label: 'SelectPicker-listbox',
  maxHeight: '36vh',
  overflowY: 'auto',
  margin: 0,
  listStyleType: 'none',
  position: 'relative',
  padding: '10px 0',
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
    backgroundColor: 'var(--pv-color-gray-2)',
  },
  '&[data-focused="true"]': {
    backgroundColor: 'var(--pv-color-gray-3)',
  },
  '&[aria-selected="true"]': {
    backgroundColor: 'var(--pv-color-gray-4)',
  },
});

const stylesInputSearch = () => css({
  label: 'SelectPicker-input-search',
  padding: 'var(--pv-size-base-3) var(--pv-size-base-3) var(--pv-size-base-2)',
});

const stylesListBoxState = () => css({
  label: 'SelectPicker-listbox-state',
  padding: 'var(--pv-size-base-3) var(--pv-size-base-2)',
});
/**
 *
 */

export const SelectPicker: <T>(props: SelectPickerProps<T>) => JSX.Element = (props) => {
  const {
    getOptionLabel,
    placeholder,
    disableSearch,
    noOptionsText,
    loading,
    loadingText,
  } = props;
  const {
    value,
    popupOpen,
    groupedOptions,
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    getPopoverProps,
  } = useAutocomplete(props);

  const {
    onChange,
    ...otherInputProps
  } = getInputProps();

  return (
    <>
      <div className={stylesContainer()}>
        <Typography
          {...getRootProps()}
          noWrap
          component="button"
          variant="c1"
          aria-haspopup="listbox"
          aria-expanded={popupOpen}
          color={value ? 'black' : 'gray-9'}
          className={cx({
            [stylesRoot()]: true,
          })}
          // @ts-ignore
          type="button"
        >
          {value ? getOptionLabel(value) : placeholder}
        </Typography>
        <ArrowDropDownIcon
          className={cx({
            [stylesInputArrowIcon()]: true,
          })}
          aria-hidden
        />
      </div>
      <Popover
        placement="bottom-start"
        allowUseSameWidth
        {...getPopoverProps()}
      >
        {!disableSearch && (
          <Box
            borderColor="gray-3"
            borderPosition="bottom"
            borderStyle="solid"
            borderWidth={1}
          >
            <TextField
              inputProps={otherInputProps}
              className={stylesInputSearch()}
              onChange={onChange}
              placeholder="Search"
              disabled={loading}
            />
          </Box>
        )}
        {loading && groupedOptions.length === 0 && (
          <div className={stylesListBoxState()}>
            {typeof loadingText === 'string' ? (
              <Typography
                variant="b2"
                color="gray-10"
              >
                {loadingText}
              </Typography>
            ) : loadingText}
          </div>
        )}
        {groupedOptions.length === 0 && !loading && (
          <div className={stylesListBoxState()}>
            {typeof noOptionsText === 'string' ? (
              <Typography
                variant="b2"
                color="gray-10"
              >
                {noOptionsText}
              </Typography>
            ) : noOptionsText}
          </div>
        )}
        {groupedOptions.length > 0 && (
          <ul
            className={stylesListBox()}
            {...getListboxProps()}
          >
            {(groupedOptions).map((option, index) => (
              <li
                className={stylesOption()}
                {...getOptionProps(option, index)}
              >
                <Typography
                  variant="b3"
                  color="inherit"
                  noWrap
                >
                  {getOptionLabel(option)}
                </Typography>
              </li>
            ))}
          </ul>
        )}
      </Popover>
    </>
  );
};

// @ts-ignore
SelectPicker.defaultProps = {
  disableSearch: false,
  noOptionsText: 'No options',
  loading: false,
  loadingText: 'Loading...',
};
