import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Collapse } from './index';

describe('<Collapse />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(<Collapse>Inside</Collapse>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', () => {
    const { asFragment } = render(<Collapse className="my-class-name">Inside</Collapse>);

    expect(asFragment()).toMatchSnapshot();
  });
});
