import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { PlusIcon } from '../icons';
import { Menu } from './index';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
  args: {
    children: (
      <Button>
        +
      </Button>
    ),
    options: [
      {
        label: 'Print',
        disabled: true,
        onClick: () => console.log('print'),
      },
      {
        label: 'Save to my profile',
        startIcon: <PlusIcon />,
      },
      'divider',
      {
        label: 'Options',
        subOptions: [
          {
            label: 'Full screen',
            onClick: () => console.log('full screen'),
          },
          {
            label: 'Search',
            onClick: () => console.log('search'),
          },
          {
            label: 'Previous',
            onClick: () => console.log('previous'),
          },
          {
            label: 'Next',
            onClick: () => console.log('next'),
          },
        ],
      },
    ],
  },
  argTypes: {
    children: {
      control: false,
    },
    options: {
      control: false,
    },
    popoverProps: {
      control: false,
    },
  },
};

export default meta;

type TStory = StoryObj<typeof Menu>;

export const Playground: TStory = {};
