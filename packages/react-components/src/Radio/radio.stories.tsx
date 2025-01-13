import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './index';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
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

type Story = StoryObj<typeof Radio>;

export const Playground: Story = {};
