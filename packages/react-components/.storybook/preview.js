// import { withPerformance } from 'storybook-addon-performance';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '../src/styles';

// export const decorators = [
//   withPerformance,
// ];

addDecorator((story) => (
  <ThemeProvider>
    {story()}
  </ThemeProvider>
));
