// import { withPerformance } from 'storybook-addon-performance';
import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { ThemeProvider } from '../src/styles';

// export const decorators = [
//   withPerformance,
// ];

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
