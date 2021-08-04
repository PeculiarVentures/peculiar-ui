import * as React from 'react';
import { Tabs, Tab } from './index';

export const Playground = (args: any) => {
  const [value, setValue] = React.useState('home');

  return (
    <Tabs
      {...args}
      value={value}
      onChange={(_, id) => setValue(id)}
    >
      <Tab id="home">
        Home
      </Tab>
      <Tab id="files">
        Files
      </Tab>
      <Tab id="builds" disabled>
        Builds
      </Tab>
    </Tabs>
  );
};

Playground.args = {};

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    children: { control: false },
    value: { control: false },
  },
  subcomponents: { Tab },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};
