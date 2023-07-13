import deepmerge from 'deepmerge';
import { createTheme } from './utils';
import { defaultTheme } from './default_theme';
import { generateSecondaryColors } from './colors';

describe('styles utils', () => {
  describe('createTheme()', () => {
    it('expect default theme', () => {
      const theme = createTheme();

      expect(theme).toEqual(defaultTheme);
    });

    it('expect palette generation only by single color', () => {
      const theme = createTheme({
        color: {
          secondary: '#b50ce4',
        },
      });
      const secondaryColors = generateSecondaryColors('#b50ce4');

      expect(theme).toEqual(deepmerge(defaultTheme, {
        color: {
          ...secondaryColors,
        },
      }));
    });

    it('expect palette override', () => {
      const theme = createTheme({
        color: {
          secondary: '#b50ce4',
          'secondary-shade-3': '#cccccc',
        },
      });
      const secondaryColors = generateSecondaryColors('#b50ce4');

      expect(theme).toEqual(deepmerge(defaultTheme, {
        color: {
          ...secondaryColors,
          'secondary-shade-3': '#cccccc',
        },
      }));
    });
  });
});
