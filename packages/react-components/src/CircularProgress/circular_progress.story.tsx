import * as React from 'react';
import { CircularProgress } from './index';

export const Playground = (args: any) => (
  <CircularProgress
    {...args}
  />
);

Playground.args = {};

export default {
  title: 'Components/CircularProgress',
  component: CircularProgress,
};
