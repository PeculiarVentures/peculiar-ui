import React from 'react';
import {
  useAutocomplete,
  UseAutocompleteProps,
  AutocompleteValue,
} from '../hooks';
import { Popover } from '../Popover';
import { TextField } from '../TextField';
import { Typography } from '../Typography';
import { Box } from '../Box';
import { Chip } from '../Chip';
import { Button } from '../Button';
import { ArrowDropDownIcon, PlusIcon } from '../icons';
import { css, cx } from '../styles';

/**
 * Types.
 */
export type AutocompleteRenderGroupParams = {
  key: string | number;
  group: string;
  children?: React.ReactNode;
};

export type AutocompleteProps<T, Multiple extends boolean | undefined = undefined> =
  UseAutocompleteProps<T, Multiple> & {
    /**
     * The className of the component.
     */
    className?: string;
    /**
     * The short hint displayed in the `input` before the user enters a value.
     */
    placeholder?: string;
    /**
     * Text to display when there are no options.
     */
    noOptionsText?: React.ReactNode;
    /**
     * If `true`, the component is in a loading state.
     * This shows the `loadingText` in place of suggestions (only if there are no
     * suggestions to show, e.g. `options` are empty).
     */
    loading?: boolean;
    /**
     * Text to display when in a loading state.
     */
    loadingText?: React.ReactNode;
    /**
     * The maximum number of tags that will be visible when not focused.
     */
    limitTags?: number;
    /**
     * If `true`, the popup search input will be hidden.
     */
    disableSearch?: boolean;
    /**
     * Name attribute of the `input` element.
     */
    name?: string;
    /**
     * If `true`, the `input` element is required.
     */
    required?: boolean;
    /**
     * Text to display when in the create button element.
     */
    createOptionText?: string;
    /**
     * If `true`, the create button element will be shown.
     */
    allowCreateOption?: boolean;
    /**
     * Render the root element.
     */
    renderRoot?: (props: object, value: AutocompleteValue<T, Multiple>) => React.ReactNode;
    /**
     * Render the option, use `getOptionLabel` by default.
     */
    renderOption?: (props: object, option: T) => React.ReactNode;
    /**
     * The label to display when the tags are truncated (`limitTags`).
     */
    getLimitTagsText?: (more: number) => string;
    /**
     * Callback fired when the create button clicked.
     */
    onCreate?: (event: React.SyntheticEvent, value: string) => void;
  };
/**
 *
 */

/**
 * Styles.
 */
const stylesContainer = () => css({
  label: 'Autocomplete',
  position: 'relative',
});

const stylesRoot = () => css({
  label: 'Autocomplete-root',
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
  height: 'var(--pv-size-base-8)',
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
});

const stylesRootMultiple = () => css({
  label: 'multiple',
  display: 'inline-flex',
  alignItems: 'center',
});

const stylesInputArrowIcon = () => css({
  label: 'Autocomplete-arrow-icon',
  position: 'absolute',
  right: '0px',
  top: 'calc(50% - 12px)',
  pointerEvents: 'none',
  margin: '0px var(--pv-size-base)',
  color: 'var(--pv-color-gray-10)',
});

const stylesListBox = () => css({
  label: 'Autocomplete-listbox',
  maxHeight: '36vh',
  overflowY: 'auto',
  margin: 0,
  listStyleType: 'none',
  position: 'relative',
  padding: '10px 0',
});

const stylesOption = (inGroup: boolean) => css({
  label: 'Autocomplete-option',
  ...(inGroup ? {
    padding: '0px var(--pv-size-base-2) 0 var(--pv-size-base-3)',
  } : {
    padding: '0px var(--pv-size-base-2)',
  }),
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
  label: 'Autocomplete-input-search',
  padding: 'var(--pv-size-base-3) var(--pv-size-base-3) var(--pv-size-base-2)',
});

const stylesListBoxState = () => css({
  label: 'Autocomplete-listbox-state',
  padding: 'var(--pv-size-base-3) var(--pv-size-base-2)',
});

const stylesPopover = () => css({
  label: 'Autocomplete-popover',
  minWidth: 240,
});

const stylesTagsList = () => css({
  label: 'Autocomplete-tags-list',
  overflow: 'hidden',
  width: '100%',
});

const stylesTag = (tagsLength: number, limitTags: number) => css({
  label: 'Autocomplete-tag',
  borderRadius: '2px',
  borderColor: 'var(--pv-color-gray-7)',
  margin: '0 var(--pv-size-base) 0 0',
  ...(tagsLength === 1 && {
    maxWidth: 'calc(100% - var(--pv-size-base))',
  }),
  ...(tagsLength > 1 && limitTags && {
    maxWidth: `calc(${100 / limitTags}% - var(--pv-size-base))`,
  }),
});

const stylesTagSize = () => css({
  label: 'Autocomplete-tag-size',
  margin: '0 var(--pv-size-base-2)',
});

const stylesNativeInput = () => css({
  label: 'Autocomplete-native-input',
  bottom: 0,
  left: 0,
  height: '100%',
  position: 'absolute',
  opacity: 0,
  pointerEvents: 'none',
  width: '100%',
  boxSizing: 'border-box',
});

const stylesGroupList = () => css({
  label: 'Autocomplete-group-list',
  padding: 0,
  listStyleType: 'none',
});

const stylesGroupName = () => css({
  label: 'Autocomplete-group-name',
  padding: 'var(--pv-size-base-2)',
});

const stylesButtonCreateNew = () => css({
  label: 'Autocomplete-button-create',
  width: '100%',
  borderRadius: 0,
  justifyContent: 'left',
  padding: '0px var(--pv-size-base-2)',
});
/**
 *
 */

export function Autocomplete<T, Multiple extends boolean | undefined = undefined>(
  props: AutocompleteProps<T, Multiple>,
): JSX.Element {
  const {
    className,
    placeholder,
    disableSearch,
    noOptionsText,
    loading,
    loadingText,
    limitTags = 2,
    name,
    required,
    multiple,
    createOptionText,
    allowCreateOption,
    renderRoot: renderRootProp,
    renderOption: renderOptionProp,
    getLimitTagsText = (more) => `${more} more`,
    groupBy,
    onCreate,
  } = props;
  const {
    id,
    value,
    searchValue,
    groupedOptions,
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    getPopoverProps,
    getTagProps,
    getOptionLabel,
  } = useAutocomplete(props);
  const {
    onChange,
    ...otherInputProps
  } = getInputProps();

  const popoverProps = getPopoverProps();

  const handleCreate = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onCreate) {
      onCreate(event, searchValue);
    }

    popoverProps.onClose(event);
  };

  const defaultRenderOption: AutocompleteProps<T, Multiple>['renderOption'] = (propsOption, option) => (
    <li
      {...propsOption}
      className={stylesOption(!!groupBy)}
    >
      <Typography
        variant="b3"
        color="inherit"
        noWrap
      >
        {getOptionLabel(option)}
      </Typography>
    </li>
  );

  const renderGroup = (params: AutocompleteRenderGroupParams) => (
    <li key={params.key}>
      <Typography
        variant="c1"
        color="gray-10"
        className={stylesGroupName()}
      >
        {params.group}
      </Typography>
      <ul className={stylesGroupList()}>
        {params.children}
      </ul>
    </li>
  );

  const renderValue = () => {
    if (!value || (Array.isArray(value) && value.length === 0)) {
      return null;
    }

    if (Array.isArray(value)) {
      const more = (value.length > limitTags) ? (value.length - limitTags) : 0;
      const valueLimits = more > 0 ? value.slice(0, limitTags) : value;

      return (
        <>
          <div
            className={stylesTagsList()}
          >
            {valueLimits.map((v, index) => (
              <Chip
                {...getTagProps(v, index)}
                color="default"
                variant="contained"
                className={stylesTag(value.length, limitTags)}
              >
                {getOptionLabel(v)}
              </Chip>
            ))}
          </div>
          {!!more && (
            <Typography
              variant="c2"
              color="gray-9"
              className={stylesTagSize()}
            >
              {getLimitTagsText(more)}
            </Typography>
          )}
        </>
      );
    }

    return getOptionLabel(value as T);
  };

  const renderedValue = renderValue();
  const isValueEmpty = renderedValue === null;

  const defaultRenderRoot: AutocompleteProps<T, Multiple>['renderRoot'] = (propsRoot, valueRoot) => (
    <div
      className={stylesContainer()}
    >
      <Typography
        {...propsRoot}
        noWrap
        component="button"
        variant="c1"
        color={isValueEmpty ? 'gray-9' : 'black'}
        className={cx({
          [stylesRoot()]: true,
          [stylesRootMultiple()]: multiple,
          [className]: !!className,
        })}
        // @ts-ignore
        type="button"
      >
        {isValueEmpty ? placeholder : renderedValue}
      </Typography>
      <ArrowDropDownIcon
        className={stylesInputArrowIcon()}
        aria-hidden
      />
      <input
        type="text"
        value={isValueEmpty ? '' : JSON.stringify(valueRoot)}
        tabIndex={-1}
        aria-hidden="true"
        className={stylesNativeInput()}
        autoComplete="off"
        id={id}
        name={name}
        required={required}
        onChange={() => {}}
      />
    </div>
  );

  const renderOption = renderOptionProp || defaultRenderOption;
  const renderRoot = renderRootProp || defaultRenderRoot;

  const renderListOption = (option: T, index: number) => {
    const optionProps = getOptionProps(option, index);

    return renderOption(optionProps, option);
  };

  return (
    <>
      {renderRoot(getRootProps(), value)}

      <Popover
        placement="bottom-start"
        allowUseSameWidth
        {...popoverProps}
        className={stylesPopover()}
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
            {groupedOptions
              // @ts-ignore
              .map((option, index) => {
                if (groupBy && 'options' in option) {
                  return renderGroup({
                    key: option.key,
                    group: option.group,
                    // @ts-ignore
                    children: option.options.map((option2, index2) => (
                      renderListOption(option2, option.index + index2)
                    )),
                  });
                }

                return renderListOption(option as T, index);
              })}
          </ul>
        )}
        {allowCreateOption && !loading && (
          <Box
            borderColor="gray-3"
            borderPosition="top"
            borderStyle="solid"
            borderWidth={1}
          >
            <Button
              color="secondary"
              className={stylesButtonCreateNew()}
              textVariant="b3"
              onClick={handleCreate}
              startIcon={<PlusIcon />}
            >
              {createOptionText}
            </Button>
          </Box>
        )}
      </Popover>
    </>
  );
}

// @ts-ignore
Autocomplete.defaultProps = {
  disableSearch: false,
  noOptionsText: 'No options',
  loading: false,
  loadingText: 'Loading...',
  limitTags: 2,
  required: false,
  allowCreateOption: false,
  createOptionText: 'Create new',
};
