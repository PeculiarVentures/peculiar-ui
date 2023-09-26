import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { ButtonBase } from './index';

describe('<ButtonBase />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(<ButtonBase>Text</ButtonBase>);

    expect(asFragment()).toMatchSnapshot();
  });
});
