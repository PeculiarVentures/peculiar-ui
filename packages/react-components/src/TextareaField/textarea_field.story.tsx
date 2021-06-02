import * as React from 'react';
import { TextareaField } from './index';

export const Playground = (args: any) => (
  <TextareaField
    {...args}
  />
);

Playground.args = {
  placeholder: 'Placeholder',
};

export default {
  title: 'Components/TextareaField',
  component: TextareaField,
  argTypes: {
    inputProps: { control: false },
    inputRef: { control: false },
    onChange: { control: false },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};
