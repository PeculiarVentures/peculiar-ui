import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Backdrop } from './index';

describe('<Backdrop />', () => {
  describe('Backdrop render variants', () => {
    it('should render as default', () => {
      const { asFragment } = render(
        <Backdrop open />,
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
