import * as React from 'react';
import { Popup } from './index';

export const Playground = (args: any) => {
  const anchorEl = React.useRef();

  return (
    <>
      <button
        type="button"
        ref={anchorEl}
      >
        Popup anchor
      </button>
      <Popup
        {...args}
        anchorEl={anchorEl.current}
      >
        <div>World</div>
      </Popup>
    </>
  );
};

Playground.args = {};

export default {
  title: 'Components/Popup',
  component: Popup,
  argTypes: {
    children: { control: false },
    anchorEl: { control: false },
  },
};
