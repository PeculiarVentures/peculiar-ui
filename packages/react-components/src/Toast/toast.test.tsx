import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Toast } from './toast';

describe('<Toast />', () => {
  it('should render with default styles', () => {
    const onClose = jest.fn();

    const { asFragment } = render(
      <Toast
        id="toast1"
        onClose={onClose}
      >
        Inside
      </Toast>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
