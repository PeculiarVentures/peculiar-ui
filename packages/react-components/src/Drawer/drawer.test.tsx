import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Drawer } from './index';

describe('<Drawer />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(<Drawer open>Inside</Drawer>);

    expect(asFragment()).toMatchSnapshot();
  });
});
