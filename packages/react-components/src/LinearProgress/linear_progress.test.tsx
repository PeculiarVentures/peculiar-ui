import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { LinearProgress } from './index';

describe('<LinearProgress />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(
      <LinearProgress />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', () => {
    const { asFragment } = render(
      <LinearProgress className="my-class-name" />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  describe('colors', () => {
    const colors: React.ComponentProps<typeof LinearProgress>['color'][] = [
      'primary',
      'secondary',
    ];

    colors.forEach((color) => {
      it(`color "${color}"`, () => {
        const { asFragment } = render(
          <LinearProgress color={color} />,
        );

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
