import * as React from 'react';
import { Button } from './index';
import { CheckmarkIcon } from '../icons';

export const Default = (args: any) => (
  <Button
    {...args}
  />
);

export const IconStart = (args: any) => (
  <Button
    {...args}
    startIcon={(<CheckmarkIcon />)}
  />
);

export const IconEnd = (args: any) => (
  <Button
    {...args}
    endIcon={(<CheckmarkIcon />)}
  />
);

Default.args = {
  children: 'Action',
};

IconStart.args = {
  children: 'Action',
};

IconEnd.args = {
  children: 'Action',
};

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    startIcon: { control: false },
    endIcon: { control: false },
  },
};