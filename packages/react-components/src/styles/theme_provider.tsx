import * as React from 'react';
import { Global, ThemeProvider as ThemeProviderEmotion } from '@emotion/react';
import { createTheme, createThemeCSSVariablesFromObject } from './utils';
import type { IThemeOptionsType } from './types';

/**
 * Types.
 */
interface IThemeProviderProps {
  children: React.ReactElement;
  theme?: IThemeOptionsType;
  mode?: ('light' | 'dark');
  cssVarsRoot?: string;
};
/**
 *
 */

export const ThemeProvider: React.FC<IThemeProviderProps> = (props) => {
  const {
    children,
    mode,
    theme: themeProp,
    cssVarsRoot = 'html, ::backdrop',
  } = props;

  const theme = React.useMemo(
    () => createThemeCSSVariablesFromObject(createTheme(mode, themeProp)),
    [themeProp, mode],
  );

  return (
    <ThemeProviderEmotion
      theme={{
        mode,
      }}
    >
      <Global
        styles={{
          [cssVarsRoot]: theme,
        }}
      />
      {children}
    </ThemeProviderEmotion>
  );
};

ThemeProvider.displayName = 'ThemeProvider';

ThemeProvider.defaultProps = {
  mode: 'light',
};
