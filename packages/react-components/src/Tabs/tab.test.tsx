import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Tab } from './index';

describe('<Tab />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(<Tab id="tab1">Tab-1</Tab>);

    expect(asFragment()).toMatchSnapshot();
  });
});
