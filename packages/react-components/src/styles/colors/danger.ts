import { Color } from '@peculiar/color';

const palette = new Color('#DE4641').palette();

export const danger = {
  'danger-tint-5': palette.tint5.toHexString(),
  'danger-tint-4': palette.tint4.toHexString(),
  'danger-tint-3': palette.tint3.toHexString(),
  'danger-tint-2': palette.tint2.toHexString(),
  'danger-tint-1': palette.tint1.toHexString(),
  danger: palette.base.toHexString(),
  'danger-shade-1': palette.shade1.toHexString(),
  'danger-shade-2': palette.shade2.toHexString(),
  'danger-shade-3': palette.shade3.toHexString(),
  'danger-shade-4': palette.shade4.toHexString(),
  'danger-shade-5': palette.shade5.toHexString(),
};
