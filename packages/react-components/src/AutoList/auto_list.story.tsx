/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { AutoMenu } from './index';
import { Button } from '../Button';

export const Playground = (args: any) => (
  <>
    <AutoMenu
      {...args}
      onChange={(data) => console.log(data)}
      // defaultValue="save_profile"
      // placeholder="Click"
      options={[
        {
          label: 'Print',
          value: 'print',
        },
        {
          label: 'Save to my profile',
          value: 'save_profile',
        },
        {
          label: 'Delete',
          value: 'delete',
        },
        {
          label: 'Rename',
          value: 'rename',
        },
        {
          label: 'Rename 1',
          value: 'rename_1',
        },
        {
          label: 'Rename 2',
          value: 'rename_2',
        },
      ]}
    />
    <Button>
      Next
    </Button>
  </>
);

Playground.args = {};

export default {
  title: 'Components/AutoMenu',
  component: AutoMenu,
  argTypes: {
    children: { control: false },
    options: { control: false },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};
