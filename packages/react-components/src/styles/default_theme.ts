import { ThemeType } from './types';

export const defaultTheme: ThemeType = {
  palette: {
    /**
     * primary
     */
    'primary-tint-5': '#EFFFEC',
    'primary-tint-4': '#CCF2C7',
    'primary-tint-3': '#ADE5A5',
    'primary-tint-2': '#8FD787',
    'primary-tint-1': '#75CA6B',
    primary: '#5EBC54',
    'primary-shade-1': '#41A03D',
    'primary-shade-2': '#2B852B',
    'primary-shade-3': '#176B1C',
    'primary-shade-4': '#094F0F',
    'primary-shade-5': '#003506',
    /**
     * secondary
     */
    'secondary-tint-5': '#EBF0FF',
    'secondary-tint-4': '#C5D8FC',
    'secondary-tint-3': '#A2C0FA',
    'secondary-tint-2': '#7CAAF8',
    'secondary-tint-1': '#5993F6',
    secondary: '#377FF4',
    'secondary-shade-1': '#265CCD',
    'secondary-shade-2': '#173EA7',
    'secondary-shade-3': '#0C247F',
    'secondary-shade-4': '#051159',
    'secondary-shade-5': '#010632',
    /**
     * danger
     */
    'danger-tint-5': '#FFEBEB',
    'danger-tint-4': '#F8C5C5',
    'danger-tint-3': '#F2A3A2',
    'danger-tint-2': '#EB827F',
    'danger-tint-1': '#E56360',
    danger: '#DE4641',
    'danger-shade-1': '#BC332C',
    'danger-shade-2': '#9B251C',
    'danger-shade-3': '#77180F',
    'danger-shade-4': '#550E06',
    'danger-shade-5': '#340700',
    /**
     * additional
     */
    success: '#33CC99',
    attention: '#F7A831',
    'extra-1': '#826FF6',
    'extra-2': '#DC6CDF',
    /**
     * grayscale
     */
    black: '#293033',
    'gray-10': '#5C666A',
    'gray-9': '#8F999E',
    'gray-8': '#C4C8CC',
    'gray-7': '#CDD1D5',
    'gray-6': '#D8DBDE',
    'gray-5': '#E3E5E8',
    'gray-4': '#EAEDF2',
    'gray-3': '#EFF1F6',
    'gray-2': '#F4F7FC',
    'gray-1': '#FBFCFD',
    white: '#FFFFFF',
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
