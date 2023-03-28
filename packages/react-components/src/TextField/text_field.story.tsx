import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField } from './index';

export default {
  title: 'Playground/TextField',
  component: TextField,
  argTypes: {
    inputProps: { control: false },
    inputRef: { control: false },
    onChange: { control: false },
  },
} as ComponentMeta<typeof TextField>;

export const Default: ComponentStory<typeof TextField> = (args) => (
  <TextField
    {...args}
  />
);
Default.args = {
  placeholder: 'Placeholder',
};
