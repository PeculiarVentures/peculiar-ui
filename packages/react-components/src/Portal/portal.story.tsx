import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Portal } from './index';

export default {
  title: 'Components/Portal',
  component: Portal,
  argTypes: {
    children: { control: 'text' },
    container: {
      control: false,
    },
  },
} as ComponentMeta<typeof Portal>;

export const Playground: ComponentStory<typeof Portal> = (args) => (
  <Portal
    {...args}
  />
);
Playground.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
};
