import { renderWithWrapper as render } from '../test-utils';
import { DialogTitle } from './index';

describe('<DialogTitle />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(
      <DialogTitle>
        Title
      </DialogTitle>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', () => {
    const { asFragment } = render(
      <DialogTitle className="my-class-name">
        Title
      </DialogTitle>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render close button', () => {
    const { asFragment } = render(
      <DialogTitle onClose={jest.fn()}>
        Title
      </DialogTitle>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
