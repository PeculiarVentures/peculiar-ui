import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { TextareaField } from './index';

describe('<TextareaField />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(<TextareaField />);

    expect(asFragment()).toMatchSnapshot();
  });
});
