import { renderWithWrapper as render } from '../test-utils';
import { AutocompleteTag } from './index';

describe('<AutocompleteTag />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(
      <AutocompleteTag>Text</AutocompleteTag>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', () => {
    const { asFragment } = render(
      <AutocompleteTag className="my-class-name">
        Text
      </AutocompleteTag>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should have delete icon', () => {
    const { asFragment } = render(
      <AutocompleteTag
        onDelete={vi.fn()}
      >
        Text
      </AutocompleteTag>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should have start content', () => {
    const { asFragment } = render(
      <AutocompleteTag startContent={<span>Start</span>}>
        Text
      </AutocompleteTag>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
