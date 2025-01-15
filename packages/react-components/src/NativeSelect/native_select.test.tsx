import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { NativeSelect } from './index';

describe('<NativeSelect />', () => {
  const options: Partial<React.ComponentProps<typeof NativeSelect>>['options'] = [
    {
      label: 'test-1', value: 'test1',
    },
    {
      label: 'test-2', value: 'test3',
    },
  ];

  it('should render with default styles', () => {
    const {
      asFragment,
    } = render(
      <NativeSelect options={options} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', () => {
    const {
      asFragment,
    } = render(
      <NativeSelect options={options} className="my-class-name" />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  describe('sizes', () => {
    const sizes: React.ComponentProps<typeof NativeSelect>['size'][] = [
      'small',
      'medium',
      'large',
    ];

    sizes.forEach((size) => {
      it(`size "${size}"`, () => {
        const {
          asFragment,
        } = render(
          <NativeSelect options={options} size={size} />,
        );

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
