import { Color } from '@peculiar/color';

export const generateSuccessColors = (hex: string = '#33CC99') => {
  const palette = new Color(hex).palette();

  return {
    'success-tint-5': palette.tint5.toHexString(),
    'success-tint-4': palette.tint4.toHexString(),
    'success-tint-3': palette.tint3.toHexString(),
    'success-tint-2': palette.tint2.toHexString(),
    'success-tint-1': palette.tint1.toHexString(),
    success: palette.base.toHexString(),
    'success-shade-1': palette.shade1.toHexString(),
    'success-shade-2': palette.shade2.toHexString(),
    'success-shade-3': palette.shade3.toHexString(),
    'success-shade-4': palette.shade4.toHexString(),
    'success-shade-5': palette.shade5.toHexString(),
  };
};

export const success = generateSuccessColors();
