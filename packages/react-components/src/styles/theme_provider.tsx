import * as React from 'react';
import { injectGlobal } from './css';
import { defaultTheme } from './default_theme';
import { createCSSVariablesFromTheme } from './utils';

type ThemeProviderProps = {
  children: React.ReactElement;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children } = props;

  injectGlobal({
    html: createCSSVariablesFromTheme(defaultTheme),
  });

  return children;
};

ThemeProvider.displayName = 'ThemeProvider';
