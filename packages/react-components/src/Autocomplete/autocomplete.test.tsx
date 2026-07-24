import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import {
  renderWithWrapper as render,
  screen,
  fireEvent,
  act,
  waitFor,
  userEvent,
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
    const sizes: React.ComponentProps<typeof Autocomplete>['size'][] = ['small', 'medium', 'large'];

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
      fireEvent.change(input, {
        target: {
          value: 'ap',
        },
      });
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

    await userEvent.hover(screen.getByRole('combobox'));

    await act(async () => {
      fireEvent.click(screen.getByTitle('Clear'));
    });
    expect(screen.queryByDisplayValue('clearable-option')).not.toBeInTheDocument();
  });

  it('should allow creating new options', async () => {
    const handleCreate = vi.fn();

    render(
      <Autocomplete
        id="test-id"
        options={[]}
        onCreate={handleCreate}
      />,
    );

    await act(async () => {
      fireEvent.change(screen.getByRole('combobox'), {
        target: {
          value: 'New Option',
        },
      });
    });

    fireEvent.keyDown(screen.getByRole('combobox'), {
      key: 'Enter',
      code: 'Enter',
    });
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

    fireEvent.keyDown(screen.getByRole('combobox'), {
      key: 'Escape',
      code: 'Escape',
    });

    await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument());
  });

  describe('multiple false', () => {
    it('should select only one option', () => {
      render(
        <Autocomplete
          id="test-id"
          options={['option-1', 'option-2', 'option-3']}
          multiple={false}
        />,
      );

      fireEvent.click(screen.getByRole('combobox'));
      fireEvent.click(screen.getByText('option-1'));

      expect(screen.getByDisplayValue('option-1')).toBeInTheDocument();

      fireEvent.click(screen.getByRole('combobox'));
      fireEvent.click(screen.getByText('option-2'));

      expect(screen.getByDisplayValue('option-2')).toBeInTheDocument();
      expect(screen.queryByDisplayValue('option-1')).not.toBeInTheDocument();
    });

    it('should clear the selected option', async () => {
      render(
        <Autocomplete
          id="test-id"
          options={['option-1']}
          multiple={false}
        />,
      );

      fireEvent.click(screen.getByRole('combobox'));
      fireEvent.click(screen.getByText('option-1'));

      expect(screen.getByDisplayValue('option-1')).toBeInTheDocument();

      await userEvent.hover(screen.getByRole('combobox'));

      await act(async () => {
        fireEvent.click(screen.getByTitle('Clear'));
      });

      expect(screen.queryByDisplayValue('option-1')).not.toBeInTheDocument();
    });
  });

  describe('multiple true', () => {
    it('should allow selecting multiple options', async () => {
      render(
        <Autocomplete
          id="test-id"
          options={['option-1', 'option-2', 'option-3']}
          multiple
        />,
      );

      await act(async () => {
        fireEvent.click(screen.getByRole('combobox'));
      });
      fireEvent.click(screen.getByText('option-1'));

      await act(async () => {
        fireEvent.click(screen.getByRole('combobox'));
      });
      fireEvent.click(screen.getByText('option-2'));

      expect(screen.getByText('option-1')).toBeInTheDocument();
      expect(screen.getByText('option-2')).toBeInTheDocument();
    });

    it('should display limitTags when multiple options are selected', () => {
      render(
        <Autocomplete
          id="test-id"
          options={['option-1', 'option-2', 'option-3']}
          value={['option-1', 'option-2', 'option-3']}
          limitTags={2}
          multiple
        />,
      );

      expect(screen.getByText('option-1')).toBeInTheDocument();
      expect(screen.getByText('option-2')).toBeInTheDocument();
      expect(screen.getByText('1 more')).toBeInTheDocument();
    });

    it('should allow clearing selected options', async () => {
      render(
        <Autocomplete
          id="test-id"
          options={['option-1', 'option-2']}
          multiple
          disableCloseOnSelect
        />,
      );

      fireEvent.click(screen.getByRole('combobox'));
      fireEvent.click(screen.getByText('option-1'));
      fireEvent.click(screen.getByText('option-2'));

      await userEvent.hover(screen.getByRole('combobox'));

      await act(async () => {
        fireEvent.click(screen.getByTitle('Clear'));
      });
      expect(screen.queryByText('option-1')).not.toBeInTheDocument();
      expect(screen.queryByText('option-2')).not.toBeInTheDocument();
    });

    it('should remove the last selected tag on Backspace when the input is empty', () => {
      const Test = () => {
        const [selected, setSelected] = React.useState(['option-1', 'option-2']);

        return (
          <Autocomplete
            id="test-id"
            options={['option-1', 'option-2']}
            value={selected}
            multiple
            onChange={(_event, newValue) => setSelected(newValue as string[])}
          />
        );
      };

      const { container } = render(<Test />);

      const tags = () => container.querySelectorAll('[data-tag-index]');

      expect(tags()).toHaveLength(2);

      fireEvent.keyDown(screen.getByRole('combobox'), {
        key: 'Backspace',
        code: 'Backspace',
      });

      expect(tags()).toHaveLength(1);
      expect(tags()[0]).toHaveTextContent('option-1');
    });

    it('should not remove tags on Backspace when the input has filter text', async () => {
      render(
        <Autocomplete
          id="test-id"
          options={['option-1', 'option-2']}
          value={['option-1', 'option-2']}
          multiple
        />,
      );

      const input = screen.getByRole('combobox');

      await act(async () => {
        fireEvent.change(input, {
          target: {
            value: 'a',
          },
        });
      });

      fireEvent.keyDown(input, {
        key: 'Backspace',
        code: 'Backspace',
      });

      expect(screen.getByText('option-1')).toBeInTheDocument();
      expect(screen.getByText('option-2')).toBeInTheDocument();
    });

    it('should not remove tags on Backspace when readOnly', () => {
      render(
        <Autocomplete
          id="test-id"
          options={['option-1', 'option-2']}
          value={['option-1', 'option-2']}
          multiple
          readOnly
        />,
      );

      fireEvent.keyDown(screen.getByRole('combobox'), {
        key: 'Backspace',
        code: 'Backspace',
      });

      expect(screen.getByText('option-1')).toBeInTheDocument();
      expect(screen.getByText('option-2')).toBeInTheDocument();
    });

    it('should not remove tags on Backspace when disabled', () => {
      render(
        <Autocomplete
          id="test-id"
          options={['option-1', 'option-2']}
          value={['option-1', 'option-2']}
          multiple
          disabled
        />,
      );

      fireEvent.keyDown(screen.getByRole('combobox'), {
        key: 'Backspace',
        code: 'Backspace',
      });

      expect(screen.getByText('option-1')).toBeInTheDocument();
      expect(screen.getByText('option-2')).toBeInTheDocument();
    });

    it('should call onChange with removeOption when removing a tag via Backspace', () => {
      const handleChange = vi.fn();

      render(
        <Autocomplete
          id="test-id"
          options={['option-1', 'option-2']}
          value={['option-1', 'option-2']}
          multiple
          onChange={handleChange}
        />,
      );

      fireEvent.keyDown(screen.getByRole('combobox'), {
        key: 'Backspace',
        code: 'Backspace',
      });

      expect(handleChange).toHaveBeenCalledWith(
        expect.any(Object),
        ['option-1'],
        {
          option: 'option-2',
          index: 1,
        },
        'removeOption',
      );
    });
  });
});
