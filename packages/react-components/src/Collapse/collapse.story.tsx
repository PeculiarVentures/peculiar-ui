import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Collapse } from './index';
import { Typography } from '../Typography';

export default {
  title: 'Components/Animation/Collapse',
  component: Collapse,
  argTypes: {
    children: { control: 'text' },
  },
} as ComponentMeta<typeof Collapse>;

export const Playground: ComponentStory<typeof Collapse> = (args) => {
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
