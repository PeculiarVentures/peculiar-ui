import * as React from 'react';
import { createTheme, setTheme } from './utils';

type ThemeProviderProps = {
  children: React.ReactElement;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children } = props;

  React.useEffect(() => {
    const theme = createTheme();

    setTheme(theme);
  }, []);

  return children;
};

ThemeProvider.displayName = 'ThemeProvider';
