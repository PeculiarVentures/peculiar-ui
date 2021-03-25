import * as React from 'react';
import { Drawer } from './index';
import { Button } from '../Button';
import { Typography } from '../Typography';

export const Playground = (args: any) => (
  <Drawer
    {...args}
    style={{
      padding: '20px',
    }}
  >
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
    </Typography>
    <Button>
      Button
    </Button>
  </Drawer>
);

Playground.args = {};

export default {
  title: 'Components/Drawer',
  component: Drawer,
  argTypes: {
    children: { control: false },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};
