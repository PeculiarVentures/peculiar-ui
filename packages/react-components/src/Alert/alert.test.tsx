import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Alert } from './index';

describe('<Alert />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(
      <Alert>
        Alert message
      </Alert>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', () => {
    const { asFragment } = render(
      <Alert className="my-class-name">
        Alert message
      </Alert>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  describe('variants', () => {
    const variants: Array<React.ComponentProps<typeof Alert>['variant']> = [
      'attention',
      'pending',
      'success',
      'wrong',
    ];

    variants.forEach((variant) => {
      describe(`variant "${variant}"`, () => {
        it('enable icon', () => {
          const { asFragment } = render(
            <Alert variant={variant} disableIcon={false}>
              Message
              {variant}
            </Alert>,
          );

          expect(asFragment()).toMatchSnapshot();
        });

        it('disable icon', () => {
          const { asFragment } = render(
            <Alert variant={variant} disableIcon>
              Message
              {variant}
            </Alert>,
          );

          expect(asFragment()).toMatchSnapshot();
        });
      });
    });
  });
});
