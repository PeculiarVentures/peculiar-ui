import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PlusIcon } from '../icons';
import { Fab } from './index';

const meta: Meta<typeof Fab> = {
  title: 'Components/Fab',
  component: Fab,
  tags: ['autodocs'],
  args: { children: <PlusIcon /> },
  argTypes: {
    children: { control: false },
    // @ts-expect-error: `component` is not a valid prop
    component: { control: false },
  },
};

export default meta;

type TStory = StoryObj<typeof Fab>;

export const Playground: TStory = {};
