import { ThemeType } from './types';
import {
  grayscale,
  primary,
  secondary,
  wrong,
  additional,
} from './colors';

export const defaultTheme: ThemeType = {
  palette: {
    /**
     * primary
     */
    ...primary,
    /**
     * secondary
     */
    ...secondary,
    /**
     * wrong
     */
    ...wrong,
    /**
     * additional
     */
    ...additional,
    /**
     * grayscale
     */
    ...grayscale,
  },
  shadows: {
    'light-low':
      '0px 1px 3px rgba(85, 94, 98, 0.12), 0px 3px 3px rgba(85, 94, 98, 0.08), 0px 1px 7px rgba(85, 94, 98, 0.06)',
    'light-medium':
      '0px 1px 4px rgba(85, 94, 98, 0.18), 0px 3px 5px rgba(85, 94, 98, 0.14), 0px 1px 10px rgba(85, 94, 98, 0.12)',
    'light-hight':
      '0px 1px 8px -2px rgba(85, 94, 98, 0.2), 0px 5px 10px 0.2px rgba(85, 94, 98, 0.25), 0px 15px 20px 0.2px rgba(85, 94, 98, 0.21)',
    'dark-medium':
      '0px 1px 4px rgba(41, 48, 51, 0.18), 0px 3px 5px rgba(41, 48, 51, 0.16), 0px 1px 10px rgba(41, 48, 51, 0.14)',
    'dark-hight':
      '0px 1px 8px -2px rgba(85, 94, 98, 0.2), 0px 5px 10px 0.2px rgba(85, 94, 98, 0.3), 0px 15px 20px 0.2px rgba(85, 94, 98, 0.25)',
  },
  typography: {
    /**
     * h1
     */
    h1: {
      weight: '800',
      size: '30px',
      height: '40px',
      spacing: '0.1px',
    },
    /**
     * h2
     */
    h2: {
      weight: '800',
      size: '24px',
      height: '35px',
      spacing: '0.1px',
    },
    /**
     * h3
     */
    h3: {
      weight: '700',
      size: '20px',
      height: '30px',
      spacing: '0.2px',
    },
    /**
     * h4
     */
    h4: {
      weight: '700',
      size: '18px',
      height: '28px',
      spacing: '0.2px',
    },
    /**
     * h5
     */
    h5: {
      weight: '700',
      size: '16px',
      height: '25px',
      spacing: '0.15px',
    },
    /**
     * subtitle1
     */
    s1: {
      weight: '600',
      size: '15px',
      height: '25px',
      spacing: '0.25px',
    },
    /**
     * subtitle2
     */
    s2: {
      weight: '600',
      size: '14px',
      height: '22px',
      spacing: '0.25px',
    },
    /**
     * body1
     */
    b1: {
      weight: '400',
      size: '15px',
      height: '25px',
      spacing: '0.4px',
    },
    /**
     * body2
     */
    b2: {
      weight: '400',
      size: '14px',
      height: '22px',
      spacing: '0.4px',
    },
    /**
     * body3
     */
    b3: {
      weight: '400',
      size: '13px',
      height: '20px',
      spacing: '0.55px',
    },
    /**
     * button1
     */
    btn1: {
      weight: '700',
      size: '14px',
      height: '20px',
      spacing: '0.5px',
    },
    /**
     * button2
     */
    btn2: {
      weight: '700',
      size: '13px',
      height: '17px',
      spacing: '0.5px',
    },
    /**
     * caption1
     */
    c1: {
      weight: '400',
      size: '12px',
      height: '17px',
      spacing: '0.45px',
    },
    /**
     * caption2
     */
    c2: {
      weight: '400',
      size: '11px',
      height: '15px',
      spacing: '0.5px',
    },
  },
};
