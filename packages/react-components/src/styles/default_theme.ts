import { IThemeType } from './types';
import {
  size,
  text,
  shadow,
  colors,
} from './foundations';

export const defaultThemeLight: IThemeType = {
  color: {
    /**
     * primary
     */
    ...colors.primary,
    'primary-contrast': colors.grayscale.white,
    /**
     * secondary
     */
    ...colors.secondary,
    'secondary-contrast': colors.grayscale.white,
    /**
     * wrong
     */
    ...colors.wrong,
    'wrong-contrast': colors.grayscale.white,
    /**
     * attention
     */
    ...colors.attention,
    /**
     * success
     */
    ...colors.success,
    /**
     * grayscale
     */
    ...colors.grayscale,
    /**
     * additional
     */
    ...colors.additional,
  },
  shadow: shadow.light,
  text,
  size,
};

export const defaultThemeDark: IThemeType = {
  color: {
    /**
     * primary
     */
    ...colors.primaryDark,
    'primary-contrast': colors.grayscaleDark.white,
    /**
     * secondary
     */
    ...colors.secondaryDark,
    'secondary-contrast': colors.grayscaleDark.white,
    /**
     * wrong
     */
    ...colors.wrongDark,
    'wrong-contrast': colors.grayscaleDark.white,
    /**
     * attention
     */
    ...colors.attentionDark,
    /**
     * success
     */
    ...colors.successDark,
    /**
     * grayscale
     */
    ...colors.grayscaleDark,
    /**
     * additional
     */
    ...colors.additionalDark,
  },
  shadow: shadow.dark,
  text,
  size,
};
