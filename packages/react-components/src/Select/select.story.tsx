import * as React from 'react';
import { Select } from './index';

export const Playground = (args: any) => (
  <Select
    {...args}
  />
);

Playground.args = {
  options: [
    {
      value: '10',
      label: 'Ten',
    },
    {
      value: '20',
      label: 'Twenty',
    },
    {
      value: '30',
      label: 'Thirty',
    },
  ],
};

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    options: { control: false },
    inputProps: { control: false },
    inputRef: { control: false },
    onChange: { control: false },
  },
};
