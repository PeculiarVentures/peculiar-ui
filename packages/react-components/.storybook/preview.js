import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import addons from '@storybook/addons';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import { ThemeProvider } from '../src';

const channel = addons.getChannel();

function ThemeWrapper(props) {
  // this example uses hook but you can also use class component as well
  const [isDark, setDark] = React.useState(false);

  React.useEffect(() => {
    // listen to DARK_MODE event
    channel.on(DARK_MODE_EVENT_NAME, setDark);
    return () => channel.off(DARK_MODE_EVENT_NAME, setDark);
  }, [channel, setDark]);

  // render your custom theme provider
  return (
    <ThemeProvider mode={isDark ? 'dark' : 'light'}>
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
