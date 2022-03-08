import * as React from 'react';
import { TextField } from '../TextField';
import { Button } from '../Button';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from './index';

const Template = (args: any) => (
  <Dialog {...args}>
    <DialogTitle
      onClose={() => { }}
    >
      Sign in
    </DialogTitle>
    <DialogContent>
      <div>
        <TextField
          label="Email"
          type="email"
          id="email"
        />
      </div>
      <div>
        <TextField
          label="Password"
          type="password"
          id="password"
        />
      </div>
    </DialogContent>
    <DialogActions>
      <Button>
        Cancel
      </Button>
      <Button variant="contained" color="secondary">
        Send
      </Button>
    </DialogActions>
  </Dialog>
);

export const Playground = Template.bind({});

Playground.args = {
  size: 'small',
};
Playground.parameters = {};

export default {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {
    children: { control: false },
  },
};
