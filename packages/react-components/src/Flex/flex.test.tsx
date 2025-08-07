import { renderWithWrapper as render } from '../test-utils';
import { Flex } from './index';

describe('<Flex />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(
      <Flex>1</Flex>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render size auto', () => {
    const { asFragment } = render(
      <Flex size="auto" />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render size grow', () => {
    const { asFragment } = render(
      <Flex size="grow" />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', () => {
    const { asFragment } = render(
      <Flex className="my-class-name" />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass component', () => {
    const { asFragment } = render(
      <Flex component="p" />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
