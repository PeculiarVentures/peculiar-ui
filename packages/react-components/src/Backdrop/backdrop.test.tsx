import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Backdrop } from './index';

describe('<Backdrop />', () => {
  it('should render with default styles', () => {
    const {
      asFragment,
    } = render(
      <Backdrop open />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', () => {
    const {
      asFragment,
    } = render(
      <Backdrop open className="my-class-name" />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  describe('variants', () => {
    const variants: React.ComponentProps<typeof Backdrop>['variant'][] = [
      'light',
      'medium',
      'heavy',
    ];

    variants.forEach((variant) => {
      it(`variant "${variant}"`, () => {
        const {
          asFragment,
        } = render(
          <Backdrop open variant={variant} />,
        );

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
