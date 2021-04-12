import * as React from 'react';
import { Button } from '../Button';
import { Tooltip } from './index';

export const Playground = (args: any) => (
  <div style={{ padding: '40px' }}>
    <Tooltip
      {...args}
    >
      <Button variant="primary">Hello</Button>
    </Tooltip>
  </div>
);

Playground.args = {
  title: 'Tooltip content',
};

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    children: { control: false },
    title: { control: false },
  },
};
