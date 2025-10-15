import React from 'react';
import { renderWithWrapper as render, act } from '../test-utils';
import { Tooltip } from './index';

describe('<Tooltip />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(
      <Tooltip title="tooltipText">
        <div>Text</div>
      </Tooltip>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', () => {
    const { asFragment } = render(
      <Tooltip
        open
        title="tooltipText"
        className="my-class-name"
      >
        <div>Text</div>
      </Tooltip>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass arrow', async () => {
    const { asFragment } = render(
      <Tooltip
        open
        arrow
        title="tooltipText"
      >
        <div>Text</div>
      </Tooltip>,
    );

    // Popper update() - https://github.com/popperjs/react-popper/issues/350
    await act(async () => await null);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass interactive', () => {
    const { asFragment } = render(
      <Tooltip
        open
        interactive
        title="tooltipText"
      >
        <div>Text</div>
      </Tooltip>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  describe('sizes', () => {
    const sizes: React.ComponentProps<typeof Tooltip>['size'][] = [
      'small',
      'large',
    ];

    sizes.forEach((size) => {
      it(`size "${size}"`, () => {
        const { asFragment } = render(
          <Tooltip
            open
            size={size}
            title="tooltipText"
          >
            <div>Text</div>
          </Tooltip>,
        );

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });

  describe('colors', () => {
    const colors: React.ComponentProps<typeof Tooltip>['color'][] = [
      'black',
      'white',
    ];

    colors.forEach((color) => {
      it(`color "${color}"`, () => {
        const { asFragment } = render(
          <Tooltip
            open
            color={color}
            title="tooltipText"
          >
            <div>Text</div>
          </Tooltip>,
        );

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
