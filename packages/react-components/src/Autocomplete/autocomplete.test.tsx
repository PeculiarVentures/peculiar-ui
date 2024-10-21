import React from 'react';
import {
  renderWithWrapper as render,
  screen,
  fireEvent,
  act,
  waitFor,
} from '../test-utils';
import { Autocomplete } from './index';

describe('<Autocomplete />', () => {
  const options = ['test-1', 'test-2', 'apple', 'banana', 'grape'];

  it('should render with default styles', () => {
    const { asFragment } = render(
      <Autocomplete
        options={options}
        id="test-id"
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with multiple selection enabled', () => {
    const { asFragment } = render(
      <Autocomplete
        options={options}
        id="test-id"
        multiple
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should apply className', () => {
    const { container } = render(
      <Autocomplete
        options={options}
        id="test-id"
        className="my-class-name"
      />,
    );

    expect(container.querySelector('.my-class-name')).toBeTruthy();
  });

  describe('sizes', () => {
    const sizes: Array<React.ComponentProps<typeof Autocomplete>['size']> = [
      'small',
      'medium',
      'large',
    ];

    sizes.forEach((size) => {
      it(`renders with size "${size}"`, () => {
        const { asFragment } = render(
          <Autocomplete
            options={options}
            id="test-id"
            size={size}
          />,
        );

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });

  it('should display loading state', async () => {
    const { getByText } = render(
      <Autocomplete
        options={[]}
        id="test-id"
        loading
        loadingText="Loading..."
      />,
    );

    await act(async () => {
      fireEvent.click(screen.getByRole('combobox'));
    });
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('should show error message when in error state', () => {
    const { getByText } = render(
      <Autocomplete
        options={[]}
        id="test-id"
        error
        errorText="Error occurred"
      />,
    );

    expect(getByText('Error occurred')).toBeInTheDocument();
  });

  it('should open the dropdown when clicked', async () => {
    render(
      <Autocomplete
        id="test-id"
        options={options}
      />,
    );

    await act(async () => {
      fireEvent.click(screen.getByRole('combobox'));
    });
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('should handle user typing and show filtered options', async () => {
    render(
      <Autocomplete
        id="test-id"
        options={['apple', 'banana', 'grape']}
      />,
    );

    const input = screen.getByRole('combobox');

    await act(async () => {
      fireEvent.change(input, { target: { value: 'ap' } });
    });

    expect(screen.getByText('apple')).toBeInTheDocument();
    expect(screen.queryByText('banana')).not.toBeInTheDocument();
  });

  it('should select option and display it', () => {
    render(
      <Autocomplete
        id="test-id"
        options={['option-1', 'option-2']}
      />,
    );

    fireEvent.click(screen.getByRole('combobox'));
    fireEvent.click(screen.getByText('option-1'));

    expect(screen.getByDisplayValue('option-1')).toBeInTheDocument();
  });

  it('should allow clearing selected option', async () => {
    render(
      <Autocomplete
        id="test-id"
        options={['clearable-option']}
      />,
    );

    fireEvent.click(screen.getByRole('combobox'));
    fireEvent.click(screen.getByText('clearable-option'));

    expect(screen.getByDisplayValue('clearable-option')).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(screen.getByRole('combobox'));
    });

    fireEvent.click(screen.getByRole('button', { name: /clear/i }));
    expect(screen.queryByDisplayValue('clearable-option')).not.toBeInTheDocument();
  });

  it('should allow creating new options', async () => {
    const handleCreate = jest.fn();

    render(
      <Autocomplete
        id="test-id"
        options={[]}
        allowCreateOption
        onCreate={handleCreate}
      />,
    );

    await act(async () => {
      fireEvent.change(screen.getByRole('combobox'), { target: { value: 'New Option' } });
    });

    fireEvent.keyDown(screen.getByRole('combobox'), { key: 'Enter', code: 'Enter' });
    expect(handleCreate).toHaveBeenCalledWith(expect.any(Object), 'New Option');
  });

  it('should close the dropdown on Escape key press', async () => {
    render(
      <Autocomplete
        id="test-id"
        options={options}
      />,
    );

    await act(async () => {
      fireEvent.click(screen.getByRole('combobox'));
    });

    expect(screen.getByRole('listbox')).toBeInTheDocument();

    fireEvent.keyDown(screen.getByRole('combobox'), { key: 'Escape', code: 'Escape' });

    await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument());
  });
});
