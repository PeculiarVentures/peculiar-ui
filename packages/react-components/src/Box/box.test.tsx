import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Box } from './index';

describe('<Box />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(
      <Box />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', () => {
    const { asFragment } = render(
      <Box className="my-class-name" />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  describe('border positions', () => {
    const positions: React.ComponentProps<typeof Box>['borderPosition'][] = [
      'horizontal',
      'vertical',
      'top',
      'right',
      'bottom',
      'left',
    ];

    positions.forEach((position) => {
      it(`position "${position}"`, () => {
        const { asFragment } = render(
          <Box
            borderPosition={position}
            borderColor="attention"
            borderStyle="solid"
            borderWidth={1}
            borderRadius={4}
          >
            Message
          </Box>,
        );

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });

  describe('box shadow', () => {
    const shadows: React.ComponentProps<typeof Box>['boxShadow'][] = [
      'light-low',
      'light-medium',
      'light-hight',
      'light-soft',
      'dark-medium',
      'dark-hight',
    ];

    shadows.forEach((shadow) => {
      it(`shadow "${shadow}"`, () => {
        const { asFragment } = render(
          <Box
            boxShadow={shadow}
          >
            Message
          </Box>,
        );

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
