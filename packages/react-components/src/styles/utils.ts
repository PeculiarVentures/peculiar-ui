import flat from 'flat';
import deepmerge from 'deepmerge';
import { defaultTheme } from './default_theme';
import type { ThemeOptionsType, ColorType } from './types';
import {
  generateWrongColors,
  generateSecondaryColors,
  generatePrimaryColors,
} from './colors';
import {
  generateBaseSize,
} from './sizes';
import { eventManager, Event } from './event_manager';

export const themeCSSVariablePrefix = 'pv';

export const createTheme = (options?: ThemeOptionsType) => {
  const primary = generatePrimaryColors(options?.color?.primary);
  const secondary = generateSecondaryColors(options?.color?.secondary);
  const wrong = generateWrongColors(options?.color?.wrong);
  const size = generateBaseSize(options?.size);

  const partialTheme = deepmerge(options, {
    color: {
      ...primary,
      ...secondary,
      ...wrong,
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

export const theme = {
  useTheme: (options: ThemeOptionsType) => {
    eventManager.emit(Event.Use, options);
  },
};
