import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Slide } from './index';

describe('<Slide />', () => {
  it('should render with default styles', () => {
    const {
      asFragment,
    } = render(
      <Slide>
        <div>Inside</div>
      </Slide>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  describe('directions', () => {
    const directions: React.ComponentProps<typeof Slide>['direction'][] = [
      'down',
      'left',
      'right',
      'up',
    ];

    directions.forEach((direction) => {
      describe(`direction "${direction}"`, () => {
        it('before animation', () => {
          const {
            asFragment,
          } = render(
            <Slide direction={direction}>
              <div>Inside</div>
            </Slide>,
          );

          expect(asFragment()).toMatchSnapshot();
        });

        it('after animation', () => {
          const {
            asFragment,
          } = render(
            <Slide in direction={direction}>
              <div>Inside</div>
            </Slide>,
          );

          expect(asFragment()).toMatchSnapshot();
        });
      });
    });
  });
});
