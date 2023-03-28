import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CircularProgress } from './index';

export default {
  title: 'Components/CircularProgress',
  component: CircularProgress,
} as ComponentMeta<typeof CircularProgress>;

export const Playground: ComponentStory<typeof CircularProgress> = (args) => (
  <CircularProgress
    {...args}
  />
);
Playground.args = {};
