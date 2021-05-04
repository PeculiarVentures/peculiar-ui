import * as React from 'react';
import { Button } from './index';

export const Playground = (args: any) => (
  <Button
    {...args}
  />
);

Playground.args = {
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
