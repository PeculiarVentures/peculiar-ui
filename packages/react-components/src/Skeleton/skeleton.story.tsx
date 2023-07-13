import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Skeleton } from './index';

export default {
  title: 'Playground/Skeleton',
  component: Skeleton,
  argTypes: {
    children: { control: false },
  },
} as ComponentMeta<typeof Skeleton>;

export const Playground: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton
    {...args}
  />
);
