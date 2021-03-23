import { Color } from '@peculiar/color';

const palette = new Color('#DE4641').palette();

export const danger = {
  'danger-tint-5': palette['tint-5'].toHexString(),
  'danger-tint-4': palette['tint-4'].toHexString(),
  'danger-tint-3': palette['tint-3'].toHexString(),
  'danger-tint-2': palette['tint-2'].toHexString(),
  'danger-tint-1': palette['tint-1'].toHexString(),
  danger: palette.base.toHexString(),
  'danger-shade-1': palette['shade-1'].toHexString(),
  'danger-shade-2': palette['shade-2'].toHexString(),
  'danger-shade-3': palette['shade-3'].toHexString(),
  'danger-shade-4': palette['shade-4'].toHexString(),
  'danger-shade-5': palette['shade-5'].toHexString(),
};
