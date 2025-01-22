import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './index';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: { inputProps: { control: false } },
};

export default meta;

type TStory = StoryObj<typeof Switch>;

export const Playground: TStory = {};
