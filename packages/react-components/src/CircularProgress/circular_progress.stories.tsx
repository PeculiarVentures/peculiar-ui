import type { Meta, StoryObj } from '@storybook/react';
import { CircularProgress } from './index';

const meta: Meta<typeof CircularProgress> = {
  title: 'Components/CircularProgress',
  component: CircularProgress,
  tags: ['autodocs'],
};

export default meta;

type TStory = StoryObj<typeof CircularProgress>;

export const Playground: TStory = {};
