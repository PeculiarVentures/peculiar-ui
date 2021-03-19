import * as React from 'react';
import { injectGlobal } from './css';
import { defaultTheme } from './default_theme';

type ThemeProviderProps = {
  children: React.ReactElement;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children } = props;

  injectGlobal({
    html: defaultTheme,
  });

  return children;
};

ThemeProvider.displayName = 'ThemeProvider';
