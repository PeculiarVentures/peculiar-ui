import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './index';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: { children: { control: false } },
};

export default meta;

type TStory = StoryObj<typeof Avatar>;

export const Playground: TStory = {};
