import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CloseIcon, PlusIcon } from '../icons';
import { Button } from './index';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: { children: 'Action' },
  argTypes: {
    children: { control: 'text' },
    startIcon: { control: false },
    endIcon: { control: false },
    // @ts-expect-error: `component` is not a valid prop
    component: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Playground: Story = {};

export const TextExample = () => (
  <>
    <Button>Text</Button>
    <Button disabled>Disabled</Button>
  </>
);

export const ContainedExample = () => (
  <>
    <Button variant="contained">Contained</Button>
    <Button variant="contained" disabled>Disabled</Button>
  </>
);

export const OutlinedExample = () => (
  <>
    <Button variant="outlined">Outlined</Button>
    <Button variant="outlined" disabled>Disabled</Button>
  </>
);

export const SizeExample = () => (
  <>
    <Button variant="contained" size="small">Small</Button>
    <Button variant="contained" size="medium">Medium</Button>
    <Button variant="contained" size="large">Large</Button>
  </>
);

export const DefaultColorExample = () => (
  <>
    <Button>Text</Button>
    <Button variant="contained">
      Contained
    </Button>
    <Button variant="outlined">
      Outlined
    </Button>
  </>
);

export const PrimaryColorExample = () => (
  <>
    <Button color="primary">Text</Button>
    <Button color="primary" variant="contained">
      Contained
    </Button>
    <Button color="primary" variant="outlined">
      Outlined
    </Button>
  </>
);

export const SecondaryColorExample = () => (
  <>
    <Button color="secondary">Text</Button>
    <Button color="secondary" variant="contained">
      Contained
    </Button>
    <Button color="secondary" variant="outlined">
      Outlined
    </Button>
  </>
);

export const WrongColorExample = () => (
  <>
    <Button color="wrong">Text</Button>
    <Button color="wrong" variant="contained">
      Contained
    </Button>
    <Button color="wrong" variant="outlined">
      Outlined
    </Button>
  </>
);

export const WhiteColorExample = () => (
  <>
    <Button color="white">Text</Button>
    <Button color="white" variant="contained">
      Contained
    </Button>
    <Button color="white" variant="outlined">
      Outlined
    </Button>
  </>
);

export const IconExample = () => (
  <>
    <Button
      color="primary"
      variant="outlined"
      startIcon={<PlusIcon />}
    >
      Add
    </Button>
    <Button
      color="wrong"
      variant="contained"
      endIcon={<CloseIcon />}
    >
      Remove
    </Button>
  </>
);
