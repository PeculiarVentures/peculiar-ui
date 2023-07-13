import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Fade } from './index';
import { Typography } from '../Typography';

export default {
  title: 'Components/Animation/Fade',
  component: Fade,
  argTypes: {
    children: { control: false },
  },
} as ComponentMeta<typeof Fade>;

export const Playground: ComponentStory<typeof Fade> = (args) => (
  <Fade {...args}>
    <Typography
      variant="h1"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
    </Typography>
  </Fade>
);
