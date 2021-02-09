import { withPerformance } from 'storybook-addon-performance';

export const parameters = {
  layout: 'centered',
};

export const decorators = [
  withPerformance,
];
