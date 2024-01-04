import React from 'react';
import type { Preview, Decorator } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';
import { DocsContainer, DocsContextProps } from '@storybook/addon-docs';
import { ThemeProvider } from '../src';
import { themeLight, themeDark } from './themes';

type ThemedDocsContainerProps = {
  context: DocsContextProps;
  children?: React.ReactNode;
};

const ThemedDocsContainer: React.FC<ThemedDocsContainerProps> = (props) => {
  const isDark = useDarkMode();

  return (
    <ThemeProvider
      mode={isDark ? 'dark' : 'light'}
    >
      <DocsContainer
        theme={isDark ? themeDark : themeLight}
        context={props.context}
      >
        {props.children}
      </DocsContainer>
    </ThemeProvider>
  );
};

const ThemeWrapper: Decorator = (story) => {
  const isDark = useDarkMode();

  return (
    <ThemeProvider
      mode={isDark ? 'dark' : 'light'}
    >
      {story()}
    </ThemeProvider>
  );
}

const preview: Preview = {
  decorators: [ThemeWrapper],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    darkMode: {
      dark: themeDark,
      light: themeLight,
    },
    docs: {
      container: ThemedDocsContainer,
    },
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
  },
};

export default preview;
