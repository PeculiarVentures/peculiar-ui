import { withPerformance } from 'storybook-addon-performance';
import { ThemeProvider } from '../src/styles';

export const decorators = [
  withPerformance,
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
