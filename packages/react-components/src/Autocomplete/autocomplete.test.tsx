import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Autocomplete } from './index';

describe('<Autocomplete />', () => {
  describe('Autocomplete render variants', () => {
    it('should render as default', () => {
      const options = ['test-1', 'test-2'];

      const { asFragment } = render(
        <Autocomplete
          options={options}
        />,
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
