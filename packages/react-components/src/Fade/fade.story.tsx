import * as React from 'react';
import { Fade } from './index';
import { Typography } from '../Typography';

export const Playground = (args: any) => {
  const {
    in: inProp,
    timeout,
    children,
  } = args;

  return (
    <Fade
      in={inProp}
      timeout={timeout}
    >
      <Typography
        variant="h1"
      >
        {children}
      </Typography>
    </Fade>
  );
};

Playground.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
};

export default {
  title: 'Components/Animation/Fade',
  component: Fade,
  argTypes: {
    children: { control: 'text' },
  },
};
