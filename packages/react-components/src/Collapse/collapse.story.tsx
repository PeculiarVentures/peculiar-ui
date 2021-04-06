import * as React from 'react';
import { Collapse } from './index';
import { Typography } from '../Typography';

export const Playground = (args: any) => {
  const {
    in: inProp,
    timeout,
    children,
  } = args;

  return (
    <Collapse
      in={inProp}
      timeout={timeout}
    >
      <Typography
        variant="h1"
      >
        {children}
      </Typography>
    </Collapse>
  );
};

Playground.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
};

export default {
  title: 'Components/Animation/Collapse',
  component: Collapse,
  argTypes: {
    children: { control: 'text' },
  },
};
