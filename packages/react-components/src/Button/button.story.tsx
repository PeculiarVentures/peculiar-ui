import * as React from 'react';
import { Button } from './index';
import { CheckIcon } from '../icons';

const Template = (args: any) => (
  <Button
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Action',
};

export const IconStart = Template.bind({});
IconStart.args = {
  children: 'Action',
  startIcon: <CheckIcon />,
};

export const IconEnd = Template.bind({});
IconEnd.args = {
  children: 'Action',
  endIcon: <CheckIcon />,
};

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    startIcon: { control: false },
    endIcon: { control: false },
    component: { control: false },
  },
};
