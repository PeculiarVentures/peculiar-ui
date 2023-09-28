import * as React from 'react';
import { Global, ThemeProvider as ThemeProviderEmotion } from '@emotion/react';
import { createTheme, createThemeCSSVariablesFromObject } from './utils';
import type { ThemeOptionsType } from './types';

/**
 * Types.
 */
type ThemeProviderProps = {
  children: React.ReactElement;
  theme?: ThemeOptionsType;
  mode?: 'light' | 'dark';
};
/**
 *
 */

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const {
    children,
    mode,
    theme: themeProp,
  } = props;

  const theme = React.useMemo(
    () => createThemeCSSVariablesFromObject(createTheme(mode, themeProp)),
    [themeProp, mode],
  );

  return (
    <>
      <Global
        styles={{
          'html, ::backdrop': theme,
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
