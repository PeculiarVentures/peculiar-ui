import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { PlusIcon } from '../icons';
import { Chip } from './index';

describe('<Chip />', () => {
  it('should render with default styles', () => {
    const {
      asFragment,
    } = render(<Chip>Text</Chip>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', () => {
    const {
      asFragment,
    } = render(
      <Chip className="my-class-name">
        Text
      </Chip>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should have delete icon', () => {
    const {
      asFragment,
    } = render(
      <Chip
        onDelete={jest.fn()}
      >
        Text
      </Chip>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should have custom delete icon', () => {
    const {
      asFragment,
    } = render(
      <Chip
        deleteIcon={PlusIcon}
        onDelete={jest.fn()}
      >
        Text
      </Chip>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  describe('variants & colors', () => {
    const variants: React.ComponentProps<typeof Chip>['variant'][] = [
      'contained',
      'outlined',
    ];
    const colors: React.ComponentProps<typeof Chip>['color'][] = [
      'default',
      'secondary',
      'wrong',
    ];

    variants.forEach((variant) => {
      colors.forEach((color) => {
        it(`variant "${variant}, color "${color}"`, () => {
          const {
            asFragment,
          } = render(
            <Chip variant={variant} color={color}>
              Text
            </Chip>,
          );

          expect(asFragment()).toMatchSnapshot();
        });
      });
    });
  });
});
