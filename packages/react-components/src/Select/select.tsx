import React from 'react';
import styled from '@emotion/styled';
import {
  useAutocomplete,
  IUseAutocompleteProps,
  IUseAutocompleteReturnType,
  TAutocompleteValue,
} from '../hooks';
import { Popover } from '../Popover';
import { TextField } from '../TextField';
import { Typography, ITypographyOwnProps } from '../Typography';
import { Box } from '../Box';
import { Button } from '../Button';
import { ArrowDropDownIcon, PlusIcon } from '../icons';
import { Checkbox } from '../Checkbox';
import {
  TAutocompleteOwnProps,
  AutocompleteTagSize,
  AutocompleteNativeInput,
  AutocompleteDropdownStateItem,
  AutocompleteDropdownList,
  AutocompleteDropdownGroupName,
  AutocompleteDropdownGroupList,
  AutocompleteDropdownGroupListItem,
  AutocompleteLabel,
  AutocompleteError,
} from '../Autocomplete/autocomplete';
import { AutocompleteTag } from '../Autocomplete/autocomplete_tag';

/**
 * Interfaces.
 */
export interface ISelectRenderGroupParams {
  key: string | number;
  group: string;
  children?: React.ReactNode;
};

export type TSelectOwnProps<
  T,
  Multiple extends boolean | undefined = undefined,
> = IUseAutocompleteProps<T, Multiple> & {
  /**
   * The className of the component.
   */
  className?: string;
  /**
   * The size of the root component.
   * @default 'medium'
   */
  size?: (
    'small'
    | 'medium'
    | 'large'
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
   * @default 'No options'
   */
  noOptionsText?: React.ReactNode;
  /**
   * If `true`, the component is in a loading state.
   * This shows the `loadingText` in place of suggestions (only if there are no
   * suggestions to show, e.g. `options` are empty).
   * @default false
   */
  loading?: boolean;
  /**
   * Text to display when in a loading state.
   * @default 'Loading...'
   */
  loadingText?: React.ReactNode;
  /**
   * The maximum number of tags that will be visible when not focused.
   * @default 2
   */
  limitTags?: number;
  /**
   * If `true`, the popup search input will be hidden.
   * @default false
   */
  disableSearch?: boolean;
  /**
   * If `true`, the autocomplete will be disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Name attribute of the `input` element.
   */
  name?: string;
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required?: boolean;
  /**
   * Text to display when in the create button element.
   * @default 'Create "{{value}}"'
   */
  createOptionText?: string;
  /**
   * If `true`, the create button element will be shown.
   * @default false
   */
  allowCreateOption?: boolean;
  /**
   * If `true`, the `input` will indicate an error.
   */
  error?: boolean;
  /**
   * The content of the error message.
   */
  errorText?: string;
  /**
   * Render the root element.
   */
  renderRoot?: (
    props: object,
    value: TAutocompleteValue<T, Multiple>,
    getTagProps: IUseAutocompleteReturnType<T, Multiple>['getTagProps'],
  ) => React.ReactNode;
  /**
   * Render the option, use `getOptionLabel` by default.
   */
  renderOption?: (
    props: ReturnType<IUseAutocompleteReturnType<T, Multiple>['getOptionProps']>,
    option: T,
  ) => React.ReactNode;
  /**
   * The label to display when the tags are truncated (`limitTags`).
   * @default (more) => `${more} more`
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
const SelectField = styled(Typography)<
ITypographyOwnProps & Required<Pick<TSelectOwnProps<any, boolean>, 'size' | 'multiple'>>
>(
  (props) => ({
    outline: 'none',
    boxSizing: 'border-box',
    width: '100%',
    borderRadius: '4px',
    padding: '0 calc(var(--pv-size-base) * 2 + 24px) 0 calc(var(--pv-size-base) * 2)',
    backgroundColor: 'var(--pv-color-gray-1)',
    borderStyle: 'solid',
    borderWidth: '1px',
    transition: 'background-color 200ms, color 200ms, border-color 200ms',
    appearance: 'none',
    userSelect: 'none',
    textAlign: 'left',
    cursor: 'pointer',
    fontFamily: 'inherit',
    height: 'calc(var(--pv-size-base) * 8)',
    position: 'relative',
    ...(props.size === 'small' && {
      height: 'calc(var(--pv-size-base) * 6)',
    }),
    ...(props.size === 'medium' && {
      height: 'calc(var(--pv-size-base) * 7)',
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
    const borderColorHover = 'var(--pv-color-gray-10)';
    let borderColorDisabled = 'var(--pv-color-gray-5)';
    let colorDisabled = 'var(--pv-color-gray-7)';
    const invalidBorderColor = 'var(--pv-color-wrong)';
    const borderColorFocus = 'var(--pv-color-secondary)';

    if (isDark) {
      borderColor = 'var(--pv-color-gray-5)';
      colorPlaceholder = 'var(--pv-color-gray-6)';
      borderColorDisabled = 'var(--pv-color-gray-4)';
      colorDisabled = 'var(--pv-color-gray-4)';
    }

    return ({
      borderColor,
      '&:hover': {
        borderColor: borderColorHover,
      },
      '&:disabled': {
        cursor: 'not-allowed',
        borderColor: borderColorDisabled,
        color: colorDisabled,
      },
      '&:not(:disabled)': {
        color,
        '&[aria-placeholder]': {
          color: colorPlaceholder,
        },
        '&[aria-invalid]': {
          borderColor: invalidBorderColor,
        },
        '&:focus-visible': {
          borderColor: borderColorFocus,
        },
      },
    });
  },
);

const SelectArrowIcon = styled(ArrowDropDownIcon)({
  position: 'absolute',
  right: '0px',
  top: 'calc(50% - 12px)',
  margin: '0px var(--pv-size-base)',
  color: 'var(--pv-color-gray-10)',
  '&[aria-disabled="true"]': {
    color: 'inherit',
  },
});

const SelectPopover = styled(Popover)({
  minWidth: 240,
});

const SelectTagsList = styled('div')({
  overflow: 'hidden',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(0, max-content))',
  gap: 'var(--pv-size-base)',
});

const SelectSearchInput = styled(TextField)({
  padding: 'calc(var(--pv-size-base) * 3) calc(var(--pv-size-base) * 3) calc(var(--pv-size-base) * 2)',
});

const SelectCreateNewButton = styled(Button)({
  width: '100%',
  borderRadius: 0,
  justifyContent: 'left',
  padding: '0px calc(var(--pv-size-base) * 2)',
});
/**
 *
 */

export const Select = <
  T,
  Multiple extends boolean | undefined = false,
>(
  props: TSelectOwnProps<T, Multiple>,
): React.JSX.Element => {
  const {
    className,
    size = 'medium',
    placeholder,
    label,
    disableSearch = false,
    disabled = false,
    noOptionsText = 'No options',
    loading = false,
    loadingText = 'Loading...',
    limitTags = 2,
    name,
    required = false,
    multiple = false,
    readOnly,
    createOptionText = 'Create "{{value}}"',
    allowCreateOption = false,
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

  const defaultRenderOption: TSelectOwnProps<T, Multiple>['renderOption'] = ({ key, ...propsOption }, option) => (
    <AutocompleteDropdownGroupListItem
      key={key}
      {...propsOption}
      inGroup={Boolean(groupBy)}
      startIcon={
        multiple
          ? (
              <Checkbox
                checked={propsOption['aria-selected']}
                inputProps={{
                  readOnly: true,
                }}
              />
            )
          : undefined
      }
    >
      {getOptionLabel(option)}
    </AutocompleteDropdownGroupListItem>
  );

  const renderGroup = (params: ISelectRenderGroupParams) => (
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

  const defaultRenderTag: TAutocompleteOwnProps<T, Multiple>['renderTag'] = ({ key, ...propsOption }, option) => (
    <AutocompleteTag
      key={key}
      {...propsOption}
    >
      {getOptionLabel(option)}
    </AutocompleteTag>
  );

  const renderListTag = (option: T, index: number) => {
    const optionProps = getTagProps(option, index);

    return defaultRenderTag(optionProps, option);
  };

  const renderValue = () => {
    if (!value || (Array.isArray(value) && value.length === 0)) {
      return null;
    }

    if (Array.isArray(value)) {
      const more = (value.length > limitTags) ? (value.length - limitTags) : 0;
      const valueLimits = more > 0 ? value.slice(0, limitTags) : value;

      return (
        <>
          <SelectTagsList>
            {valueLimits.map(renderListTag)}
          </SelectTagsList>
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

  const defaultRenderRoot: TSelectOwnProps<T, Multiple>['renderRoot'] = (propsRoot, valueRoot) => (
    <SelectField
      {...propsRoot}
      noWrap
      // @ts-expect-error: `component` is not a valid prop
      component="button"
      type="button"
      variant={size === 'small' ? 'c1' : 'b3'}
      aria-invalid={error || undefined}
      aria-placeholder={isValueEmpty || undefined}
      multiple={multiple}
      size={size}
    >
      {isValueEmpty ? placeholder : renderedValue}
      <SelectArrowIcon
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
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => { }}
      />
    </SelectField>
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
      <SelectPopover
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
            <SelectSearchInput
              id={otherInputProps.id}
              inputProps={otherInputProps}
              placeholder="Search"
              disabled={loading}
              onChange={onChange}
            />
          </Box>
        )}
        {loading && groupedOptions.length === 0 && (
          <AutocompleteDropdownStateItem>
            {typeof loadingText === 'string'
              ? (
                  <Typography
                    variant="b2"
                    color="gray-10"
                  >
                    {loadingText}
                  </Typography>
                )
              : loadingText}
          </AutocompleteDropdownStateItem>
        )}
        {groupedOptions.length === 0 && !loading && (
          <AutocompleteDropdownStateItem>
            {typeof noOptionsText === 'string'
              ? (
                  <Typography
                    variant="b2"
                    color="gray-10"
                  >
                    {noOptionsText}
                  </Typography>
                )
              : noOptionsText}
          </AutocompleteDropdownStateItem>
        )}
        {groupedOptions.length > 0 && (
          <AutocompleteDropdownList {...getListboxProps()}>
            {groupedOptions
              .map((option, index) => {
                // @ts-expect-error: 'options' may exist when grouped
                if (groupBy && 'options' in option) {
                  return renderGroup({
                    key: option.key,
                    group: option.group,
                    children: option.options.map((option2, index2) => (
                      renderListOption(option2, option.index + index2)
                    )),
                  });
                }

                return renderListOption(option as T, index);
              })}
          </AutocompleteDropdownList>
        )}
        {(allowCreateOption && searchValue.length > 0 && !loading) && (
          <Box
            borderColor="gray-3"
            borderPosition="top"
            borderStyle="solid"
            borderWidth={1}
          >
            <SelectCreateNewButton
              color="secondary"
              textVariant="b3"
              startIcon={<PlusIcon />}
              onClick={handleCreate}
            >
              {createOptionText.replace('{{value}}', searchValue)}
            </SelectCreateNewButton>
          </Box>
        )}
      </SelectPopover>
    </div>
  );
};

Select.displayName = 'Select';
