import * as React from 'react';
import { Popup } from './index';

export const Playground = (args: any) => (
  <Popup
    {...args}
  >
    <div>World</div>
  </Popup>
);

Playground.args = {
  anchorEl: (<button type="button">Hello</button>),
};

export default {
  title: 'Components/Popup',
  component: Popup,
  argTypes: {
    children: { control: false },
    anchorEl: { control: 'text' },
  },
};
