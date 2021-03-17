import * as React from 'react';
import { injectGlobal } from '../css';

injectGlobal({
  html: {
    '--pv-color-primary-tint-5': '#EFFFEC',
    '--pv-color-primary-tint-4': '#CCF2C7',
    '--pv-color-primary-tint-3': '#ADE5A5',
    '--pv-color-primary-tint-2': '#8FD787',
    '--pv-color-primary-tint-1': '#75CA6B',
    '--pv-color-primary': '#5EBC54',
    '--pv-color-primary-shade-1': '#41A03D',
    '--pv-color-primary-shade-2': '#2B852B',
    '--pv-color-primary-shade-3': '#176B1C',
    '--pv-color-primary-shade-4': '#094F0F',
    '--pv-color-primary-shade-5': '#003506',
    '--pv-color-secondary-tint-5': '#EBF0FF',
    '--pv-color-secondary-tint-4': '#C5D8FC',
    '--pv-color-secondary-tint-3': '#A2C0FA',
    '--pv-color-secondary-tint-2': '#7CAAF8',
    '--pv-color-secondary-tint-1': '#5993F6',
    '--pv-color-secondary': '#377FF4',
    '--pv-color-secondary-shade-1': '#265CCD',
    '--pv-color-secondary-shade-2': '#173EA7',
    '--pv-color-secondary-shade-3': '#0C247F',
    '--pv-color-secondary-shade-4': '#051159',
    '--pv-color-secondary-shade-5': '#010632',
    '--pv-color-danger-tint-5': '#FFEBEB',
    '--pv-color-danger-tint-4': '#F8C5C5',
    '--pv-color-danger-tint-3': '#F2A3A2',
    '--pv-color-danger-tint-2': '#EB827F',
    '--pv-color-danger-tint-1': '#E56360',
    '--pv-color-danger': '#DE4641',
    '--pv-color-danger-shade-1': '#BC332C',
    '--pv-color-danger-shade-2': '#9B251C',
    '--pv-color-danger-shade-3': '#77180F',
    '--pv-color-danger-shade-4': '#550E06',
    '--pv-color-danger-shade-5': '#340700',
    '--pv-color-success': '#33CC99',
    '--pv-color-attention': '#F7A831',
    '--pv-color-extra-1': '#826FF6',
    '--pv-color-extra-2': '#DC6CDF',
    '--pv-color-black': '#293033',
    '--pv-color-gray-10': '#5C666A',
    '--pv-color-gray-9': '#8F999E',
    '--pv-color-gray-8': '#C4C8CC',
    '--pv-color-gray-7': '#CDD1D5',
    '--pv-color-gray-6': '#D8DBDE',
    '--pv-color-gray-5': '#E3E5E8',
    '--pv-color-gray-4': '#EAEDF2',
    '--pv-color-gray-3': '#EFF1F6',
    '--pv-color-gray-2': '#F4F7FC',
    '--pv-color-gray-1': '#FBFCFD',
    '--pv-color-white': '#FFFFFF',
    '--pv-shadow-light-low':
      '0px 1px 3px rgba(85, 94, 98, 0.12), 0px 3px 3px rgba(85, 94, 98, 0.08), 0px 1px 7px rgba(85, 94, 98, 0.06)',
    '--pv-shadow-light-medium':
      '0px 1px 4px rgba(85, 94, 98, 0.18), 0px 3px 5px rgba(85, 94, 98, 0.14), 0px 1px 10px rgba(85, 94, 98, 0.12)',
    '--pv-shadow-light-hight':
      '0px 1px 8px -2px rgba(85, 94, 98, 0.2), 0px 5px 10px 0.2px rgba(85, 94, 98, 0.25), 0px 15px 20px 0.2px rgba(85, 94, 98, 0.21)',
    '--pv-shadow-dark-medium':
      '0px 1px 4px rgba(41, 48, 51, 0.18), 0px 3px 5px rgba(41, 48, 51, 0.16), 0px 1px 10px rgba(41, 48, 51, 0.14)',
    '--pv-shadow-dark-hight':
      '0px 1px 8px -2px rgba(85, 94, 98, 0.2), 0px 5px 10px 0.2px rgba(85, 94, 98, 0.3), 0px 15px 20px 0.2px rgba(85, 94, 98, 0.25)',
    '--pv-text-h1-weight': '800',
    '--pv-text-h1-size': '30px',
    '--pv-text-h1-height': '40px',
    '--pv-text-h1-spacing': '0.1px',
    '--pv-text-h2-weight': '800',
    '--pv-text-h2-size': '24px',
    '--pv-text-h2-height': '35px',
    '--pv-text-h2-spacing': '0.1px',
    '--pv-text-h3-weight': '700',
    '--pv-text-h3-size': '20px',
    '--pv-text-h3-height': '30px',
    '--pv-text-h3-spacing': '0.2px',
    '--pv-text-h4-weight': '700',
    '--pv-text-h4-size': '18px',
    '--pv-text-h4-height': '28px',
    '--pv-text-h4-spacing': '0.2px',
    '--pv-text-h5-weight': '700',
    '--pv-text-h5-size': '16px',
    '--pv-text-h5-height': '25px',
    '--pv-text-h5-spacing': '0.15px',
    '--pv-text-s1-weight': '600',
    '--pv-text-s1-size': '15px',
    '--pv-text-s1-height': '25px',
    '--pv-text-s1-spacing': '0.25px',
    '--pv-text-s2-weight': '600',
    '--pv-text-s2-size': '14px',
    '--pv-text-s2-height': '22px',
    '--pv-text-s2-spacing': '0.25px',
    '--pv-text-b1-weight': '400',
    '--pv-text-b1-size': '15px',
    '--pv-text-b1-height': '25px',
    '--pv-text-b1-spacing': '0.4px',
    '--pv-text-b2-weight': '400',
    '--pv-text-b2-size': '14px',
    '--pv-text-b2-height': '22px',
    '--pv-text-b2-spacing': '0.4px',
    '--pv-text-b3-weight': '400',
    '--pv-text-b3-size': '13px',
    '--pv-text-b3-height': '20px',
    '--pv-text-b3-spacing': '0.55px',
    '--pv-text-btn1-weight': '700',
    '--pv-text-btn1-size': '14px',
    '--pv-text-btn1-height': '20px',
    '--pv-text-btn1-spacing': '0.5px',
    '--pv-text-btn2-weight': '700',
    '--pv-text-btn2-size': '13px',
    '--pv-text-btn2-height': '17px',
    '--pv-text-btn2-spacing': '0.5px',
    '--pv-text-c1-weight': '400',
    '--pv-text-c1-size': '12px',
    '--pv-text-c1-height': '17px',
    '--pv-text-c1-spacing': '0.45px',
    '--pv-text-c2-weight': '400',
    '--pv-text-c2-size': '11px',
    '--pv-text-c2-height': '15px',
    '--pv-text-c2-spacing': '0.5px',
  },
});

type ThemeProviderProps = {
  children: React.ReactElement;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children } = props;

  return children;
};

ThemeProvider.displayName = 'ThemeProvider';