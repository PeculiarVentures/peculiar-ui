import {
  ThemeType,
  ColorType,
  ShadowType,
  TypographyType,
  TypographyPropertiesType,
} from './types';

const prefix = 'pv';
const palettePrefix = `${prefix}-color`;
const shadowPrefix = `${prefix}-shadow`;
const typographyPrefix = `${prefix}-text`;

export const createCSSVariablesFromTheme = (theme: ThemeType) => {
  const variables: Record<string, string> = {};

  /**
   * Palette
   */
  Object.keys(theme.palette)
    .forEach((paletteName: ColorType) => {
      variables[`--${palettePrefix}-${paletteName}`] = theme.palette[paletteName];
    });

  /**
   * Shadow
   */
  Object.keys(theme.shadows)
    .forEach((shadowName: ShadowType) => {
      variables[`--${shadowPrefix}-${shadowName}`] = theme.shadows[shadowName];
    });

  /**
   * Typography
   */
  Object.keys(theme.typography)
    .forEach((typographyName: TypographyType) => {
      Object.keys(theme.typography[typographyName])
        .forEach((propertyName: keyof TypographyPropertiesType) => {
          variables[`--${typographyPrefix}-${typographyName}-${propertyName}`] = theme.typography[typographyName][propertyName];
        });
    });

  return variables;
};
