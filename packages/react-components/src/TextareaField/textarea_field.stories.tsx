import type { Meta, StoryObj } from '@storybook/react';
import { TextareaField } from './index';

const meta: Meta<typeof TextareaField> = {
  title: 'Components/TextareaField',
  component: TextareaField,
  tags: ['autodocs'],
  args: { placeholder: 'Placeholder' },
  argTypes: {
    inputProps: { control: false },
    inputRef: { control: false },
    onChange: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof TextareaField>;

export const Playground: Story = {};
