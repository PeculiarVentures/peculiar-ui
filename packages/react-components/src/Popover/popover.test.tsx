import { describe, it, expect } from 'vitest';
import { act, renderWithWrapper as render } from '../test-utils';
import { Popover } from './index';

describe('<Popover />', () => {
  it('should render with default styles', async () => {
    const { baseElement } = render(
      <Popover
        open={false}
        anchorEl={document.createElement('div')}
      >
        <div>Inside</div>
      </Popover>,
    );

    // Popper update() - https://github.com/popperjs/react-popper/issues/350
    await act(async () => await null);

    expect(baseElement).toMatchSnapshot();
  });

  it('should render with default open styles', async () => {
    const { baseElement } = render(
      <Popover
        open
        anchorEl={document.createElement('div')}
      >
        <div>Inside</div>
      </Popover>,
    );

    // Popper update() - https://github.com/popperjs/react-popper/issues/350
    await act(async () => await null);

    expect(baseElement).toMatchSnapshot();
  });
});
