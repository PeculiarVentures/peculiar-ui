import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './index';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    inputProps: {
      control: false,
    },
    checkedIcon: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = {};
