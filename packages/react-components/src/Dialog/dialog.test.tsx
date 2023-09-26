import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Dialog } from './index';

describe('<Dialog />', () => {
  it('should render with default styles', () => {
    const { baseElement } = render(
      <Dialog open={false}>
        Dialog Content
      </Dialog>,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('should render with default open styles', () => {
    const { baseElement } = render(
      <Dialog open>
        Dialog Content
      </Dialog>,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('should render fullscreen', () => {
    const { baseElement } = render(
      <Dialog open fullScreen>
        Dialog Content
      </Dialog>,
    );

    expect(baseElement).toMatchSnapshot();
  });

  describe('sizes', () => {
    const sizes: Array<React.ComponentProps<typeof Dialog>['size']> = [
      'small',
      'medium',
      'large',
    ];

    sizes.forEach((size) => {
      it(`size "${size}"`, () => {
        const { baseElement } = render(
          <Dialog open size={size}>
            Dialog Content
          </Dialog>,
        );

        expect(baseElement).toMatchSnapshot();
      });
    });
  });
});
