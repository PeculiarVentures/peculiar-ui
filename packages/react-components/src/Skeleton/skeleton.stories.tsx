import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './index';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    children: { control: false },
    // @ts-ignore
    component: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Playground: Story = {};
