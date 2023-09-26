import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Select } from './index';

describe('<Select />', () => {
  const options: Partial<React.ComponentProps<typeof Select>>['options'] = [
    { label: 'test-1', value: 'test1' },
    { label: 'test-2', value: 'test3' },
  ];

  it('should render with default styles', () => {
    const { asFragment } = render(
      <Select options={options} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', () => {
    const { asFragment } = render(
      <Select options={options} className="my-class-name" />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  describe('sizes', () => {
    const sizes: Array<React.ComponentProps<typeof Select>['size']> = [
      'small',
      'medium',
      'large',
    ];

    sizes.forEach((size) => {
      it(`size "${size}"`, () => {
        const { asFragment } = render(
          <Select options={options} size={size} />,
        );

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
