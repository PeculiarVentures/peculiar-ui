import { describe, it, expect } from 'vitest';
import { renderWithWrapper as render } from '../test-utils';
import { DialogContent } from './index';

describe('<DialogContent />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(
      <DialogContent>
        Content
      </DialogContent>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', () => {
    const { asFragment } = render(
      <DialogContent className="my-class-name">
        Content
      </DialogContent>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render error', () => {
    const { asFragment } = render(
      <DialogContent error="Some API error">
        Content
      </DialogContent>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
