import { addParameters, addDecorator } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { ThemeProvider } from '../src';

addDecorator((story) => (
  <ThemeProvider>
    {story()}
  </ThemeProvider>
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
