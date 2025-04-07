import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Tab, Tabs } from './index';

describe('<Tabs />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(
      <Tabs value="tab1">
        <Tab id="tab1">Tab-1</Tab>
        <Tab id="tab2">Tab-2</Tab>
      </Tabs>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', () => {
    const { asFragment } = render(
      <Tabs value="tab1" className="my-class-name">
        <Tab id="tab1">Tab-1</Tab>
        <Tab id="tab2">Tab-2</Tab>
      </Tabs>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
