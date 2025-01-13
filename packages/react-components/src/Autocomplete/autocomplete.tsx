import React from 'react';
import styled from '@emotion/styled';
import {
  useAutocomplete,
  UseAutocompleteProps,
  UseAutocompleteReturnType,
  AutocompleteValue,
  useOutsideClick,
} from '../hooks';
import { Popper } from '../Popper';
import { Typography, TypographyOwnProps } from '../Typography';
import { Box } from '../Box';
import { Chip } from '../Chip';
import { ArrowDropDownIcon, CloseSmallIcon } from '../icons';
import { MenuItem } from '../MenuList';

/**
 * Types.
 */
export interface AutocompleteRenderGroupParams {
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
   * Render the tags elements.
   */
  renderTag?: (
    props: ReturnType<UseAutocompleteReturnType<T, Multiple>['getTagProps']>,
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

const reactPropsRegex = /^(as|size|disabled|isHasClearIcon)$/;

/**
 * Styles.
 */
const AutocompleteField = styled(Box, { shouldForwardProp: (prop) => !reactPropsRegex.test(prop) })<
  TypographyOwnProps
  & Required<Pick<AutocompleteOwnProps<any, boolean>, 'size' | 'disabled'>>
  & { isHasClearIcon: boolean }
>(
  {
    outline: 'none',
    boxSizing: 'border-box',
    width: '100%',
    borderRadius: '4px',
    backgroundColor: 'var(--pv-color-gray-1)',
    borderStyle: 'solid',
    borderWidth: '1px',
    transition: 'background-color 200ms, color 200ms, border-color 200ms',
    appearance: 'none',
    userSelect: 'none',
    textAlign: 'left',
    fontFamily: 'inherit',
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 'var(--pv-size-base)',
    minHeight: 'var(--pv-size-base-8)',
  },
  (props) => {
    const actions = props.isHasClearIcon ? '48px' : '24px';

    switch (props.size) {
      case 'small':
        return {
          minHeight: 'var(--pv-size-base-6)',
          padding: `1px calc(var(--pv-size-base-2) + ${actions}) 1px var(--pv-size-base-2)`,
        };

      case 'medium':
        return {
          minHeight: 'var(--pv-size-base-7)',
          padding: `1px calc(var(--pv-size-base-2) + ${actions}) 1px var(--pv-size-base-2)`,
        };

      default:
        return {
          minHeight: 'var(--pv-size-base-8)',
          padding: `3px calc(var(--pv-size-base-2) + ${actions}) 3px var(--pv-size-base-2)`,
        };
    }
  },
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
      ...(props.disabled && {
        cursor: 'not-allowed',
        borderColor: borderColorDisabled,
        color: colorDisabled,
      }),
      ...(!props.disabled && {
        color,
        'cursor': 'text',
        '&:hover': {
          'borderColor': borderColorHover,
          '[aria-label="Clear"]': {
            visibility: 'visible',
          },
        },
        '&[aria-placeholder]': {
          color: colorPlaceholder,
        },
        '&[aria-invalid]': {
          borderColor: invalidBorderColor,
        },
        '&:focus-visible': {
          'borderColor': borderColorFocus,
          '[aria-label="Clear"]': {
            visibility: 'visible',
          },
        },
        '&:focus-within': {
          'borderColor': borderColorFocus,
          '[aria-label="Clear"]': {
            visibility: 'visible',
          },
        },
      }),
    });
  },
);

const AutocompleteActions = styled('div')({
  position: 'absolute',
  right: '0px',
  top: 'calc(50% - 12px)',
  display: 'flex',
  alignItems: 'center',
  margin: '0px var(--pv-size-base)',
});

const AutocompleteClearButton = styled('button')({
  color: 'var(--pv-color-gray-10)',
  cursor: 'pointer',
  visibility: 'hidden',
  display: 'inline-flex',
  appearance: 'none',
  outline: '0px',
  padding: '0px',
  borderWidth: '0px',
  background: 'transparent',
});

const AutocompleteOpenButton = styled(ArrowDropDownIcon)<{ open: boolean }>({
  'color': 'var(--pv-color-gray-10)',
  '&[aria-disabled="true"]': {
    color: 'inherit',
  },
}, (props) => ({
  ...(props.open && {
    transform: 'rotate(180deg)',
  }),
}));

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

const AutocompleteDropdownGroupListItem = styled(MenuItem)<Required<{ inGroup: boolean }>>(
  (props) => ({
    ...(props.inGroup && {
      padding: '0px var(--pv-size-base-2) 0 var(--pv-size-base-3)',
    }),
  }),
);

const AutocompletePopover = styled(Popper)(
  {
    minWidth: 240,
    outline: 0,
    borderRadius: '4px',
    minHeight: '16px',
    maxHeight: 'calc(100% - 32px)',
    zIndex: 1300,
  },
  (props) => {
    const isDark = props.theme.mode === 'dark';

    let backgroundColor = 'var(--pv-color-white)';
    let boxShadow = 'var(--pv-shadow-light-low)';

    if (isDark) {
      backgroundColor = 'var(--pv-color-gray-3)';
      boxShadow = 'var(--pv-shadow-dark-medium)';
    }

    return ({
      backgroundColor,
      boxShadow,
    });
  },
);

const AutocompleteTag = styled(Chip)<{
  size: AutocompleteOwnProps<any>['size'];
}>((props) => ({
  label: 'Autocomplete-tag',
  borderRadius: '3px',
  margin: 0,
  ...(props.size === 'small' && {
    height: 'var(--pv-size-base-5)',
  }),
}));

const AutocompleteTagSize = styled(Typography)({
  margin: '0 var(--pv-size-base-2)',
});

const AutocompleteInputField = styled(Typography)(
  () => ({
    fontFamily: 'inherit',
    outline: 'none',
    boxSizing: 'border-box',
    minWidth: '30px',
    width: 0,
    flexGrow: 1,
    backgroundColor: 'transparent',
    borderStyle: 'none',
    appearance: 'none',
  }),
  (props) => {
    const isDark = props.theme.mode === 'dark';
    const color = isDark
      ? 'var(--pv-color-white)'
      : 'var(--pv-color-black)';

    let colorPlaceholder = 'var(--pv-color-gray-9)';
    let colorDisabled = 'var(--pv-color-gray-7)';

    if (isDark) {
      colorPlaceholder = 'var(--pv-color-gray-6)';
      colorDisabled = 'var(--pv-color-gray-4)';
    }

    return ({
      color,
      '&::placeholder': {
        color: colorPlaceholder,
      },
      '&:disabled': {
        cursor: 'not-allowed',
        color: colorDisabled,
      },
    });
  },
);

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
>(props: AutocompleteOwnProps<T, Multiple>): JSX.Element => {
  const {
    className,
    size,
    placeholder,
    label,
    disabled = false,
    noOptionsText,
    loading,
    loadingText,
    limitTags = -1,
    name,
    required,
    multiple = false,
    readOnly,
    error,
    errorText,
    renderRoot: renderRootProp,
    renderOption: renderOptionProp,
    renderTag: renderTagProp,
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
    getClearProps,
  } = useAutocomplete(props);
  const {
    onChange,
    ...otherInputProps
  } = getInputProps();

  const rootProps = getRootProps();
  const popoverProps = getPopoverProps();

  const handleCreate = (event: React.SyntheticEvent) => {
    if (onCreate && searchValue.length) {
      onCreate(event, searchValue);
    }

    popoverProps.onClose(event);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // Wait until IME is settled.
    if (event.which !== 229) {
      switch (event.key) {
        case 'Tab': {
          if (popoverProps.open) {
            popoverProps.onClose(event);
          }

          break;
        }

        case 'Escape':
          // Prevent cursor move
          event.preventDefault();
          popoverProps.onClose(event);

          break;

        case 'Enter':
          // Prevent cursor move
          event.preventDefault();
          handleCreate(event);
          popoverProps.onKeyDown(event);

          break;

        default:
          popoverProps.onKeyDown(event);
      }
    }
  };

  const defaultRenderOption: AutocompleteOwnProps<T, Multiple>['renderOption'] = (propsOption, option) => (
    <AutocompleteDropdownGroupListItem
      {...propsOption}
      inGroup={Boolean(groupBy)}
    >
      {getOptionLabel(option)}
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

  const defaultRenderTag: AutocompleteOwnProps<T, Multiple>['renderTag'] = (propsOption, option) => (
    <AutocompleteTag
      {...propsOption}
      color="secondary"
      variant="contained"
      size={size}
      disabled={disabled}
    >
      {getOptionLabel(option)}
    </AutocompleteTag>
  );
  const renderRenderTag = renderTagProp || defaultRenderTag;
  const renderListTag = (option: T, index: number) => {
    const optionProps = getTagProps(option, index);

    return renderRenderTag(optionProps, option);
  };

  const renderValue = () => {
    if (!value || (Array.isArray(value) && value.length === 0)) {
      return null;
    }

    if (Array.isArray(value)) {
      const more = (value.length > limitTags && limitTags !== -1)
        && !popoverProps.open
        ? (value.length - limitTags)
        : 0;
      const valueLimits = more > 0 ? value.slice(0, limitTags) : value;

      return (
        <>
          {valueLimits.map(renderListTag)}
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
  const popoverRef = useOutsideClick(popoverProps.onClose);

  const defaultRenderRoot: AutocompleteOwnProps<T, Multiple>['renderRoot'] = ({
    // @ts-expect-error: 'ref' type may not match
    ref,
    ...propsRoot
  }, valueRoot) => (
    <AutocompleteField
      aria-invalid={error || undefined}
      aria-placeholder={isValueEmpty || undefined}
      size={size}
      disabled={disabled}
      ref={ref}
      // @ts-expect-error: `component` is not a valid prop
      component="label"
      isHasClearIcon={!isValueEmpty && !readOnly}
    >
      {/* eslint-disable-next-line @stylistic/multiline-ternary */}
      {multiple ? (
        <>
          {isValueEmpty ? null : renderedValue}
          <AutocompleteInputField
            {...otherInputProps}
            {...propsRoot}
            noWrap
            // @ts-expect-error: `component` is not a valid prop
            component="input"
            type="text"
            variant={size === 'small' ? 'c1' : 'b3'}
            placeholder={placeholder}
            readOnly={readOnly}
            onChange={onChange}
            onKeyDown={handleKeyDown}
          />
        </>
      ) : (
        <AutocompleteInputField
          {...otherInputProps}
          {...propsRoot}
          noWrap
          // @ts-expect-error: `component` is not a valid prop
          component="input"
          type="text"
          value={searchValue || renderedValue || ''}
          variant={size === 'small' ? 'c1' : 'b3'}
          placeholder={placeholder}
          readOnly={readOnly}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
      )}
      <AutocompleteActions>
        {!isValueEmpty && !readOnly
          ? (
              <AutocompleteClearButton
                type="button"
                disabled={disabled}
                title="Clear"
                aria-label="Clear"
                {...getClearProps()}
              >
                <CloseSmallIcon
                  aria-hidden
                />
              </AutocompleteClearButton>
            )
          : null}
        <AutocompleteOpenButton
          role="button"
          title="Open"
          aria-label="Open"
          aria-disabled={disabled}
          open={popoverProps.open}
        />
      </AutocompleteActions>
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
          ...rootProps,
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
        tabIndex={-1}
      >
        <div ref={popoverRef}>
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
        </div>
      </AutocompletePopover>
    </div>
  );
};

Autocomplete.defaultProps = {
  noOptionsText: 'No options',
  loading: false,
  loadingText: 'Loading...',
  required: false,
  size: 'medium',
};
