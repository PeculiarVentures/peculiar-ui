import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabs, Tab } from './index';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    children: { control: false },
    value: { control: false },
  },
  subcomponents: { Tab },
} as ComponentMeta<typeof Tabs>;

export const Playground: ComponentStory<typeof Tabs> = (args) => {
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
