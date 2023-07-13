import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextareaField } from './index';

export default {
  title: 'Components/TextareaField',
  component: TextareaField,
  argTypes: {
    inputProps: { control: false },
    inputRef: { control: false },
    onChange: { control: false },
  },
} as ComponentMeta<typeof TextareaField>;

export const Playground: ComponentStory<typeof TextareaField> = (args) => (
  <TextareaField
    {...args}
  />
);

Playground.args = {
  placeholder: 'Placeholder',
};
