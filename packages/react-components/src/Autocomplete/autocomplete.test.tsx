import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Autocomplete } from './index';

describe('<Autocomplete />', () => {
  const options = ['test-1', 'test-2'];

  it('should render with default styles', () => {
    const { asFragment } = render(
      <Autocomplete
        options={options}
        id="test-id"
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with default multiple styles', () => {
    const { asFragment } = render(
      <Autocomplete
        options={options}
        id="test-id"
        multiple
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', () => {
    const { asFragment } = render(
      <Autocomplete
        options={options}
        id="test-id"
        className="my-class-name"
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  describe('sizes', () => {
    const sizes: Array<React.ComponentProps<typeof Autocomplete>['size']> = [
      'small',
      'medium',
      'large',
    ];

    sizes.forEach((size) => {
      it(`size "${size}"`, () => {
        const { asFragment } = render(
          <Autocomplete
            options={options}
            id="test-id"
            size={size}
          />,
        );

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
