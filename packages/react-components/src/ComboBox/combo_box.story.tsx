import * as React from 'react';
import { ComboBox } from './index';

const Template = (args: any) => (
  <ComboBox {...args} />
);

export const Playground = Template.bind({});

Playground.args = {
  options: [
    { value: 'Oliver Hansen', label: 'Oliver Hansen' },
    { value: 'Van Henry', label: 'Van Henry' },
    { value: 'April Tucker', label: 'April Tucker' },
    { value: 'Ralph Hubbard', label: 'Ralph Hubbard' },
    { value: 'Omar Alexander', label: 'Omar Alexander' },
    { value: 'Carlos Abbott', label: 'Carlos Abbott' },
    { value: 'Miriam Wagner', label: 'Miriam Wagner' },
    { value: 'Bradley Wilkerson', label: 'Bradley Wilkerson' },
    { value: 'Virginia Andrews', label: 'Virginia Andrews' },
    { value: 'Kelly Snyder', label: 'Kelly Snyder' },
  ],
};
Playground.parameters = {};

export default {
  title: 'Components/ComboBox',
  component: ComboBox,
  argTypes: {
    options: { control: false },
    defaultValue: { control: false },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};
