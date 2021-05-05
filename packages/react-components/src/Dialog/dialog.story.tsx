import * as React from 'react';
import { Button } from '../Button';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from './index';

export const Playground = (args: any) => (
  <Dialog {...args}>
    <DialogTitle>
      Hello
    </DialogTitle>
    <DialogContent>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Illum vitae veritatis iure explicabo labore temporibus sint iste officiis,
      amet asperiores recusandae illo, adipisci repellendus,
      laudantium alias molestias doloremque error dolorum.
    </DialogContent>
    <DialogActions>
      <Button>
        Cancel
      </Button>
      <Button variant="contained" color="primary">
        Ok
      </Button>
    </DialogActions>
  </Dialog>
);

Playground.args = {};

export default {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {
    children: { control: false },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};
