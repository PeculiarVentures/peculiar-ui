import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './index';

export default {
  title: 'Playground/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    startIcon: { control: false },
    endIcon: { control: false },
    component: { control: false },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Action',
};
