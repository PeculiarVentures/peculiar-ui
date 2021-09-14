/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { SelectPicker } from './index';
import { Button } from '../Button';

export const Playground = (args: any) => (
  <>
    <SelectPicker
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
  title: 'Components/SelectPicker',
  component: SelectPicker,
  argTypes: {
    children: { control: false },
    options: { control: false },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};
