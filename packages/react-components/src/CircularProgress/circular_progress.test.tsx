import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { CircularProgress } from './index';

describe('<CircularProgress />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(<CircularProgress />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', () => {
    const { asFragment } = render(<CircularProgress className="my-class-name" />);

    expect(asFragment()).toMatchSnapshot();
  });

  describe('sizes', () => {
    const sizes: React.ComponentProps<typeof CircularProgress>['size'][] = [
      'small',
      'large',
    ];

    sizes.forEach((size) => {
      it(`size "${size}"`, () => {
        const { asFragment } = render(
          <CircularProgress size={size} />,
        );

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });

  describe('colors', () => {
    const colors: React.ComponentProps<typeof CircularProgress>['color'][] = [
      'primary',
      'secondary',
      'white',
    ];

    colors.forEach((color) => {
      it(`color "${color}"`, () => {
        const { asFragment } = render(
          <CircularProgress color={color} />,
        );

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
