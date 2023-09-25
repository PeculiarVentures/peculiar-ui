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
const AutocompleteRoot = styled(Typography)<TypographyOwnProps & Pick<AutocompleteProps<any>, 'size' | 'multiple'>>(
  (props) => ({
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
  }),
);

const GroupNameRoot = styled(Typography)({
  padding: 'var(--pv-size-base-2)',
});

const ContainerRoot = styled('div')({
  position: 'relative',
  display: 'inline-flex',
  width: '100%',
});

const InputArrowIconRoot = styled(ArrowDropDownIcon)({
  position: 'absolute',
  right: '0px',
  top: 'calc(50% - 12px)',
  pointerEvents: 'none',
  margin: '0px var(--pv-size-base)',
  color: 'var(--pv-color-gray-10)',
  '&[aria-disabled="true"]': {
    color: 'var(--pv-color-gray-7)',
  },
});

const ListBoxRoot = styled('ul')({
  maxHeight: '36vh',
  overflowY: 'auto',
  margin: 0,
  listStyleType: 'none',
  position: 'relative',
  padding: '10px 0',
});

const OptionRoot = styled('li')<{ inGroup: boolean }>((props) => ({
  label: 'Autocomplete-option',
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
}));

const InputSearchRoot = styled(TextField)({
  padding: 'var(--pv-size-base-3) var(--pv-size-base-3) var(--pv-size-base-2)',
});

const ListBoxStateRoot = styled('div')({
  padding: 'var(--pv-size-base-3) var(--pv-size-base-2)',
});

const PopoverRoot = styled(Popover)({
  minWidth: 240,
});

const TagsListRoot = styled('div')({
  overflow: 'hidden',
  width: '100%',
});

const TagRoot = styled(Chip)<{
  tagsLength: number,
  limitTags: number,
  size: AutocompleteProps<any>['size'],
}>((props) => ({
  label: 'Autocomplete-tag',
  borderRadius: '2px',
  borderColor: 'var(--pv-color-gray-7)',
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

const TagSizeRoot = styled(Typography)({
  margin: '0 var(--pv-size-base-2)',
});

const NativeInputRoot = styled('input')({
  bottom: 0,
  left: 0,
  height: '100%',
  position: 'absolute',
  opacity: 0,
  pointerEvents: 'none',
  width: '100%',
  boxSizing: 'border-box',
});

const GroupListRoot = styled('ul')({
  padding: 0,
  listStyleType: 'none',
});

const ButtonCreateNewRoot = styled(Button)({
  width: '100%',
  borderRadius: 0,
  justifyContent: 'left',
  padding: '0px var(--pv-size-base-2)',
});

const ErrorRoot = styled(Typography)({
  marginTop: '2px',
});
/**
 *
 */

export const Autocomplete = <T, Multiple extends boolean | undefined = undefined>(
  props: AutocompleteProps<T, Multiple>,
): JSX.Element => {
  const {
    size,
    placeholder,
    disableSearch,
    disabled = false,
    noOptionsText,
    loading,
    loadingText,
    limitTags = 2,
    name,
    required,
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
    <OptionRoot
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
    </OptionRoot>
  );

  const renderGroup = (params: AutocompleteRenderGroupParams) => (
    <li key={params.key}>
      <GroupNameRoot
        variant="c1"
        color="gray-10"
      >
        {params.group}
      </GroupNameRoot>
      <GroupListRoot>
        {params.children}
      </GroupListRoot>
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
          <TagsListRoot>
            {valueLimits.map((v, index) => (
              <TagRoot
                {...getTagProps(v, index)}
                color="default"
                variant="contained"
                size={size}
                limitTags={limitTags}
                tagsLength={value.length}
              >
                {getOptionLabel(v)}
              </TagRoot>
            ))}
          </TagsListRoot>
          {!!more && (
            <TagSizeRoot
              variant="c2"
              color="gray-9"
            >
              {getLimitTagsText(more)}
            </TagSizeRoot>
          )}
        </>
      );
    }

    return getOptionLabel(value as T);
  };

  const renderedValue = renderValue();
  const isValueEmpty = renderedValue === null;

  const defaultRenderRoot: AutocompleteProps<T, Multiple>['renderRoot'] = (propsRoot, valueRoot) => (
    <ContainerRoot>
      <AutocompleteRoot
        {...propsRoot}
        {...props}
        noWrap
        // @ts-ignore
        component="button"
        type="button"
        variant="c1"
        color={isValueEmpty ? 'gray-9' : 'black'}
        aria-invalid={error || undefined}
      >
        {isValueEmpty ? placeholder : renderedValue}
      </AutocompleteRoot>
      <InputArrowIconRoot
        aria-disabled={disabled}
        aria-hidden
      />
      <NativeInputRoot
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
    </ContainerRoot>
  );

  const renderOption = renderOptionProp || defaultRenderOption;
  const renderRoot = renderRootProp || defaultRenderRoot;

  const renderListOption = (option: T, index: number) => {
    const optionProps = getOptionProps(option, index);

    return renderOption(optionProps, option);
  };

  return (
    <>
      {renderRoot({ ...getRootProps(), disabled }, value, getTagProps)}
      {error && errorText && (
        <ErrorRoot
          variant="c2"
          color="wrong"
        >
          {errorText}
        </ErrorRoot>
      )}
      <PopoverRoot
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
            <InputSearchRoot
              inputProps={otherInputProps}
              onChange={onChange}
              placeholder="Search"
              disabled={loading}
            />
          </Box>
        )}
        {loading && groupedOptions.length === 0 && (
          <ListBoxStateRoot>
            {typeof loadingText === 'string' ? (
              <Typography
                variant="b2"
                color="gray-10"
              >
                {loadingText}
              </Typography>
            ) : loadingText}
          </ListBoxStateRoot>
        )}
        {groupedOptions.length === 0 && !loading && (
          <ListBoxStateRoot>
            {typeof noOptionsText === 'string' ? (
              <Typography
                variant="b2"
                color="gray-10"
              >
                {noOptionsText}
              </Typography>
            ) : noOptionsText}
          </ListBoxStateRoot>
        )}
        {groupedOptions.length > 0 && (
          <ListBoxRoot {...getListboxProps()}>
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
          </ListBoxRoot>
        )}
        {allowCreateOption && !loading && (
          <Box
            borderColor="gray-3"
            borderPosition="top"
            borderStyle="solid"
            borderWidth={1}
          >
            <ButtonCreateNewRoot
              color="secondary"
              textVariant="b3"
              onClick={handleCreate}
              startIcon={<PlusIcon />}
            >
              {createOptionText}
            </ButtonCreateNewRoot>
          </Box>
        )}
      </PopoverRoot>
    </>
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
  size: 'large',
};
