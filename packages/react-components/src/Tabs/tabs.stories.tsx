import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, Tab } from './index';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: {
    children: [
      <Tab key="1" id="home">
        Home
      </Tab>,
      <Tab key="2" id="files">
        Files
      </Tab>,
      <Tab
        key="3"
        id="builds"
        disabled
      >
        Builds
      </Tab>,
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

type TStory = StoryObj<typeof Tabs>;

export const Playground: TStory = {};
