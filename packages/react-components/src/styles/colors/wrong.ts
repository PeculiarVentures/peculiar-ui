import { Color } from '@peculiar/color';

export const generateWrongColors = (hex: string = '#DE4641') => {
  const palette = new Color(hex).palette();

  return {
    'wrong-tint-5': palette.tint5.toHexString(),
    'wrong-tint-4': palette.tint4.toHexString(),
    'wrong-tint-3': palette.tint3.toHexString(),
    'wrong-tint-2': palette.tint2.toHexString(),
    'wrong-tint-1': palette.tint1.toHexString(),
    wrong: palette.base.toHexString(),
    'wrong-shade-1': palette.shade1.toHexString(),
    'wrong-shade-2': palette.shade2.toHexString(),
    'wrong-shade-3': palette.shade3.toHexString(),
    'wrong-shade-4': palette.shade4.toHexString(),
    'wrong-shade-5': palette.shade5.toHexString(),
  };
};

export const wrong = generateWrongColors();
