import * as React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { DotIcon } from '../icons';
import { useId } from '../hooks';
import { opacity } from '../styles/foundations';

/**
 * Types.
 */
interface RadioOwnProps {
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
    'primary' |
    'secondary'
  );
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

export type RadioProps = RadioOwnProps & Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'children' | 'htmlFor' | 'onChange'>;
/**
 *
 */

/**
 * Styles.
 */
const RadioRoot = styled('label')(
  {
    cursor: 'pointer',
    display: 'inline-flex',
    width: 'var(--pv-size-base-4)',
    height: 'var(--pv-size-base-4)',
    borderRadius: '50%',
    position: 'relative',
    flexShrink: 0,
  },
  (props) => ({
    ...(props.theme.mode === 'dark'
      ? {
          color: 'var(--pv-color-gray-5)',
        }
      : {
          color: 'var(--pv-color-gray-6)',
        }),
  }),
);

const RadioInput = styled('input', {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'color',
})<Required<Pick<RadioOwnProps, 'color'>>>(
  {
    'cursor': 'inherit',
    'width': '100%',
    'height': '100%',
    'margin': 0,
    'padding': 0,
    'outline': 0,
    'borderRadius': '50%',
    'borderWidth': '2px',
    'borderStyle': 'solid',
    'appearance': 'none',
    'borderColor': 'currentColor',
    'backgroundColor': 'transparent',
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
    let ellipseColorChecked = `var(--pv-color-${props.color})`;
    let colorDisabled = 'var(--pv-color-gray-6)';
    let colorDisabledChecked = 'var(--pv-color-gray-7)';
    let opacityHover = opacity.light.switch.hover;
    let opacityFocus = opacity.light.switch.focus;
    let opacityActive = opacity.light.switch.active;

    if (isDark) {
      color = 'var(--pv-color-gray-7)';
      colorChecked = `var(--pv-color-${props.color})`;
      ellipseColorChecked = `var(--pv-color-${props.color}-tint-1)`;
      colorDisabled = 'var(--pv-color-gray-5)';
      colorDisabled = 'var(--pv-color-gray-5)';
      colorDisabledChecked = 'var(--pv-color-gray-5)';
      opacityHover = opacity.dark.switch.hover;
      opacityFocus = opacity.dark.switch.focus;
      opacityActive = opacity.dark.switch.active;
    }

    return ({
      color,
      '&:checked': {
        '+ [aria-hidden]': {
          color: ellipseColorChecked,
          opacity: 1,
        },
      },
      '&:not(:disabled)': {
        'cursor': 'pointer',
        '&:checked': {
          color: colorChecked,
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
        'cursor': 'not-allowed',
        '+ [aria-hidden]': {
          color: 'inherit',
        },
        'color': colorDisabled,
        '&:checked': {
          color: colorDisabledChecked,
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

export const Radio = React.forwardRef<HTMLLabelElement, RadioProps>((props, ref) => {
  const {
    checked,
    defaultChecked,
    color = 'primary',
    required,
    inputProps,
    disabled,
    id: idProp,
    name,
    checkedIcon = DotIcon,
    onChange,
    ...other
  } = props;
  const id = useId(idProp);

  return (
    <RadioRoot
      ref={ref}
      htmlFor={id}
      {...other}
    >
      <RadioInput
        {...inputProps}
        type="radio"
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
        as={checkedIcon}
        aria-hidden
      />
    </RadioRoot>
  );
});

Radio.displayName = 'Radio';

Radio.defaultProps = {
  color: 'primary',
};
