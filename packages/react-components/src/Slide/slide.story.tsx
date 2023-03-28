import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Slide } from './index';
import { Typography } from '../Typography';

export default {
  title: 'Components/Animation/Slide',
  component: Slide,
  argTypes: {
    children: { control: false },
  },
} as ComponentMeta<typeof Slide>;

export const Playground: ComponentStory<typeof Slide> = (args) => (
  <Slide {...args}>
    <Typography
      variant="h1"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
    </Typography>
  </Slide>
);
