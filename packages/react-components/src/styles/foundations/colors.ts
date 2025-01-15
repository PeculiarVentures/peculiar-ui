import { Color } from '@peculiar/color';

interface ColorPalletteSuffix {
  '-tint-5': string;
  '-tint-4': string;
  '-tint-3': string;
  '-tint-2': string;
  '-tint-1': string;
  '': string;
  '-shade-1': string;
  '-shade-2': string;
  '-shade-3': string;
  '-shade-4': string;
  '-shade-5': string;
};

type RemapColorPaletteKeys<Type, Name extends string> = {
  [K in keyof Type as `${Name}${string & K}`]: Type[K];
};

export const generateColorPalette = <Name extends string>(
  name: Name,
  hex: string,
): RemapColorPaletteKeys<ColorPalletteSuffix, Name> => {
  const palette = new Color(hex).palette();

  return {
    [`${name}-tint-5`]: palette.tint5.toHexString(),
    [`${name}-tint-4`]: palette.tint4.toHexString(),
    [`${name}-tint-3`]: palette.tint3.toHexString(),
    [`${name}-tint-2`]: palette.tint2.toHexString(),
    [`${name}-tint-1`]: palette.tint1.toHexString(),
    [name]: palette.base.toHexString(),
    [`${name}-shade-1`]: palette.shade1.toHexString(),
    [`${name}-shade-2`]: palette.shade2.toHexString(),
    [`${name}-shade-3`]: palette.shade3.toHexString(),
    [`${name}-shade-4`]: palette.shade4.toHexString(),
    [`${name}-shade-5`]: palette.shade5.toHexString(),
  } as any;
};

export const additional = {
  'extra-1': '#826FF6',
  'extra-2': '#DC6CDF',
};
export const additionalDark = {
  'extra-1': '#826FF6',
  'extra-2': '#EC9CEE',
};

export const grayscale = {
  'white': '#FFFFFF',
  'gray-1': '#FBFCFD',
  'gray-2': '#F4F7FC',
  'gray-3': '#EFF1F6',
  'gray-4': '#EAEDF2',
  'gray-5': '#E3E5E8',
  'gray-6': '#D8DBDE',
  'gray-7': '#CDD1D5',
  'gray-8': '#C4C8CC',
  'gray-9': '#8F999E',
  'gray-10': '#5C666A',
  'black': '#293033',
};
export const grayscaleDark = {
  'white': '#FAFAFA',
  'gray-1': '#2D3338',
  'gray-2': '#32383D',
  'gray-3': '#40474D',
  'gray-4': '#4F565C',
  'gray-5': '#5B6266',
  'gray-6': '#7E8388',
  'gray-7': '#A9ADAF',
  'gray-8': '#D4D6D7',
  'gray-9': '#E9EAEB',
  'gray-10': '#ECEDED',
  'black': '#23292B',
};

export const primary = generateColorPalette('primary', '#5EBC54');
export const primaryDark = generateColorPalette('primary', '#499940');

export const secondary = generateColorPalette('secondary', '#377FF4');
export const secondaryDark = generateColorPalette('secondary', '#67A0FF');

export const attention = generateColorPalette('attention', '#F7A831');
export const attentionDark = generateColorPalette('attention', '#FFC369');

export const success = generateColorPalette('success', '#33CC99');
export const successDark = generateColorPalette('success', '#61EDBE');

export const wrong = generateColorPalette('wrong', '#DE4641');
export const wrongDark = generateColorPalette('wrong', '#F55D58');
