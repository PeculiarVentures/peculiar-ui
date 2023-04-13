import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from './index';

export default {
  title: 'Playground/Box',
  component: Box,
  argTypes: {
    children: { control: 'text' },
    component: { control: false },
  },
} as ComponentMeta<typeof Box>;

export const Default: ComponentStory<typeof Box> = (args) => (
  <Box
    {...args}
  />
);

Default.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
  borderWidth: 4,
  borderRadius: 4,
  borderStyle: 'solid',
  background: 'primary-tint-3',
  borderColor: 'secondary-tint-3',
};
