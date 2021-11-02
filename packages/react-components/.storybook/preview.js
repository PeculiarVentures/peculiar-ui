// import { withPerformance } from 'storybook-addon-performance';
import { addParameters, addDecorator } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { ThemeProvider } from '../src';

// export const decorators = [
//   withPerformance,
// ];

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
});

export const parameters = {
	options: {
		storySort: {
			order: ['Documentation', ['Introduction', 'Readme']],
		},
	},
};
