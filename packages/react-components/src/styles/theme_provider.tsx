import * as React from 'react';
import { Global, ThemeProvider as ThemeProviderEmotion } from '@emotion/react';
import { createTheme, createThemeCSSVariablesFromObject } from './utils';
import type { IThemeOptionsType } from './types';

/**
 * Types.
 */
interface IThemeProviderProps {
  /**
   * The content of the component.
   */
  children: React.ReactElement;
  /**
   * The theme object.
   */
  theme?: IThemeOptionsType;
  /**
   * The theme mode.
   * @default 'light'
   */
  mode?: ('light' | 'dark');
  /**
   * The CSS variables root selector.
   * @default 'html, ::backdrop'
   */
  cssVarsRoot?: string;
};
/**
 *
 */

export const ThemeProvider: React.FC<IThemeProviderProps> = (props) => {
  const {
    children,
    mode = 'light',
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
