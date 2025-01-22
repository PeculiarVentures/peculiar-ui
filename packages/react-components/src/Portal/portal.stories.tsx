import type { Meta, StoryObj } from '@storybook/react';
import { Portal } from './index';

const meta: Meta<typeof Portal> = {
  title: 'Components/Portal',
  component: Portal,
  tags: ['autodocs'],
  args: { children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur' },
  argTypes: {
    children: { control: 'text' },
    container: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof Portal>;

export const Playground: Story = {};
