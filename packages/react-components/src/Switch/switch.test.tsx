import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Switch } from './index';

describe('<Switch />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(
      <Switch id="test-id" />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', () => {
    const { asFragment } = render(
      <Switch className="my-class-name" id="test-id" />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  describe('colors', () => {
    const colors: React.ComponentProps<typeof Switch>['color'][] = [
      'primary',
      'secondary',
    ];

    colors.forEach((color) => {
      it(`color "${color}"`, () => {
        const { asFragment } = render(
          <Switch color={color} id="test-id" />,
        );

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
