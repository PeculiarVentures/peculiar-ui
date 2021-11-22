import * as React from 'react';
import { Global } from '@emotion/core';
import { createTheme, createThemeCSSVariablesFromObject } from './utils';
import { defaultTheme } from './default_theme';
import type { ThemeOptionsType } from './types';

type ThemeProviderProps = {
  children: React.ReactElement;
  theme?: ThemeOptionsType;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const {
    children,
    theme: themeProp,
  } = props;

  const theme = React.useMemo(() => {
    const output = themeProp ? createTheme(themeProp) : defaultTheme;

    return output;
  }, [themeProp]);

  return (
    <>
      <Global
        styles={{
          html: createThemeCSSVariablesFromObject(theme),
        }}
      />
      {children}
    </>
  );
};

ThemeProvider.displayName = 'ThemeProvider';
