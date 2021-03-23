import { Color } from '@peculiar/color';

const palette = new Color('#377FF4').palette();

export const secondary = {
  'secondary-tint-5': palette['tint-5'].toHexString(),
  'secondary-tint-4': palette['tint-4'].toHexString(),
  'secondary-tint-3': palette['tint-3'].toHexString(),
  'secondary-tint-2': palette['tint-2'].toHexString(),
  'secondary-tint-1': palette['tint-1'].toHexString(),
  secondary: palette.base.toHexString(),
  'secondary-shade-1': palette['shade-1'].toHexString(),
  'secondary-shade-2': palette['shade-2'].toHexString(),
  'secondary-shade-3': palette['shade-3'].toHexString(),
  'secondary-shade-4': palette['shade-4'].toHexString(),
  'secondary-shade-5': palette['shade-5'].toHexString(),
};
