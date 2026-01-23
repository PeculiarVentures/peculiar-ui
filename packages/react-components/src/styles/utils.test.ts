import { describe, it, expect } from 'vitest';
import deepmerge from 'deepmerge';
import { createTheme } from './utils';
import { defaultThemeLight, defaultThemeDark } from './default_theme';
import { colors } from './foundations';

describe('styles utils', () => {
  describe('createTheme()', () => {
    describe('light', () => {
      it('expect default theme', () => {
        const theme = createTheme('light');

        expect(theme).toEqual(defaultThemeLight);
      });

      it('expect palette generation only by single color', () => {
        const theme = createTheme('light', {
          color: {
            secondary: '#b50ce4',
          },
        });
        const secondaryColors = colors.generateColorPalette('secondary', '#b50ce4');

        expect(theme).toEqual(deepmerge(defaultThemeLight, {
          color: {
            ...secondaryColors,
          },
        }));
      });

      it('expect palette override', () => {
        const theme = createTheme('light', {
          color: {
            secondary: '#b50ce4',
            'secondary-shade-3': '#cccccc',
          },
        });
        const secondaryColors = colors.generateColorPalette('secondary', '#b50ce4');

        expect(theme).toEqual(deepmerge(defaultThemeLight, {
          color: {
            ...secondaryColors,
            'secondary-shade-3': '#cccccc',
          },
        }));
      });
    });

    describe('dark', () => {
      it('expect default theme', () => {
        const theme = createTheme('dark');

        expect(theme).toEqual(defaultThemeDark);
      });

      it('expect palette generation only by single color', () => {
        const theme = createTheme('dark', {
          color: {
            secondary: '#b50ce4',
          },
        });
        const secondaryColors = colors.generateColorPalette('secondary', '#b50ce4');

        expect(theme).toEqual(deepmerge(defaultThemeDark, {
          color: {
            ...secondaryColors,
          },
        }));
      });

      it('expect palette override', () => {
        const theme = createTheme('dark', {
          color: {
            secondary: '#b50ce4',
            'secondary-shade-3': '#cccccc',
          },
        });
        const secondaryColors = colors.generateColorPalette('secondary', '#b50ce4');

        expect(theme).toEqual(deepmerge(defaultThemeDark, {
          color: {
            ...secondaryColors,
            'secondary-shade-3': '#cccccc',
          },
        }));
      });
    });
  });
});
