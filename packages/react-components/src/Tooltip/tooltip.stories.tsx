import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Tooltip } from './index';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    title: 'Tooltip content',
    children: (
      <Button>
        Action
      </Button>
    ),
  },
  argTypes: {
    children: {
      control: false,
    },
    title: {
      control: false,
    },
  },
};

export default meta;

type TStory = StoryObj<typeof Tooltip>;

export const Playground: TStory = {};
