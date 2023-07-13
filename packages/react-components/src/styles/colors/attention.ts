import { Color } from '@peculiar/color';

export const generateAttentionColors = (hex: string = '#F7A831') => {
  const palette = new Color(hex).palette();

  return {
    'attention-tint-5': palette.tint5.toHexString(),
    'attention-tint-4': palette.tint4.toHexString(),
    'attention-tint-3': palette.tint3.toHexString(),
    'attention-tint-2': palette.tint2.toHexString(),
    'attention-tint-1': palette.tint1.toHexString(),
    attention: palette.base.toHexString(),
    'attention-shade-1': palette.shade1.toHexString(),
    'attention-shade-2': palette.shade2.toHexString(),
    'attention-shade-3': palette.shade3.toHexString(),
    'attention-shade-4': palette.shade4.toHexString(),
    'attention-shade-5': palette.shade5.toHexString(),
  };
};

export const attention = generateAttentionColors();
