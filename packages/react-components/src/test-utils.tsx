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

const renderWithWrapper = (
  ui: React.ReactElement,
) => (
  render(
    ui,
    {
      wrapper: ThemeProvider,
    },
  )
);

export {
  userEvent,
  fireEvent,
  renderWithWrapper,
  screen,
  waitFor,
  renderHook,
  act,
};
