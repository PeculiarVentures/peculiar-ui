import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './index';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  args: { children: 'John Doe' },
  argTypes: {
    children: { control: 'text' },
    deleteIcon: { control: false },
    onDelete: { control: false },
    onClick: { control: false },
    startContent: { control: false },
    // @ts-expect-error: `component` is not a valid prop
    component: { control: false },
  },
};

export default meta;

type TStory = StoryObj<typeof Chip>;

export const Playground: TStory = {};
