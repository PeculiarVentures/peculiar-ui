import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { WarningIcon } from '../icons';
import { MenuItem, MenuList } from './index';

const meta: Meta<typeof MenuList> = {
  title: 'Components/MenuList',
  component: MenuList,
  tags: ['autodocs'],
  args: {
    children: [
      <MenuItem
        key="1"
        disabled
        onClick={() => console.log('print')}
      >
        Print
      </MenuItem>,
      <MenuItem
        key="2"
        onClick={() => console.log('copy')}
      >
        Copy
      </MenuItem>,
      <MenuItem
        key="3"
        startIcon={<WarningIcon />}
        onClick={() => console.log('delete')}
      >
        Delete
      </MenuItem>,
    ],
  },
  argTypes: {
    children: {
      control: false,
    },
    // @ts-expect-error: `component` is not a valid prop
    component: {
      control: false,
    },
  },
};

export default meta;

type TStory = StoryObj<typeof MenuList>;

export const Playground: TStory = {};
