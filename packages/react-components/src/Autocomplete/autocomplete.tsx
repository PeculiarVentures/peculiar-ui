import React from 'react';
import {
  useAutocomplete,
  UseAutocompleteProps,
  UseAutocompleteReturnType,
  AutocompleteValue,
} from '../hooks';
import { Popover } from '../Popover';
import { Popper } from '../Popper';
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
     * The size of the root component.
     */
    size?: (
      'small' |
      'medium' |
      'large'
    );
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
     * If `true`, the root will be a search.
     */
    combobox?: boolean;
    /**
     * If `true`, the autocomplete will be disabled.
     */
    disabled?: boolean;
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
     * If `true`, the `input` will indicate an error.
     */
    error?: boolean;
    errorText?: string;
    /**
     * Render the root element.
     */
    renderRoot?: (
      props: object,
      value: AutocompleteValue<T, Multiple>,
      getTagProps: UseAutocompleteReturnType<T, Multiple>['getTagProps'],
    ) => React.ReactNode;
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

const stylesRootSearchWrapper = (size: AutocompleteProps<any>['size']) => css({
  label: 'Autocomplete',
  position: 'relative',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  borderRadius: '4px',
  minHeight: 'var(--pv-size-base-8)',
  ...(size === 'small' && {
    minHeight: 'var(--pv-size-base-6)',
  }),
  ...(size === 'medium' && {
    minHeight: 'var(--pv-size-base-7)',
  }),
  padding: '0 calc(var(--pv-size-base-2) + 24px) 0 var(--pv-size-base-2)',
  backgroundColor: 'var(--pv-color-gray-1)',
  boxSizing: 'border-box',
  transition: 'background-color 200ms, color 200ms, border-color 200ms',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'var(--pv-color-gray-8)',
  '&:hover': {
    backgroundColor: 'var(--pv-color-gray-3)',
    borderColor: 'var(--pv-color-gray-7)',
  },
  '&:hover input': {
    backgroundColor: 'var(--pv-color-gray-3)',
    borderColor: 'var(--pv-color-gray-7)',
  },
  '&:focus-within': {
    backgroundColor: 'var(--pv-color-secondary-tint-5)',
    borderColor: 'var(--pv-color-secondary-tint-3)',
  },
});

const stylesRoot = (size: AutocompleteProps<any>['size']) => css({
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
  minHeight: 'var(--pv-size-base-8)',
  ...(size === 'small' && {
    minHeight: 'var(--pv-size-base-6)',
  }),
  ...(size === 'medium' && {
    minHeight: 'var(--pv-size-base-7)',
  }),
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
    '&[aria-invalid]': {
      backgroundColor: 'var(--pv-color-wrong-tint-5)',
      borderColor: 'var(--pv-color-wrong-tint-3)',
    },
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

const stylesInputArrowIcon = (open: boolean) => css({
  label: 'Autocomplete-arrow-icon',
  position: 'absolute',
  right: '0px',
  top: 'calc(50% - 12px)',
  pointerEvents: 'none',
  margin: '0px var(--pv-size-base)',
  color: 'var(--pv-color-gray-10)',
  ...(open && {
    transform: 'rotate(180deg)',
  }),
  '&[aria-disabled="true"]': {
    color: 'var(--pv-color-gray-7)',
  },
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

const stylesRootInputSearch = () => css({
  label: 'Autocomplete-root-input-search',
  flex: 1,
  marginLeft: 5,
  minWidth: '30%',
  '& input': {
    border: 'none',
    padding: '0',
  },
});

const stylesListBoxState = () => css({
  label: 'Autocomplete-listbox-state',
  padding: 'var(--pv-size-base-3) var(--pv-size-base-2)',
});

const stylesPopover = () => css({
  label: 'Autocomplete-popover',
  minWidth: 240,
  outline: 0,
  marginTop: 1,
  borderRadius: 4,
  maxWidth: 'calc(100% - 32px)',
  maxHeight: 'calc(100% - 32px)',
  minHeight: '16px',
  boxShadow: 'var(--pv-shadow-light-low)',
});

const stylesTagsList = (isEmbedded = false) => css({
  label: 'Autocomplete-tags-list',
  overflow: 'hidden',
  ...(!isEmbedded && {
    width: '100%',
  }),
});

const stylesTag = (tagsLength: number, limitTags: number, size: AutocompleteProps<any>['size']) => css({
  label: 'Autocomplete-tag',
  borderRadius: '2px',
  borderColor: 'var(--pv-color-gray-7)',
  margin: '2px var(--pv-size-base) 2px 0',
  ...(tagsLength === 1 && {
    maxWidth: 'calc(100% - var(--pv-size-base))',
  }),
  ...(tagsLength > 1 && limitTags && {
    maxWidth: `calc(${100 / limitTags}% - var(--pv-size-base))`,
  }),
  ...(size === 'small' && {
    height: 'var(--pv-size-base-5)',
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

const stylesError = () => css({
  label: 'TextField-error',
  marginTop: '2px',
});
/**
 *
 */

export const Autocomplete = <T, Multiple extends boolean | undefined = undefined>(
  props: AutocompleteProps<T, Multiple>,
): JSX.Element => {
  const {
    className,
    size,
    placeholder,
    disableSearch,
    combobox,
    disabled = false,
    noOptionsText,
    loading,
    loadingText,
    limitTags = combobox ? undefined : 2,
    name,
    required,
    multiple,
    readOnly,
    createOptionText,
    allowCreateOption,
    error,
    errorText,
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

    if (Array.isArray(value) && limitTags) {
      const more = (value.length > limitTags) ? (value.length - limitTags) : 0;
      const valueLimits = more > 0 ? value.slice(0, limitTags) : value;

      return (
        <>
          <div
            className={stylesTagsList(combobox)}
          >
            {valueLimits.map((v, index) => (
              <Chip
                {...getTagProps(v, index)}
                color="default"
                variant="contained"
                className={stylesTag(value.length, limitTags, size)}
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

    if (Array.isArray(value)) {
      return value.map((v, index) => (
        <Chip
          {...getTagProps(v, index)}
          color="default"
          variant="contained"
          className={stylesTag(value.length, undefined, size)}
        >
          {getOptionLabel(v)}
        </Chip>
      ));
    }

    return getOptionLabel(value as T);
  };

  const renderedValue = renderValue();
  const isValueEmpty = renderedValue === null;

  const defaultRenderRoot: AutocompleteProps<T, Multiple>['renderRoot'] = (propsRoot, valueRoot) => {
    if (combobox) {
      return (
        <div
          className={stylesRootSearchWrapper(size)}
          {...propsRoot}
        >
          {multiple ? renderedValue : null}
          <TextField
            inputProps={otherInputProps}
            className={stylesRootInputSearch()}
            onChange={onChange}
            onKeyDown={popoverProps.onKeyDown}
            value={searchValue}
            size={size}
            placeholder={placeholder}
            disabled={loading || disabled}
          />
          <ArrowDropDownIcon
            className={stylesInputArrowIcon(popoverProps.open)}
            aria-disabled={disabled}
            aria-hidden
          />
          <input
            type="text"
            value={isValueEmpty ? '' : JSON.stringify(valueRoot)}
            tabIndex={-1}
            aria-hidden="true"
            disabled={disabled}
            className={stylesNativeInput()}
            autoComplete="off"
            id={id}
            name={name}
            required={required}
            readOnly={readOnly}
            onChange={() => { }}
          />
        </div>
      );
    }

    return (
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
            [stylesRoot(size)]: true,
            [stylesRootMultiple()]: multiple,
            [className]: !!className,
          })}
          aria-invalid={error || undefined}
          type="button"
        >
          {isValueEmpty ? placeholder : renderedValue}
        </Typography>
        <ArrowDropDownIcon
          className={stylesInputArrowIcon(popoverProps.open)}
          aria-disabled={disabled}
          aria-hidden
        />
        <input
          type="text"
          value={isValueEmpty ? '' : JSON.stringify(valueRoot)}
          tabIndex={-1}
          aria-hidden="true"
          disabled={disabled}
          className={stylesNativeInput()}
          autoComplete="off"
          id={id}
          name={name}
          required={required}
          readOnly={readOnly}
          onChange={() => { }}
        />
      </div>
    );
  };

  const renderOption = renderOptionProp || defaultRenderOption;
  const renderRoot = renderRootProp || defaultRenderRoot;
  const PopperComponent = combobox ? Popper : Popover;

  const renderListOption = (option: T, index: number) => {
    const optionProps = getOptionProps(option, index);

    return renderOption(optionProps, option);
  };

  return (
    <>
      {renderRoot({ ...getRootProps(), disabled }, value, getTagProps)}
      {error && errorText && (
        <Typography
          variant="c2"
          color="wrong"
          className={cx({
            [stylesError()]: true,
          })}
        >
          {errorText}
        </Typography>
      )}
      <PopperComponent
        placement="top-start"
        allowUseSameWidth
        disablePortal={false}
        {...popoverProps}
        className={stylesPopover()}
      >
        {!disableSearch && !combobox && (
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
                // @ts-ignore
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
      </PopperComponent>
    </>
  );
};

// @ts-ignore
Autocomplete.defaultProps = {
  disableSearch: false,
  noOptionsText: 'No options',
  loading: false,
  loadingText: 'Loading...',
  required: false,
  allowCreateOption: false,
  createOptionText: 'Create new',
  size: 'large',
};
