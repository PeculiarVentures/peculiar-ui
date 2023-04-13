import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../Button';
import { Tooltip } from './index';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    children: { control: false },
    title: { control: false },
  },
} as ComponentMeta<typeof Tooltip>;

export const Playground: ComponentStory<typeof Tooltip> = (args) => (
  <div style={{ padding: '40px' }}>
    <Tooltip
      {...args}
    >
      <Button>
        Action
      </Button>
    </Tooltip>
  </div>
);

Playground.args = {
  title: 'Tooltip content',
};
