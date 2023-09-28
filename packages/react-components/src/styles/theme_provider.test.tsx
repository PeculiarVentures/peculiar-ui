import React from 'react';
import { render } from '../test-utils';
import { ThemeProvider } from './index';

describe('<ThemeProvider />', () => {
  it('should render with light theme', () => {
    render(
      <ThemeProvider>
        <div>
          Application
        </div>
      </ThemeProvider>,
    );

    expect(document.head).toMatchSnapshot();
  });

  it('should render with dark theme', () => {
    render(
      <ThemeProvider mode="dark">
        <div>
          Application
        </div>
      </ThemeProvider>,
    );

    expect(document.head).toMatchSnapshot();
  });
});
