import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './index';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  args: {
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
    placeholder: 'Select a movie',
  },
  tags: ['autodocs'],
  argTypes: {
    options: { control: false },
    inputProps: { control: false },
    inputRef: { control: false },
    defaultValue: { control: false },
    value: { control: false },
    onChange: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Playground: Story = {};
