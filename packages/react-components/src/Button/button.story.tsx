import * as React from 'react';
import { Button } from './index';

const Template = (args: any) => (
  <Button
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Action',
};

export default {
  title: 'Playground/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    startIcon: { control: false },
    endIcon: { control: false },
    component: { control: false },
  },
};