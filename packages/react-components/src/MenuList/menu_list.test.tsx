import { renderWithWrapper as render } from '../test-utils';
import { MenuList } from './index';

describe('<MenuList />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(
      <MenuList>
        <li>Item-1</li>
        <li>Item-2</li>
        <li>Item-3</li>
      </MenuList>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', () => {
    const { asFragment } = render(
      <MenuList className="my-class-name">
        <li>Item-1</li>
        <li>Item-2</li>
        <li>Item-3</li>
      </MenuList>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
