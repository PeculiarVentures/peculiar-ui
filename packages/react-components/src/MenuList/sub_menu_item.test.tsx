import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { SubMenuItem } from './index';

describe('<SubMenuItem />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(<SubMenuItem>SubItem</SubMenuItem>);

    expect(asFragment()).toMatchSnapshot();
  });
});
