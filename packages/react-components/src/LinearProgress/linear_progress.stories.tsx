import type { Meta, StoryObj } from '@storybook/react';
import { LinearProgress } from './index';

const meta: Meta<typeof LinearProgress> = {
  title: 'Components/LinearProgress',
  component: LinearProgress,
  tags: ['autodocs'],
};

export default meta;

type TStory = StoryObj<typeof LinearProgress>;

export const Playground: TStory = {};
