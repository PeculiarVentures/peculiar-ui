import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './index';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Playground: Story = {};
