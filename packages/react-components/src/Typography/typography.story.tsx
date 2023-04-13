import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from './index';

export default {
  title: 'Playground/Typography',
  component: Typography,
  argTypes: {
    children: { control: 'text' },
    component: { control: false },
  },
} as ComponentMeta<typeof Typography>;

export const Default: ComponentStory<typeof Typography> = (args) => (
  <Typography
    {...args}
  />
);

Default.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
};
