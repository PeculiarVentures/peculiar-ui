import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Drawer } from './index';
import { Button } from '../Button';
import { Typography } from '../Typography';

export default {
  title: 'Components/Drawer',
  component: Drawer,
  argTypes: {
    children: { control: false },
  },
} as ComponentMeta<typeof Drawer>;

export const Playground: ComponentStory<typeof Drawer> = (args) => (
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
