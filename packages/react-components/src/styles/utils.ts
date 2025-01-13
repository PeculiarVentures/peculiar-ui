import flat from 'flat';
import deepmerge from 'deepmerge';
import { Color } from '@peculiar/color';
import { defaultThemeLight, defaultThemeDark } from './default_theme';
import type { ThemeOptionsType, ThemeType } from './types';
import {
  colors,
  generateSize,
} from './foundations';

export const themeCSSVariablePrefix = 'pv';

export const contrastThreshold = 2;

export const createTheme = (mode: 'light' | 'dark', options?: ThemeOptionsType): ThemeType => {
  const defaultTheme = mode === 'dark' ? defaultThemeDark : defaultThemeLight;

  const getContrastText = (background: string) => {
    const contrastRatio = new Color(background)
      .getContrastRatio(defaultTheme.color.white);

    return contrastRatio > contrastThreshold
      ? defaultTheme.color.white
      : defaultTheme.color.black;
  };

  const primary = options?.color?.primary
    ? colors.generateColorPalette('primary', options.color.primary)
    : undefined;
  const secondary = options?.color?.secondary
    ? colors.generateColorPalette('secondary', options.color.secondary)
    : undefined;
  const wrong = options?.color?.wrong
    ? colors.generateColorPalette('wrong', options.color.wrong)
    : undefined;
  const attention = options?.color?.attention
    ? colors.generateColorPalette('attention', options.color.attention)
    : undefined;
  const success = options?.color?.success
    ? colors.generateColorPalette('success', options.color.success)
    : undefined;

  return {
    color: deepmerge.all([
      defaultTheme.color,
      {
        ...primary || {},
        ...secondary || {},
        ...wrong || {},
        ...attention || {},
        ...success || {},
        ...(primary
          ? {
              'primary-contrast': getContrastText(primary.primary),
            }
          : {}),
        ...(secondary
          ? {
              'secondary-contrast': getContrastText(secondary.secondary),
            }
          : {}),
        ...(wrong
          ? {
              'wrong-contrast': getContrastText(wrong.wrong),
            }
          : {}),
      },
      options?.color || {},
    ]) as ThemeType['color'],
    shadow: deepmerge(defaultTheme.shadow, options?.shadow || {}),
    text: deepmerge(defaultTheme.text, options?.text || {}),
    size: generateSize(options?.size),
  };
};

export const createThemeCSSVariablesFromObject = (object: Record<string, any>) => {
  const flatted = flat<typeof object, Record<string, string>>(
    {
      [`--${themeCSSVariablePrefix}`]: object,
    },
    { delimiter: '-' },
  );

  return flatted;
};
