import * as React from 'react';
import { Box } from '../Box';
import { DotIcon } from '../icons';
import { useId } from '../hooks';
import { css, cx } from '../styles';

type BaseProps = {
  /**
   * If `true`, the component is checked.
   */
  checked?: boolean;
  /**
   * If `true`, the component is checked by default.
   */
  defaultChecked?: boolean;
  /**
   * Attributes applied to the input element.
   */
  inputProps?: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'type'>;
  /**
   * The content of the component.
   */
  className?: string;
  /**
   * If `true`, the radio will be disabled.
   */
  disabled?: boolean;
  /**
   * The `id` of the input element.
   */
  id?: string;
  /**
   * If `true`, the `input` element will be required.
   */
  required?: boolean;
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon?: React.ReactElement;
  /**
   * Name attribute of the `input` element.
   */
  name?: string;
  /**
   * Callback fired when the state is changed.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  'data-testid'?: string;
};

export type RadioProps = BaseProps & Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'children' | 'htmlFor' | 'onChange'>;

const stylesBase = () => css({
  label: 'Radio',
  cursor: 'pointer',
  display: 'inline-flex',
  width: 'var(--pv-size-base-4)',
  height: 'var(--pv-size-base-4)',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  '&:before': {
    top: '-10px',
    left: '-10px',
    right: '-10px',
    bottom: '-10px',
    content: '""',
    position: 'absolute',
    borderRadius: '50%',
    opacity: 0,
    transition: 'background-color 200ms, opacity 200ms',
  },
});

const stylesBaseEffects = () => css({
  '&:hover:before': {
    backgroundColor: 'var(--pv-color-gray-8)',
    opacity: 0.2,
  },
  '&:focus:before': {
    backgroundColor: 'var(--pv-color-gray-8)',
    opacity: 0.3,
  },
  '&:active:before': {
    backgroundColor: 'var(--pv-color-gray-8)',
    opacity: 0.4,
  },
});

const stylesBaseEffectsChecked = () => css({
  '&:hover:before': {
    backgroundColor: 'var(--pv-color-primary-tint-3)',
    opacity: 0.2,
  },
  '&:focus:before': {
    backgroundColor: 'var(--pv-color-primary-tint-3)',
    opacity: 0.3,
  },
  '&:active:before': {
    backgroundColor: 'var(--pv-color-primary-tint-3)',
    opacity: 0.4,
  },
});

const stylesBaseDisabled = () => css({
  label: 'disabled',
  cursor: 'not-allowed',
});

const stylesInput = () => css({
  label: 'Radio-input',
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  position: 'relative',
  margin: 0,
  padding: 0,
  cursor: 'inherit',
  borderRadius: '50%',
  borderWidth: '2px',
  borderStyle: 'solid',
  appearance: 'none',
  borderColor: 'var(--pv-color-gray-9)',
  backgroundColor: 'transparent',
  '&:checked': {
    borderColor: 'var(--pv-color-primary-shade-1)',
    '+ [aria-hidden]': {
      opacity: 1,
    },
  },
  '&:disabled': {
    borderColor: 'var(--pv-color-gray-6)',
    '&:checked': {
      borderColor: 'var(--pv-color-gray-7)',
    },
    '+ [aria-hidden]': {
      color: 'var(--pv-color-gray-6)',
    },
  },
});

const stylesControl = () => css({
  label: 'Radio-control',
  width: 'var(--pv-size-base-4)',
  height: 'var(--pv-size-base-4)',
  position: 'relative',
  color: 'var(--pv-color-primary)',
  '&:after': {
    top: '-10px',
    left: '-10px',
    right: '-10px',
    bottom: '-10px',
    content: '""',
    position: 'absolute',
    borderRadius: '50%',
  },
});

const stylesIcon = () => css({
  label: 'Radio-icon',
  display: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0,
});

export const Radio = React.forwardRef<HTMLLabelElement, RadioProps>((props, ref) => {
  const {
    checked,
    defaultChecked,
    required,
    inputProps,
    className,
    disabled,
    id: idProp,
    checkedIcon,
    name,
    onChange,
    ...other
  } = props;
  const id = useId(idProp);

  const renderIcon = () => {
    const baseIconProps = {
      'aria-hidden': true,
      className: cx(stylesIcon()),
    };

    if (checkedIcon) {
      return React.cloneElement(checkedIcon, baseIconProps);
    }

    return (
      <DotIcon
        {...baseIconProps}
      />
    );
  };

  const [clicked, setClicked] = React.useState<boolean>(false);

  const onChangeAction = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
    setClicked(!clicked);
  };

  return (
    <label
      {...other}
      ref={ref}
      htmlFor={id}
      className={cx({
        [stylesBase()]: true,
        [stylesBaseEffects()]: !clicked && !disabled,
        [stylesBaseEffectsChecked()]: clicked && !disabled,
        [stylesBaseDisabled()]: disabled,
        [className]: !!className,
      })}
    >
      <Box
        component="span"
        className={cx(stylesControl())}
      >
        <input
          {...inputProps}
          type="radio"
          name={name}
          id={id}
          checked={checked}
          defaultChecked={defaultChecked}
          required={required}
          disabled={disabled}
          className={cx(stylesInput())}
          onChange={onChangeAction}
        />
        {renderIcon()}
      </Box>
    </label>
  );
});

Radio.displayName = 'Radio';

Radio.defaultProps = {};
