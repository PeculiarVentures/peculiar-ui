import * as React from 'react';
import { Popup } from './index';

export const Playground = (args: any) => (
  <Popup
    {...args}
  >
    <button type="button">Hello</button>
  </Popup>
);

Playground.args = {
  anchorEl: (<div>World</div>),
};

export default {
  title: 'Components/Popup',
  component: Popup,
  argTypes: {
    children: { control: 'text' },
    anchorEl: { control: false },
  },
};
