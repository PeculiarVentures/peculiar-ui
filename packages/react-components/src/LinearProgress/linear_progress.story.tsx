import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinearProgress } from './index';

export default {
  title: 'Components/LinearProgress',
  component: LinearProgress,
} as ComponentMeta<typeof LinearProgress>;

export const Playground: ComponentStory<typeof LinearProgress> = (args) => (
  <LinearProgress
    {...args}
  />
);
Playground.args = {};
