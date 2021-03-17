import * as React from 'react';
import { injectGlobal } from './css';
import { defaultTheme } from './default_theme';

injectGlobal({
  html: defaultTheme,
});

type ThemeProviderProps = {
  children: React.ReactElement;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children } = props;

  return children;
};

ThemeProvider.displayName = 'ThemeProvider';
