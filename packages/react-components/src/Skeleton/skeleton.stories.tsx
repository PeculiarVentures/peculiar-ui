import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './index';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    children: { control: false },
    // @ts-expect-error: `component` is not a valid prop
    component: { control: false },
  },
};

export default meta;

type TStory = StoryObj<typeof Skeleton>;

export const Playground: TStory = {};
