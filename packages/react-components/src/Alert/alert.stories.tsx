import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './index';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  args: {
    children: 'This is a message!',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Playground: Story = {};
