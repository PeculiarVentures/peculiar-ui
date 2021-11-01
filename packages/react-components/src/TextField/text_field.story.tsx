import * as React from 'react';
import { TextField } from './index';

export const Default = (args: any) => (
  <TextField
    {...args}
  />
);

Default.args = {
  placeholder: 'Placeholder',
};

export default {
  title: 'Playground/TextField',
  component: TextField,
  argTypes: {
    inputProps: { control: false },
    inputRef: { control: false },
    onChange: { control: false },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};
