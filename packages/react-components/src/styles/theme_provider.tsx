import * as React from 'react';
import { Global } from '@emotion/react';
import { createTheme, createThemeCSSVariablesFromObject } from './utils';
import { defaultTheme } from './default_theme';
import type { ThemeOptionsType } from './types';

type ThemeProviderProps = {
  children: React.ReactElement;
  theme?: ThemeOptionsType;
  cssVarsRoot?: string;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const {
    children,
    theme: themeProp,
    cssVarsRoot = 'html, ::backdrop',
  } = props;

  const theme = React.useMemo(() => {
    const output = themeProp ? createTheme(themeProp) : defaultTheme;

    return output;
  }, [themeProp]);

  return (
    <>
      <Global
        styles={{
          [cssVarsRoot]: createThemeCSSVariablesFromObject(theme),
        }}
      />
      {children}
    </>
  );
};

ThemeProvider.displayName = 'ThemeProvider';
