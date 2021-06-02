import * as React from 'react';
import { Popover } from '../Popover';
import { Typography } from '../Typography';
import { Chip } from '../Chip';
import { useMergedRef } from '../hooks';
import { css, cx } from '../styles';

export type ComboBoxChangeEventType = React.ChangeEvent<{
  value: string[];
  name?: string;
}>;

type OptionType = {
  value: string;
  label: string;
  disabled?: boolean;
};

type BaseProps = {
  options: OptionType[];
  name?: string;
  defaultValue?: string[];
  onChange?: (event: ComboBoxChangeEventType) => void;
  label?: string;
};

type ComboBoxProps = BaseProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'children' | 'onChange'>;

const stylesInputBase = () => css({
  label: 'ComboBox-input',
  fontFamily: 'inherit',
  outline: 'none',
  boxSizing: 'border-box',
  width: '100%',
  borderRadius: '4px',
  color: 'var(--pv-color-black)',
  backgroundColor: 'var(--pv-color-gray-1)',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'var(--pv-color-gray-8)',
  transition: 'background-color 200ms, color 200ms, border-color 200ms',
  display: 'block',
  appearance: 'none',
  height: 'auto',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  cursor: 'pointer',
  userSelect: 'none',
  '&::placeholder': {
    color: 'var(--pv-color-gray-9)',
  },
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
}, {
  fontWeight: 'var(--pv-text-c1-weight)',
  fontSize: 'var(--pv-text-c1-size)',
  lineHeight: 'var(--pv-text-c1-height)',
  letterSpacing: 'var(--pv-text-c1-spacing)',
} as any);

const stylesInputSizeLarge = () => css({
  label: 'large',
  minHeight: '40px',
  padding: '2px',
});

const stylesChipsContainer = () => css({
  label: 'ComboBox-chips-container',
  display: 'flex',
  flexWrap: 'wrap',
});

const stylesChip = () => css({
  label: 'ComboBox-chip',
  margin: '2px',
});

const stylesMenuList = () => css({
  label: 'ComboBox-menu-list',
  padding: '7px 0px',
  outline: 'none',
  minWidth: '220px',
});

const stylesMenuItem = () => css({
  label: 'ComboBox-menu-item',
  padding: '0px 10px',
  fontFamily: 'inherit',
  outline: 'none',
  width: '100%',
  height: '35px',
  display: 'flex',
  textAlign: 'left',
  alignItems: 'center',
  justifyContent: 'flex-start',
  textDecoration: 'none',
  userSelect: 'none',
  cursor: 'pointer',
  transition: 'background-color 200ms',
  backgroundColor: 'transparent',
  border: 'none',
  color: 'var(--pv-color-black)',
  '&:not(:disabled)': {
    '&:hover': {
      backgroundColor: 'var(--pv-color-gray-3)',
    },
    '&:focus': {
      backgroundColor: 'var(--pv-color-gray-4)',
    },
    '&:active': {
      backgroundColor: 'var(--pv-color-gray-5)',
    },
  },
  '&:disabled': {
    color: 'var(--pv-color-gray-7)',
    cursor: 'not-allowed',
  },
});

const stylesLabel = () => css({
  label: 'ComboBox-label',
  marginBottom: '2px',
  display: 'inline-block',
});

const stylesCheckbox = () => css({
  label: 'ComboBox-checkbox',
  width: '20px',
  height: '20px',
  margin: '0px 10px 0 5px',
});

export const ComboBox = React.forwardRef<HTMLDivElement, ComboBoxProps>((props, ref) => {
  const {
    options,
    name,
    defaultValue,
    className,
    label: labelProp,
    onChange,
    ...other
  } = props;
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string[]>(defaultValue || []);
  const rootRef = React.useRef(null);
  const multiRef = useMergedRef(ref, rootRef);

  const handleRootClick = () => {
    setOpen(true);
  };

  const handleRootKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      setOpen(true);
    }
  };

  const handlePopoverClose = () => {
    setOpen(false);
  };

  const handleMenuItemClick = (
    option: OptionType,
  ) => () => {
    let newSelected: string[] = [];

    if (selected.includes(option.value)) {
      newSelected = selected.filter((value) => value !== option.value);
    } else {
      newSelected = [
        ...selected,
        option.value,
      ];
    }

    setSelected(newSelected);

    if (onChange) {
      const event = new Event('change');

      Object.defineProperty(event, 'target', {
        writable: true,
        value: {
          name,
          value: newSelected,
        },
      });

      onChange(event as any);
    }
  };

  const renderOption = (option: OptionType) => {
    const { value, label, disabled } = option;
    const isSelected = selected.includes(value);

    return (
      <button
        key={value}
        type="button"
        // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
        role="option"
        onClick={handleMenuItemClick(option)}
        disabled={disabled}
        data-value={value}
        aria-selected={isSelected}
        className={cx(stylesMenuItem())}
      >
        <input
          type="checkbox"
          checked={isSelected}
          tabIndex={-1}
          readOnly
          className={cx(stylesCheckbox())}
        />
        <Typography
          variant="b3"
        >
          {label}
        </Typography>
      </button>
    );
  };

  const renderHiddenInputs = () => (
    <div>
      <input
        type="hidden"
        value={selected.join(',')}
        name={name}
      />
    </div>
  );

  const renderSelectedValue = (option: OptionType) => {
    const { value, label } = option;

    return (
      <Chip
        key={value}
        className={cx(stylesChip())}
        onDelete={handleMenuItemClick(option)}
      >
        {label}
      </Chip>
    );
  };

  const renderSelectedValues = () => {
    if (!selected.length) {
      return null;
    }

    return (
      <div
        className={cx(stylesChipsContainer())}
      >
        {options.map((option) => {
          if (selected.includes(option.value)) {
            return renderSelectedValue(option);
          }

          return null;
        })}
      </div>
    );
  };

  return (
    <>
      <div
        {...other}
        ref={multiRef}
        className={className}
      >
        {labelProp && (
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label
            className={cx(stylesLabel())}
          >
            <Typography
              component="span"
              variant="c2"
              color="gray-10"
            >
              {labelProp}
            </Typography>
          </label>
        )}
        <div
          tabIndex={0}
          role="button"
          aria-haspopup="listbox"
          onClick={handleRootClick}
          onKeyDown={handleRootKeyDown}
          className={cx({
            [stylesInputBase()]: true,
            [stylesInputSizeLarge()]: true,
          })}
        >
          {renderSelectedValues()}
        </div>
        {renderHiddenInputs()}
      </div>
      <Popover
        modalProps={{
          disableAutoFocus: true,
        }}
        ref={ref}
        open={open}
        anchorEl={rootRef.current}
        onClose={handlePopoverClose}
        placement="bottom-start"
      >
        <div
          role="listbox"
          tabIndex={-1}
          className={cx(stylesMenuList())}
        >
          {options.map((option) => renderOption(option))}
        </div>
      </Popover>
    </>
  );
});

ComboBox.displayName = 'ComboBox';

ComboBox.defaultProps = {};
