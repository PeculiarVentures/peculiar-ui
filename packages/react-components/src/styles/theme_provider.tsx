import * as React from 'react';
import { defaultTheme } from './default_theme';
import { setTheme } from './utils';

type ThemeProviderProps = {
  children: React.ReactElement;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children } = props;

  setTheme(defaultTheme);

  return children;
};

ThemeProvider.displayName = 'ThemeProvider';
