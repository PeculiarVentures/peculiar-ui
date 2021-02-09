/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

type BaseProps = {
  /**
   * Component content.
   */
  children: React.ReactNode;
  /**
   * Visually and functionally disable the button.
   */
  disabled?: boolean;
}

type ButtonProps = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const baseStyles = css`
  label: button;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 40px;
  margin: 0;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  padding: 0 30px;

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const StyledButton = styled('button')(
  baseStyles,
);

export const Button = React.forwardRef<unknown, ButtonProps>((props, ref?: any) => {
  return (
    <StyledButton
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = 'Button';

Button.defaultProps = {
  type: 'button',
};
