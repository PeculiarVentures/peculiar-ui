import flat from 'flat';
import deepmerge from 'deepmerge';
import { Color } from '@peculiar/color';
import { defaultTheme } from './default_theme';
import type { ThemeOptionsType, ColorType } from './types';
import {
  generateWrongColors,
  generateSecondaryColors,
  generatePrimaryColors,
  generateAttentionColors,
} from './colors';
import {
  generateBaseSize,
} from './sizes';

export const themeCSSVariablePrefix = 'pv';
export const contrastThreshold = 2;

export const createTheme = (options?: ThemeOptionsType) => {
  const primary = generatePrimaryColors(options?.color?.primary);
  const secondary = generateSecondaryColors(options?.color?.secondary);
  const wrong = generateWrongColors(options?.color?.wrong);
  const attention = generateAttentionColors(options?.color?.attention);
  const size = generateBaseSize(options?.size);

  function getContrastText(background: string) {
    const contrastRatio = new Color(background)
      .getContrastRatio(defaultTheme.color.white);

    return contrastRatio > contrastThreshold
      ? defaultTheme.color.white
      : defaultTheme.color.black;
  }

  const partialTheme = deepmerge(options, {
    color: {
      ...primary,
      ...secondary,
      ...wrong,
      ...attention,
      'primary-contrast': getContrastText(primary.primary),
      'secondary-contrast': getContrastText(secondary.secondary),
      'wrong-contrast': getContrastText(wrong.wrong),
      ...options?.color,
    } as Partial<Record<ColorType, string>>,
    size,
  });

  return deepmerge(defaultTheme, partialTheme);
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
