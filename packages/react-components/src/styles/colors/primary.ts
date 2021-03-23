import { Color } from '@peculiar/color';

const palette = new Color('#5EBC54').palette();

export const primary = {
  'primary-tint-5': palette.tint5.toHexString(),
  'primary-tint-4': palette.tint4.toHexString(),
  'primary-tint-3': palette.tint3.toHexString(),
  'primary-tint-2': palette.tint2.toHexString(),
  'primary-tint-1': palette.tint1.toHexString(),
  primary: palette.base.toHexString(),
  'primary-shade-1': palette.shade1.toHexString(),
  'primary-shade-2': palette.shade2.toHexString(),
  'primary-shade-3': palette.shade3.toHexString(),
  'primary-shade-4': palette.shade4.toHexString(),
  'primary-shade-5': palette.shade5.toHexString(),
};
