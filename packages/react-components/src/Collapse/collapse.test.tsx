import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Collapse } from './index';

describe('<Collapse />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(
      <Collapse>Inside</Collapse>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', () => {
    const { asFragment } = render(
      <Collapse className="my-class-name">Inside</Collapse>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  describe('orientations', () => {
    const orientations: React.ComponentProps<typeof Collapse>['orientation'][] = [
      'horizontal',
      'vertical',
    ];

    orientations.forEach((orientation) => {
      describe(`orientation "${orientation}"`, () => {
        it('before animation', () => {
          const { asFragment } = render(
            <Collapse orientation={orientation}>
              <div>Inside</div>
            </Collapse>,
          );

          expect(asFragment()).toMatchSnapshot();
        });

        it('after animation', () => {
          const { asFragment } = render(
            <Collapse in orientation={orientation}>
              <div>Inside</div>
            </Collapse>,
          );

          expect(asFragment()).toMatchSnapshot();
        });
      });
    });
  });
});
