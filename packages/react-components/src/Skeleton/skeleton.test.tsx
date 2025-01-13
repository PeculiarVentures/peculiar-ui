import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Skeleton } from './index';

describe('<Skeleton />', () => {
  it('should render with default styles', () => {
    const {
      asFragment,
    } = render(<Skeleton>Inside</Skeleton>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with height & width', () => {
    const {
      asFragment,
    } = render(<Skeleton height={30} width={50}>Inside</Skeleton>);

    expect(asFragment()).toMatchSnapshot();
  });

  describe('should render correct variants', () => {
    const variants: React.ComponentProps<typeof Skeleton>['variant'][] = [
      'circle',
      'rect',
      'text',
    ];

    variants.forEach((variant) => {
      it(`variant: ${variant}`, () => {
        const {
          asFragment,
        } = render(
          <Skeleton variant={variant}>Inside</Skeleton>,
        );

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
