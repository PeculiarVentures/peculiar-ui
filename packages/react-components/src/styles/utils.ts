import {
  ThemeType,
  ColorType,
  ShadowType,
  TypographyType,
  TypographyPropertiesType,
  SizeType,
} from './types';
import { injectGlobal } from './css';
import {
  generateWrongColors,
  generateSecondaryColors,
  generatePrimaryColors,
} from './colors';
import {
  generateBaseSize,
} from './sizes';

const prefix = 'pv';
const palettePrefix = `${prefix}-color`;
const shadowPrefix = `${prefix}-shadow`;
const typographyPrefix = `${prefix}-text`;
const sizePrefix = `${prefix}-size`;

export const createCSSVariablesFromTheme = (theme: ThemeType) => {
  const variables: Record<string, string> = {};

  /**
   * Palette
   */
  if (theme.palette) {
    Object.keys(theme.palette)
      .forEach((paletteName: ColorType) => {
        variables[`--${palettePrefix}-${paletteName}`] = theme.palette[paletteName];
      });
  }

  /**
   * Shadow
   */
  if (theme.shadows) {
    Object.keys(theme.shadows)
      .forEach((shadowName: ShadowType) => {
        variables[`--${shadowPrefix}-${shadowName}`] = theme.shadows[shadowName];
      });
  }

  /**
   * Typography
   */
  if (theme.typography) {
    Object.keys(theme.typography)
      .forEach((typographyName: TypographyType) => {
        Object.keys(theme.typography[typographyName])
          .forEach((propertyName: keyof TypographyPropertiesType) => {
            variables[`--${typographyPrefix}-${typographyName}-${propertyName}`] = theme.typography[typographyName][propertyName];
          });
      });
  }

  /**
   * Size
   */
  if (theme.size) {
    Object.keys(theme.size)
      .forEach((sizeName: SizeType) => {
        variables[`--${sizePrefix}-${sizeName}`] = theme.size[sizeName];
      });
  }

  return variables;
};

export const setTheme = (theme: ThemeType) => {
  injectGlobal({
    html: createCSSVariablesFromTheme(theme),
  });
};

type BaseColorsType = {
  primary?: string;
  secondary?: string;
  wrong?: string;
};

type BaseOptionsType = {
  colors?: BaseColorsType;
  size?: number;
};

export const setThemeFromBaseOptions = (options: BaseOptionsType) => {
  injectGlobal({
    html: createCSSVariablesFromTheme({
      palette: options.colors && {
        ...(options.colors.primary && generatePrimaryColors(options.colors.primary)),
        ...(options.colors.secondary && generateSecondaryColors(options.colors.secondary)),
        ...(options.colors.wrong && generateWrongColors(options.colors.wrong)),
      },
      size: options.size && generateBaseSize(options.size),
    } as any),
  });
};
