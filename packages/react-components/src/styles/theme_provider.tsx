import * as React from 'react';
import { Global } from '@emotion/core';
import { createTheme, createThemeCSSVariablesFromObject } from './utils';
import { eventManager, Event } from './event_manager';
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
  const [theme, setTheme] = React.useState(() => createTheme(themeProp));

  React.useEffect(() => {
    eventManager
      .on(Event.Use, (options) => {
        setTheme(createTheme(options));
      });

    return () => {
      eventManager.list.clear();
    };
  }, []);

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
