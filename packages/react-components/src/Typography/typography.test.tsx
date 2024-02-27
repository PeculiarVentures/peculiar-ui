import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Typography } from './index';

describe('<Typography />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(
      <Typography>
        Typography message
      </Typography>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', () => {
    const { asFragment } = render(
      <Typography className="my-class-name">
        Typography message
      </Typography>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass "component"', () => {
    const { asFragment } = render(
      <Typography component="div">
        Typography message
      </Typography>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  describe('should render correct colors', () => {
    const colors: Array<React.ComponentProps<typeof Typography>['color']> = [
      'primary',
      'secondary',
      'wrong',
      'attention',
      'extra-1',
      'extra-2',
      'white',
      'black',
      'gray-1',
      'gray-2',
      'gray-3',
      'gray-4',
      'gray-5',
      'gray-6',
      'gray-7',
      'gray-8',
      'gray-9',
      'gray-10',
      'inherit',
    ];

    colors.forEach((color) => {
      it(`color: "${color}"`, () => {
        const { asFragment } = render(
          <Typography color={color}>
            Typography message
          </Typography>,
        );

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });

  describe('should render correct variants', () => {
    const variants: Array<React.ComponentProps<typeof Typography>['variant']> = [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      's1',
      's2',
      'b1',
      'b2',
      'b3',
      'btn1',
      'btn2',
      'c1',
      'c2',
    ];

    variants.forEach((variant) => {
      it(`variant: "${variant}"`, () => {
        const { asFragment } = render(
          <Typography variant={variant}>
            Typography message
          </Typography>,
        );

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
