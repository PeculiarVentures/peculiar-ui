import * as React from 'react';
import { Slide } from './index';
import { Typography } from '../Typography';

export const Playground = (args: any) => (
  <Slide {...args}>
    <Typography
      variant="h1"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
    </Typography>
  </Slide>
);

export default {
  title: 'Components/Animation/Slide',
  component: Slide,
  argTypes: {
    children: { control: false },
  },
};
