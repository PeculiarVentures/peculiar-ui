import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { FlexContainer } from './index';

describe('<FlexContainer />', () => {
  it('should render with default styles', () => {
    const {
      asFragment,
    } = render(<FlexContainer>1</FlexContainer>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', () => {
    const {
      asFragment,
    } = render(<FlexContainer className="test-classname" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass gap', () => {
    const {
      asFragment,
    } = render(<FlexContainer gap={10} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass direction', () => {
    const {
      asFragment,
    } = render(<FlexContainer direction="column" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass wrap', () => {
    const {
      asFragment,
    } = render(<FlexContainer wrap="nowrap" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass align', () => {
    const {
      asFragment,
    } = render(<FlexContainer align="center" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass justify', () => {
    const {
      asFragment,
    } = render(<FlexContainer justify="flex-end" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass component', () => {
    const {
      asFragment,
    } = render(<FlexContainer component="li" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
