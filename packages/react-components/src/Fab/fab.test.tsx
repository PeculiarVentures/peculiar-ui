import React from 'react';
import { renderWithWrapper as render, screen } from '../test-utils';
import { PlusIcon } from '../icons';
import { Fab } from './index';

describe('<Fab />', () => {
  it('should render as default', () => {
    const { asFragment } = render(
      <Fab>
        <PlusIcon role="img" />
      </Fab>,
    );

    const button = screen.getByRole('button');
    const icon = screen.getByRole('img');

    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
    expect(icon.tagName).toBe('svg');
    expect(button).toContainElement(icon);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', () => {
    const { asFragment } = render(
      <Fab className="my-class-name">
        <PlusIcon role="img" />
      </Fab>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  describe('variants', () => {
    const variants: React.ComponentProps<typeof Fab>['variant'][] = [
      'contained',
      'outlined',
    ];

    variants.forEach((variant) => {
      it(`variant "${variant}"`, () => {
        const { asFragment } = render(
          <Fab variant={variant}>
            <PlusIcon role="img" />
          </Fab>,
        );

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
