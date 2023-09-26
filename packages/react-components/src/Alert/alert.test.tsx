import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Alert } from '../index';

describe('<Alert />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(
      <Alert>
        Alert message
      </Alert>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
