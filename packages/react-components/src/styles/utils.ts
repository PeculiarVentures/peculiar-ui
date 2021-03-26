import {
  ThemeType,
  ColorType,
  ShadowType,
  TypographyType,
  TypographyPropertiesType,
} from './types';
import { injectGlobal } from './css';
import {
  generateDangerColors,
  generateSecondaryColors,
  generatePrimaryColors,
} from './colors';

const prefix = 'pv';
const palettePrefix = `${prefix}-color`;
const shadowPrefix = `${prefix}-shadow`;
const typographyPrefix = `${prefix}-text`;

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
  danger?: string;
};

export const setThemeFromBaseColors = (colors: BaseColorsType) => {
  injectGlobal({
    html: createCSSVariablesFromTheme({
      palette: {
        ...(colors.primary && generatePrimaryColors(colors.primary)),
        ...(colors.secondary && generateSecondaryColors(colors.secondary)),
        ...(colors.danger && generateDangerColors(colors.danger)),
      },
    } as any),
  });
};
