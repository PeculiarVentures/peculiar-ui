import React from 'react';
import styled from '@emotion/styled';
import {
  useAutocomplete,
  UseAutocompleteProps,
  UseAutocompleteReturnType,
  AutocompleteValue,
} from '../hooks';
import { Popover } from '../Popover';
import { TextField } from '../TextField';
import { Typography, TypographyOwnProps } from '../Typography';
import { Box } from '../Box';
import { Chip } from '../Chip';
import { Button } from '../Button';
import { ArrowDropDownIcon, PlusIcon } from '../icons';

/**
 * Types.
 */
export type AutocompleteRenderGroupParams = {
  key: string | number;
  group: string;
  children?: React.ReactNode;
};

export type AutocompleteOwnProps<
T,
Multiple extends boolean | undefined = undefined,
> = UseAutocompleteProps<T, Multiple> & {
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
   * The label content.
   */
  label?: string;
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
const AutocompleteField = styled(Typography)<
TypographyOwnProps & Required<Pick<AutocompleteOwnProps<any, boolean>, 'size' | 'multiple'>>
>(
  (props) => ({
    outline: 'none',
    boxSizing: 'border-box',
    width: '100%',
    borderRadius: '4px',
    padding: '0 calc(var(--pv-size-base-2) + 24px) 0 var(--pv-size-base-2)',
    backgroundColor: 'var(--pv-color-gray-1)',
    borderStyle: 'solid',
    borderWidth: '1px',
    transition: 'background-color 200ms, color 200ms, border-color 200ms',
    appearance: 'none',
    userSelect: 'none',
    textAlign: 'left',
    cursor: 'pointer',
    fontFamily: 'inherit',
    height: 'var(--pv-size-base-8)',
    position: 'relative',
    ...(props.size === 'small' && {
      height: 'var(--pv-size-base-6)',
    }),
    ...(props.size === 'medium' && {
      height: 'var(--pv-size-base-7)',
    }),
    ...(props.multiple === true && {
      display: 'inline-flex',
      alignItems: 'center',
    }),
  }),
  (props) => {
    const isDark = props.theme.mode === 'dark';
    const color = isDark
      ? 'var(--pv-color-white)'
      : 'var(--pv-color-black)';
    let borderColor = 'var(--pv-color-gray-8)';
    let colorPlaceholder = 'var(--pv-color-gray-9)';
    let borderColorHover = 'var(--pv-color-gray-7)';
    let borderColorDisabled = 'var(--pv-color-gray-5)';
    let colorDisabled = 'var(--pv-color-gray-7)';
    let invalidBackgroundColor = 'var(--pv-color-wrong-tint-5)';
    let invalidBorderColor = 'var(--pv-color-wrong-tint-3)';
    let backgroundColorFocus = 'var(--pv-color-secondary-tint-5)';
    let borderColorFocus = 'var(--pv-color-secondary-tint-3)';

    if (isDark) {
      borderColor = 'var(--pv-color-gray-5)';
      colorPlaceholder = 'var(--pv-color-gray-6)';
      borderColorHover = 'var(--pv-color-gray-4)';
      borderColorDisabled = 'var(--pv-color-gray-4)';
      colorDisabled = 'var(--pv-color-gray-4)';
      invalidBackgroundColor = 'var(--pv-color-wrong-shade-4)';
      invalidBorderColor = 'var(--pv-color-wrong-shade-1)';
      backgroundColorFocus = 'var(--pv-color-secondary-shade-4)';
      borderColorFocus = 'var(--pv-color-secondary-shade-1)';
    }

    return ({
      borderColor,
      '&:hover': {
        backgroundColor: 'var(--pv-color-gray-3)',
        borderColor: borderColorHover,
      },
      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: 'var(--pv-color-gray-1)',
        borderColor: borderColorDisabled,
        color: colorDisabled,
      },
      '&:not(:disabled)': {
        color,
        '&[aria-placeholder]': {
          color: colorPlaceholder,
        },
        '&[aria-invalid]': {
          backgroundColor: invalidBackgroundColor,
          borderColor: invalidBorderColor,
        },
        '&:focus-visible': {
          backgroundColor: backgroundColorFocus,
          borderColor: borderColorFocus,
        },
      },
    });
  },
);

const AutocompleteArrowIcon = styled(ArrowDropDownIcon)({
  position: 'absolute',
  right: '0px',
  top: 'calc(50% - 12px)',
  margin: '0px var(--pv-size-base)',
  color: 'var(--pv-color-gray-10)',
  '&[aria-disabled="true"]': {
    color: 'inherit',
  },
});

const AutocompleteNativeInput = styled('input')({
  bottom: 0,
  left: 0,
  height: '100%',
  position: 'absolute',
  opacity: 0,
  pointerEvents: 'none',
  width: '100%',
  boxSizing: 'border-box',
});

const AutocompleteDropdownStateItem = styled('div')({
  padding: 'var(--pv-size-base-3) var(--pv-size-base-2)',
});

const AutocompleteDropdownList = styled('ul')({
  maxHeight: '36vh',
  overflowY: 'auto',
  margin: 0,
  listStyleType: 'none',
  position: 'relative',
  padding: '10px 0',
});

const AutocompleteDropdownGroupName = styled(Typography)(
  (props) => ({
    padding: 'var(--pv-size-base-2)',
    color: props.theme.mode === 'dark'
      ? 'var(--pv-color-gray-6)'
      : 'var(--pv-color-gray-9)',
  }),
);

const AutocompleteDropdownGroupList = styled('ul')({
  padding: 0,
  listStyleType: 'none',
});

const AutocompleteDropdownGroupListItem = styled('li')<Required<{ inGroup: boolean }>>(
  (props) => ({
    ...(props.inGroup ? {
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
    boxSizing: 'border-box',
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }),
  (props) => {
    const isDark = props.theme.mode === 'dark';
    let color = 'var(--pv-color-black)';
    let backgroundColorHover = 'var(--pv-color-gray-2)';
    let backgroundColorFocused = 'var(--pv-color-gray-3)';
    let backgroundColorSelected = 'var(--pv-color-gray-4)';

    if (isDark) {
      color = 'var(--pv-color-white)';
      backgroundColorHover = 'var(--pv-color-gray-4)';
      backgroundColorFocused = 'var(--pv-color-gray-5)';
      backgroundColorSelected = 'var(--pv-color-gray-6)';
    }

    return {
      color,
      '&:hover': {
        backgroundColor: backgroundColorHover,
      },
      '&[data-focused="true"]': {
        backgroundColor: backgroundColorFocused,
      },
      '&[aria-selected="true"]': {
        backgroundColor: backgroundColorSelected,
      },
    };
  },
);

const AutocompletePopover = styled(Popover)({
  minWidth: 240,
});

const AutocompleteTagsList = styled('div')({
  overflow: 'hidden',
  width: '100%',
});

const AutocompleteTag = styled(Chip)<{
  tagsLength: number,
  limitTags: number,
  size: AutocompleteOwnProps<any>['size'],
}>((props) => ({
  label: 'Autocomplete-tag',
  borderRadius: '3px',
  margin: '0 var(--pv-size-base) 0 0',
  ...(props.tagsLength === 1 && {
    maxWidth: 'calc(100% - var(--pv-size-base))',
  }),
  ...(props.tagsLength > 1 && props.limitTags && {
    maxWidth: `calc(${100 / props.limitTags}% - var(--pv-size-base))`,
  }),
  ...(props.size === 'small' && {
    height: 'var(--pv-size-base-5)',
  }),
}));

const AutocompleteTagSize = styled(Typography)({
  margin: '0 var(--pv-size-base-2)',
});

const AutocompleteSearchInput = styled(TextField)({
  padding: 'var(--pv-size-base-3) var(--pv-size-base-3) var(--pv-size-base-2)',
});

const AutocompleteCreateNewButton = styled(Button)({
  width: '100%',
  borderRadius: 0,
  justifyContent: 'left',
  padding: '0px var(--pv-size-base-2)',
});

const AutocompleteError = styled(Typography)({
  marginTop: '2px',
});

const AutocompleteLabel = styled('label')({
  label: 'TextField-label',
  marginBottom: '2px',
  display: 'inline-block',
});
/**
 *
 */

export const Autocomplete = <
T,
Multiple extends boolean | undefined = false,
>(
    props: AutocompleteOwnProps<T, Multiple>,
  ): JSX.Element => {
  const {
    className,
    size,
    placeholder,
    label,
    disableSearch,
    disabled = false,
    noOptionsText,
    loading,
    loadingText,
    limitTags = 2,
    name,
    required,
    multiple = false,
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
    getInputLabelProps,
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

  const defaultRenderOption: AutocompleteOwnProps<T, Multiple>['renderOption'] = (propsOption, option) => (
    <AutocompleteDropdownGroupListItem
      {...propsOption}
      inGroup={Boolean(groupBy)}
    >
      <Typography
        variant="b3"
        color="inherit"
        noWrap
      >
        {getOptionLabel(option)}
      </Typography>
    </AutocompleteDropdownGroupListItem>
  );

  const renderGroup = (params: AutocompleteRenderGroupParams) => (
    <li key={params.key}>
      <AutocompleteDropdownGroupName
        variant="c1"
        color="gray-10"
      >
        {params.group}
      </AutocompleteDropdownGroupName>
      <AutocompleteDropdownGroupList>
        {params.children}
      </AutocompleteDropdownGroupList>
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
          <AutocompleteTagsList>
            {valueLimits.map((v, index) => (
              <AutocompleteTag
                {...getTagProps(v, index)}
                color="secondary"
                variant="contained"
                size={size}
                limitTags={limitTags}
                tagsLength={value.length}
              >
                {getOptionLabel(v)}
              </AutocompleteTag>
            ))}
          </AutocompleteTagsList>
          {!!more && (
            <AutocompleteTagSize
              variant="c2"
              color="gray-9"
            >
              {getLimitTagsText(more)}
            </AutocompleteTagSize>
          )}
        </>
      );
    }

    return getOptionLabel(value as T);
  };

  const renderedValue = renderValue();
  const isValueEmpty = renderedValue === null;

  const defaultRenderRoot: AutocompleteOwnProps<T, Multiple>['renderRoot'] = (propsRoot, valueRoot) => (
    <AutocompleteField
      {...propsRoot}
      noWrap
      // @ts-ignore
      component="button"
      type="button"
      variant={size === 'small' ? 'c1' : 'b3'}
      aria-invalid={error || undefined}
      aria-placeholder={isValueEmpty || undefined}
      multiple={multiple}
      size={size}
    >
      {isValueEmpty ? placeholder : renderedValue}
      <AutocompleteArrowIcon
        aria-disabled={disabled}
        aria-hidden
      />
      <AutocompleteNativeInput
        type="text"
        value={isValueEmpty ? '' : JSON.stringify(valueRoot)}
        tabIndex={-1}
        aria-hidden="true"
        disabled={disabled}
        autoComplete="off"
        id={id}
        name={name}
        required={required}
        readOnly={readOnly}
        onChange={() => { }}
      />
    </AutocompleteField>
  );

  const renderOption = renderOptionProp || defaultRenderOption;
  const renderRoot = renderRootProp || defaultRenderRoot;

  const renderListOption = (option: T, index: number) => {
    const optionProps = getOptionProps(option, index);

    return renderOption(optionProps, option);
  };

  return (
    <div className={className}>
      {label && (
        <AutocompleteLabel
          {...getInputLabelProps()}
        >
          <Typography
            component="span"
            variant="c2"
            color="gray-10"
          >
            {label}
          </Typography>
        </AutocompleteLabel>
      )}
      {renderRoot(
        {
          ...getRootProps(),
          disabled,
        },
        value,
        getTagProps,
      )}
      {error && errorText && (
        <AutocompleteError
          variant="c2"
          color="wrong"
        >
          {errorText}
        </AutocompleteError>
      )}
      <AutocompletePopover
        placement="bottom-start"
        allowUseSameWidth
        {...popoverProps}
      >
        {!disableSearch && (
          <Box
            borderColor="gray-3"
            borderPosition="bottom"
            borderStyle="solid"
            borderWidth={1}
          >
            <AutocompleteSearchInput
              id={otherInputProps.id}
              inputProps={otherInputProps}
              onChange={onChange}
              placeholder="Search"
              disabled={loading}
            />
          </Box>
        )}
        {loading && groupedOptions.length === 0 && (
          <AutocompleteDropdownStateItem>
            {typeof loadingText === 'string' ? (
              <Typography
                variant="b2"
                color="gray-10"
              >
                {loadingText}
              </Typography>
            ) : loadingText}
          </AutocompleteDropdownStateItem>
        )}
        {groupedOptions.length === 0 && !loading && (
          <AutocompleteDropdownStateItem>
            {typeof noOptionsText === 'string' ? (
              <Typography
                variant="b2"
                color="gray-10"
              >
                {noOptionsText}
              </Typography>
            ) : noOptionsText}
          </AutocompleteDropdownStateItem>
        )}
        {groupedOptions.length > 0 && (
          <AutocompleteDropdownList {...getListboxProps()}>
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
          </AutocompleteDropdownList>
        )}
        {allowCreateOption && !loading && (
          <Box
            borderColor="gray-3"
            borderPosition="top"
            borderStyle="solid"
            borderWidth={1}
          >
            <AutocompleteCreateNewButton
              color="secondary"
              textVariant="b3"
              onClick={handleCreate}
              startIcon={<PlusIcon />}
            >
              {createOptionText}
            </AutocompleteCreateNewButton>
          </Box>
        )}
      </AutocompletePopover>
    </div>
  );
};

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
  size: 'medium',
};
