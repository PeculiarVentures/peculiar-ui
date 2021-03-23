import { Color } from '@peculiar/color';

const palette = new Color('#5EBC54').palette();

export const primary = {
  'primary-tint-5': palette['tint-5'].toHexString(),
  'primary-tint-4': palette['tint-4'].toHexString(),
  'primary-tint-3': palette['tint-3'].toHexString(),
  'primary-tint-2': palette['tint-2'].toHexString(),
  'primary-tint-1': palette['tint-1'].toHexString(),
  primary: palette.base.toHexString(),
  'primary-shade-1': palette['shade-1'].toHexString(),
  'primary-shade-2': palette['shade-2'].toHexString(),
  'primary-shade-3': palette['shade-3'].toHexString(),
  'primary-shade-4': palette['shade-4'].toHexString(),
  'primary-shade-5': palette['shade-5'].toHexString(),
};