import { describe, it, expect, vi } from 'vitest';
import { renderWithWrapper as render } from '../test-utils';
import { Toast } from './toast';

describe('<Toast />', () => {
  it('should render with default styles', () => {
    const onClose = vi.fn();

    const { asFragment } = render(
      <Toast
        id="toast1"
        onClose={onClose}
      >
        Inside
      </Toast>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
