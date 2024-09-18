import React from 'react';
import { renderWithWrapper as render, screen, fireEvent } from '../test-utils';
import { Select } from './index';

describe('<Select />', () => {
  const options = ['test-1', 'test-2'];

  it('should render with default styles', () => {
    const { asFragment } = render(
      <Select
        options={options}
        id="test-id"
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with default multiple styles', () => {
    const { asFragment } = render(
      <Select
        options={options}
        id="test-id"
        multiple
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', () => {
    const { asFragment } = render(
      <Select
        options={options}
        id="test-id"
        className="my-class-name"
      />,
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
          <Select
            options={options}
            id="test-id"
            size={size}
          />,
        );

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });

  it('should pass loading', () => {
    const { baseElement } = render(
      <Select
        options={[]}
        id="test-id"
        loading
        loadingText="Loading..."
      />,
    );

    fireEvent.click(screen.getByRole('combobox'));

    expect(baseElement).toMatchSnapshot();
  });

  it('should pass error', () => {
    const { baseElement } = render(
      <Select
        options={[]}
        id="test-id"
        error
        errorText="Error text"
      />,
    );

    fireEvent.click(screen.getByRole('combobox'));

    expect(baseElement).toMatchSnapshot();
  });

  it('should pass options', () => {
    const { baseElement } = render(
      <Select
        id="test-id"
        options={options}
      />,
    );

    fireEvent.click(screen.getByRole('combobox'));

    expect(baseElement).toMatchSnapshot();
  });
});
