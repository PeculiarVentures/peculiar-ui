import * as React from 'react';
import { TextField } from './index';

export const Playground = (args: any) => (
  <TextField
    {...args}
  />
);

Playground.args = {
  placeholder: 'Placeholder',
};

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    inputProps: { control: false },
    inputRef: { control: false },
    onChange: { control: false },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};
