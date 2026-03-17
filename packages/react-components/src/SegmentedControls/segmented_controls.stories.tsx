import type { Meta, StoryObj } from '@storybook/react';
import { SegmentedControls, SegmentedControl } from './index';

const meta: Meta<typeof SegmentedControls> = {
  title: 'Components/SegmentedControls',
  component: SegmentedControls,
  tags: ['autodocs'],
  args: {
    children: [
      <SegmentedControl key="1" id="home">
        Home
      </SegmentedControl>,
      <SegmentedControl key="2" id="files">
        Files
      </SegmentedControl>,
      <SegmentedControl
        key="3"
        id="builds"
        disabled
      >
        Builds
      </SegmentedControl>,
    ],
    value: 'home',
  },
  argTypes: {
    children: {
      control: false,
    },
    value: {
      control: false,
    },
  },
};

export default meta;

type TStory = StoryObj<typeof SegmentedControls>;

export const Playground: TStory = {};
