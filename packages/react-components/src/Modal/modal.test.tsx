import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Modal } from './index';

describe('<Modal />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(
      <Modal open>
        <div>Inside</div>
      </Modal>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
