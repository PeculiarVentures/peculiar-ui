import * as React from 'react';
import { LinearProgress } from './index';

export const Playground = (args: any) => (
  <LinearProgress
    {...args}
  />
);

Playground.args = {};

export default {
  title: 'Components/LinearProgress',
  component: LinearProgress,
};
