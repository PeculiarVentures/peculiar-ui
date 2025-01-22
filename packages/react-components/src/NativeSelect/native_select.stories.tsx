import type { Meta, StoryObj } from '@storybook/react';
import { NativeSelect } from './index';

const meta: Meta<typeof NativeSelect> = {
  title: 'Components/NativeSelect',
  component: NativeSelect,
  args: {
    options: [
      {
        value: '10',
        label: 'Ten',
      },
      {
        value: '20',
        label: 'Twenty',
      },
      {
        value: '30',
        label: 'Thirty',
      },
    ],
    placeholder: 'Select a movie',
  },
  tags: ['autodocs'],
  argTypes: {
    options: { control: false },
    inputProps: { control: false },
    inputRef: { control: false },
    defaultValue: { control: false },
    value: { control: false },
    onChange: { control: false },
  },
};

export default meta;

type TStory = StoryObj<typeof NativeSelect>;

export const Playground: TStory = {};
