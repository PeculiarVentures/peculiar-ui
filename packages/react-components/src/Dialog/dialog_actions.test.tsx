import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { DialogActions } from './index';

describe('<DialogActions />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(
      <DialogActions>
        Buttons
      </DialogActions>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', () => {
    const { asFragment } = render(
      <DialogActions className="my-class-name">
        Buttons
      </DialogActions>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
