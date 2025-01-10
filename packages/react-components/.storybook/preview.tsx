import React from 'react';
import type { Preview, Decorator } from '@storybook/react';
import { addons } from '@storybook/preview-api';
import {
  useDarkMode,
  DARK_MODE_EVENT_NAME,
} from 'storybook-dark-mode';
import { DocsContainer, DocsContextProps } from '@storybook/addon-docs';
import { ThemeProvider } from '../src';
import { themeLight, themeDark } from './themes';
import './global.css';

interface ThemedDocsContainerProps {
  context: DocsContextProps;
  children?: React.ReactNode;
};

const channel = addons.getChannel();

const ThemedDocsContainer: React.FC<ThemedDocsContainerProps> = (props) => {
  const [isDark, setDark] = React.useState(false);

  React.useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, setDark);

    return () => channel.removeListener(DARK_MODE_EVENT_NAME, setDark);
  }, [channel, setDark]);

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
        order: [
          'Installation',
          'Customization',
          ['CSS Variables', 'Palette', 'Dark mode'],
          'Components',
          'Hooks',
        ],
      },
    },
  },
};

export default preview;
