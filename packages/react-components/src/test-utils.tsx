import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  renderHook,
  act,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from './styles/theme_provider';

type TRenderOptionsType = Omit<React.ComponentProps<typeof ThemeProvider>, 'children'>;

const renderWithWrapper = (
  ui: React.ReactElement,
  options?: TRenderOptionsType,
) => (
  render(
    ui,
    {
      wrapper: (props) => (
        <ThemeProvider {...(options || {})}>
          {props.children as React.ReactElement}
        </ThemeProvider>
      ),
    },
  )
);

export {
  userEvent,
  fireEvent,
  renderWithWrapper,
  render,
  screen,
  waitFor,
  renderHook,
  act,
};
