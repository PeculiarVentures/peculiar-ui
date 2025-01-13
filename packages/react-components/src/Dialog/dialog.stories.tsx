import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '../TextField';
import { Button } from '../Button';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from './index';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <DialogTitle
          onClose={() => {
            console.log('Close callback!');
          }}
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
      </>
    ),
  },
  argTypes: {
    children: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Playground: Story = {};
