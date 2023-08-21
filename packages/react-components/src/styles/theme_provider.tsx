import * as React from 'react';
import { Global, ThemeProvider as ThemeProviderEmotion } from '@emotion/react';
import { createTheme, createThemeCSSVariablesFromObject } from './utils';
import { defaultTheme } from './default_theme';
import type { ThemeOptionsType } from './types';

type ThemeProviderProps = {
  children: React.ReactElement;
  theme?: ThemeOptionsType;
  mode?: 'light' | 'dark';
};

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const {
    children,
    theme: themeProp,
    mode,
  } = props;

  const theme = React.useMemo(() => {
    const output = themeProp ? createTheme(themeProp) : defaultTheme;

    return output;
  }, [themeProp]);

  return (
    <>
      <Global
        styles={{
          'html, ::backdrop': createThemeCSSVariablesFromObject(theme),
        }}
      />
      <ThemeProviderEmotion
        theme={{
          mode,
        }}
      >
        {children}
      </ThemeProviderEmotion>
    </>
  );
};

ThemeProvider.displayName = 'ThemeProvider';

ThemeProvider.defaultProps = {
  mode: 'light',
};
