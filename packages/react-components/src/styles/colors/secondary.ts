import { Color } from '@peculiar/color';

export const generateSecondaryColors = (hex: string = '#377FF4') => {
  const palette = new Color(hex).palette();

  return {
    'secondary-tint-5': palette.tint5.toHexString(),
    'secondary-tint-4': palette.tint4.toHexString(),
    'secondary-tint-3': palette.tint3.toHexString(),
    'secondary-tint-2': palette.tint2.toHexString(),
    'secondary-tint-1': palette.tint1.toHexString(),
    secondary: palette.base.toHexString(),
    'secondary-shade-1': palette.shade1.toHexString(),
    'secondary-shade-2': palette.shade2.toHexString(),
    'secondary-shade-3': palette.shade3.toHexString(),
    'secondary-shade-4': palette.shade4.toHexString(),
    'secondary-shade-5': palette.shade5.toHexString(),
  };
};

export const secondary = generateSecondaryColors();
