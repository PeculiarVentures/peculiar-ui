import * as React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { CheckIcon, MinusIcon } from '../icons';
import { useId } from '../hooks';
import { opacity } from '../styles/foundations';

/**
 * Types.
 */
interface ICheckboxOwnProps {
  /**
   * If `true`, the component is checked.
   */
  checked?: boolean;
  /**
   * If `true`, the component is checked by default.
   */
  defaultChecked?: boolean;
  /**
   * The color of the component.
   */
  color?: (
    'primary'
    | 'secondary'
  );
  /**
   * If `true`, the component appears indeterminate. This does not set the native
   * input element to indeterminate due to inconsistent behavior across browsers.
   */
  indeterminate?: boolean;
  /**
   * Attributes applied to the input element.
   */
  inputProps?: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'type'>;
  /**
   * The content of the component.
   */
  className?: string;
  /**
   * If `true`, the checkbox will be disabled.
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
   * Name attribute of the `input` element.
   */
  name?: string;
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon?: React.ElementType<any>;
  /**
   * Callback fired when the state is changed.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TCheckboxProps = ICheckboxOwnProps & Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'children' | 'htmlFor' | 'onChange'>;
/**
 *
 */

/**
 * Styles.
 */
const CheckboxRoot = styled('label')({
  display: 'inline-flex',
  width: 'var(--pv-size-base-4)',
  height: 'var(--pv-size-base-4)',
  position: 'relative',
  flexShrink: 0,
});

const CheckboxInput = styled('input', {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'color',
})<Required<Pick<ICheckboxOwnProps, 'color'>>>(
  {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    outline: 0,
    borderRadius: '2px',
    borderWidth: '2px',
    borderStyle: 'solid',
    appearance: 'none',
    borderColor: 'currentColor',
    backgroundColor: 'transparent',
    '&:before': {
      top: '-7px',
      left: '-7px',
      right: '-7px',
      bottom: '-7px',
      content: '""',
      position: 'absolute',
      borderRadius: '50%',
      opacity: 0,
      backgroundColor: 'currentColor',
      transition: 'opacity 200ms',
    },
  },
  (props) => {
    const isDark = props.theme.mode === 'dark';
    let color = 'var(--pv-color-gray-9)';
    let colorChecked = `var(--pv-color-${props.color}-shade-1)`;
    let backgroundColorChecked = `var(--pv-color-${props.color})`;
    let colorDisabledChecked = 'var(--pv-color-gray-7)';
    let iconColorDisabledChecked = 'var(--pv-color-white)';
    let opacityHover = opacity.light.switch.hover;
    let opacityFocus = opacity.light.switch.focus;
    let opacityActive = opacity.light.switch.active;

    if (isDark) {
      color = 'var(--pv-color-gray-7)';
      colorChecked = `var(--pv-color-${props.color})`;
      backgroundColorChecked = `var(--pv-color-${props.color}-tint-1)`;
      colorDisabledChecked = 'var(--pv-color-gray-5)';
      iconColorDisabledChecked = 'var(--pv-color-gray-8)';
      opacityHover = opacity.dark.switch.hover;
      opacityFocus = opacity.dark.switch.focus;
      opacityActive = opacity.dark.switch.active;
    }

    return ({
      color,
      '&:checked, &[data-indeterminate="true"]': {
        '+ [aria-hidden]': {
          opacity: 1,
        },
      },
      '&:not(:disabled)': {
        cursor: 'pointer',
        '&:checked, &[data-indeterminate="true"]': {
          color: colorChecked,
          backgroundColor: backgroundColorChecked,
          '+ [aria-hidden]': {
            color: 'var(--pv-color-white)',
          },
        },
        '&:hover': {
          '&:before': {
            opacity: opacityHover,
          },
        },
        '&:focus-visible': {
          '&:before': {
            opacity: opacityFocus,
          },
        },
        '&:active': {
          '&:before': {
            opacity: opacityActive,
          },
        },
      },
      '&:disabled': {
        cursor: 'not-allowed',
        color: 'var(--pv-color-gray-6)',
        '&:checked, &[data-indeterminate="true"]': {
          color: colorDisabledChecked,
          backgroundColor: 'var(--pv-color-gray-6)',

          '+ [aria-hidden]': {
            color: iconColorDisabledChecked,
          },
        },
      },
    });
  },
);

const CheckboxIcon = styled('svg')({
  display: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0,
  pointerEvents: 'none',
});
/**
 *
 */

export const Checkbox = React.forwardRef<HTMLLabelElement, TCheckboxProps>((props, ref) => {
  const {
    checked,
    defaultChecked,
    color = 'primary',
    indeterminate = false,
    required,
    inputProps,
    disabled,
    id: idProp,
    name,
    checkedIcon = CheckIcon,
    onChange,
    ...other
  } = props;
  const id = useId(idProp);
  const icon = indeterminate ? MinusIcon : checkedIcon;

  return (
    <CheckboxRoot
      ref={ref}
      htmlFor={id}
      {...other}
    >
      <CheckboxInput
        {...inputProps}
        data-indeterminate={indeterminate}
        type="checkbox"
        name={name}
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        required={required}
        disabled={disabled}
        color={color}
        onChange={onChange}
      />
      <CheckboxIcon
        as={icon}
        aria-hidden
      />
    </CheckboxRoot>
  );
});

Checkbox.displayName = 'Checkbox';

Checkbox.defaultProps = {
  color: 'primary',
};
