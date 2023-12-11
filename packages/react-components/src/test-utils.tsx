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

type RenderOptionsType = Omit<React.ComponentProps<typeof ThemeProvider>, 'children'>;

const renderWithWrapper = (
  ui: React.ReactElement,
  options?: RenderOptionsType,
) => (
  render(
    ui,
    {
      wrapper: (props) => (
        <ThemeProvider {...(options || {})}>
          {props.children}
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
