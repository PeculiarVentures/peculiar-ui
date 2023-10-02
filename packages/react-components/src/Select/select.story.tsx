import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './index';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    options: { control: false },
    inputProps: { control: false },
    inputRef: { control: false },
    onChange: { control: false },
  },
} as ComponentMeta<typeof Select>;

export const Playground: ComponentStory<typeof Select> = (args) => (
  <Select
    {...args}
  />
);

Playground.args = {
  options: [],
};
