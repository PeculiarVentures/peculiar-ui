import { withPerformance } from 'storybook-addon-performance';
import { ThemeProvider } from '../src/theme_provider';

export const decorators = [
  withPerformance,
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
