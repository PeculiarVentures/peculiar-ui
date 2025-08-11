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
import { Chip } from '../Chip';
import { Button } from '../Button';
import { ArrowDropDownIcon, PlusIcon } from '../icons';
import { MenuItem } from '../MenuList';
import { Checkbox } from '../Checkbox';
import { TAutocompleteOwnProps } from '../Autocomplete/autocomplete';

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

const SelectNativeInput = styled('input')({
  bottom: 0,
  left: 0,
  height: '100%',
  position: 'absolute',
  opacity: 0,
  pointerEvents: 'none',
  width: '100%',
  boxSizing: 'border-box',
});

const SelectDropdownStateItem = styled('div')({
  padding: 'var(--pv-size-base-3) var(--pv-size-base-2)',
});

const SelectDropdownList = styled('ul')({
  maxHeight: '36vh',
  overflowY: 'auto',
  margin: 0,
  listStyleType: 'none',
  position: 'relative',
  padding: '10px 0',
});

const SelectDropdownGroupName = styled(Typography)(
  (props) => ({
    padding: 'var(--pv-size-base-2)',
    color: props.theme.mode === 'dark'
      ? 'var(--pv-color-gray-6)'
      : 'var(--pv-color-gray-9)',
  }),
);

const SelectDropdownGroupList = styled('ul')({
  padding: 0,
  listStyleType: 'none',
});

const SelectDropdownGroupListItem = styled(MenuItem)<Required<{ inGroup: boolean }>>(
  (props) => ({
    ...(props.inGroup && {
      padding: '0px var(--pv-size-base-2) 0 var(--pv-size-base-3)',
    }),
  }),
);

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

const SelectTag = styled(Chip)({
  label: 'Select-tag',
  borderRadius: '4px',
  height: 'var(--pv-size-base-5)',
  margin: 0,
  backgroundColor: 'var(--pv-color-gray-2)',
  borderColor: 'var(--pv-color-gray-5)',
  gap: '0px',
});

const SelectTagSize = styled(Typography)({
  margin: '0 var(--pv-size-base-2)',
});

const SelectSearchInput = styled(TextField)({
  padding: 'var(--pv-size-base-3) var(--pv-size-base-3) var(--pv-size-base-2)',
});

const SelectCreateNewButton = styled(Button)({
  width: '100%',
  borderRadius: 0,
  justifyContent: 'left',
  padding: '0px var(--pv-size-base-2)',
});

const SelectError = styled(Typography)({
  marginTop: '2px',
});

const SelectLabel = styled('label')({
  label: 'TextField-label',
  marginBottom: '2px',
  display: 'inline-block',
});
/**
 *
 */

export const Select = <
  T,
  Multiple extends boolean | undefined = false,
>(
  props: TSelectOwnProps<T, Multiple>,
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

  const defaultRenderOption: TSelectOwnProps<T, Multiple>['renderOption'] = ({ key, ...propsOption }, option) => (
    <SelectDropdownGroupListItem
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
    </SelectDropdownGroupListItem>
  );

  const renderGroup = (params: ISelectRenderGroupParams) => (
    <li key={params.key}>
      <SelectDropdownGroupName
        variant="c1"
        color="gray-10"
      >
        {params.group}
      </SelectDropdownGroupName>
      <SelectDropdownGroupList>
        {params.children}
      </SelectDropdownGroupList>
    </li>
  );

  const defaultRenderTag: TAutocompleteOwnProps<T, Multiple>['renderTag'] = ({ key, ...propsOption }, option) => (
    <SelectTag
      key={key}
      {...propsOption}
      color="default"
      variant="outlined"
      disabled={disabled}
    >
      {getOptionLabel(option)}
    </SelectTag>
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
            <SelectTagSize
              variant="c2"
              color="gray-9"
            >
              {getLimitTagsText(more)}
            </SelectTagSize>
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
      <SelectNativeInput
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
        <SelectLabel
          {...getInputLabelProps()}
        >
          <Typography
            component="span"
            variant="c2"
            color="gray-10"
          >
            {label}
          </Typography>
        </SelectLabel>
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
        <SelectError
          variant="c2"
          color="wrong"
        >
          {errorText}
        </SelectError>
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
          <SelectDropdownStateItem>
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
          </SelectDropdownStateItem>
        )}
        {groupedOptions.length === 0 && !loading && (
          <SelectDropdownStateItem>
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
          </SelectDropdownStateItem>
        )}
        {groupedOptions.length > 0 && (
          <SelectDropdownList {...getListboxProps()}>
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
          </SelectDropdownList>
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

Select.defaultProps = {
  disableSearch: false,
  noOptionsText: 'No options',
  loading: false,
  loadingText: 'Loading...',
  limitTags: 2,
  required: false,
  allowCreateOption: false,
  createOptionText: 'Create "{{value}}"',
  size: 'medium',
};
