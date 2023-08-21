import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import addons from '@storybook/addons';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import { ThemeProvider, defaultTheme } from '../src';

const channel = addons.getChannel();

function ThemeWrapper(props) {
  const [isDark, setDark] = React.useState(false);

  React.useEffect(() => {
    // listen to DARK_MODE event
    channel.on(DARK_MODE_EVENT_NAME, setDark);

    return () => channel.off(DARK_MODE_EVENT_NAME, setDark);
  }, [channel, setDark]);

  // render your custom theme provider
  return (
    <ThemeProvider
      mode={isDark ? 'dark' : 'light'}
      theme={isDark && {
        color: {
          white: '#FAFAFA',
          'gray-1': '#2D3338',
          'gray-2': '#32383D',
          'gray-3': '#40474D',
          'gray-4': '#4F565C',
          'gray-5': '#5B6266',
          'gray-6': '#7E8388',
          'gray-7': '#A9ADAF',
          'gray-8': '#D4D6D7',
          'gray-9': '#E9EAEB',
          'gray-10': '#ECEDED',
          black: '#23292B',
          primary: '#499940',
          secondary: '#2867FF',
          wrong: '#F55D58',
          attention: '#FFC369',
          success: '#61EDBE',
        },
      }}
    >
      {props.children}
    </ThemeProvider>
  );
}

addDecorator((story) => (
  <ThemeWrapper>
    {story()}
  </ThemeWrapper>
));

addParameters({
  docs: {
    container: (props) => (
      <ThemeProvider>
        <DocsContainer {...props} />
      </ThemeProvider>
    ),
    page: DocsPage,
  },
  options: {
    storySort: {
			order: ['Documentation', ['Introduction', 'Readme']],
		},
  },
  actions: { argTypesRegex: '^on.*' },
});
