import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './index';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  args: {
    placeholder: 'Placeholder',
  },
  argTypes: {
    inputProps: { control: false },
    inputRef: { control: false },
    onChange: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Playground: Story = {};

export const FormExample = () => (
  <>
    <TextField
      defaultValue="Hello World"
      required
      label="Required"
      id="TextField-required"
    />
    <TextField
      defaultValue="Hello World"
      type="password"
      label="Password"
      id="TextField-password"
    />
    <TextField
      type="number"
      label="Number"
      id="TextField-number"
    />
    <TextField
      defaultValue="Hello World"
      readOnly
      label="Read Only"
      id="TextField-readOnly"
    />
    <TextField
      defaultValue="Hello World"
      disabled
      label="Disabled"
      id="TextField-disabled"
    />
  </>
);

export const SizeExample = () => (
  <>
    <TextField
      size="small"
      defaultValue="Small"
      placeholder="Size"
    />
    <TextField
      size="medium"
      defaultValue="Medium"
      placeholder="Size"
    />
    <TextField
      size="large"
      defaultValue="Large"
      placeholder="Size"
    />
  </>
);

export const ColorExample = () => (
  <TextField placeholder="Color" defaultValue="Secondary" />
);

export const ValidationExample = () => (
  <TextField
    error
    errorText="Incorrect entry."
    placeholder="Error"
    defaultValue="Hello World"
  />
);
