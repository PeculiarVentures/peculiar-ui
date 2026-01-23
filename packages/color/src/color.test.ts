import { describe, it, expect } from 'vitest';
import { Color } from './color';

describe('Color', () => {
  const color = new Color('#5ebc54');

  it('converts a color to a hex color` ', () => {
    expect(color.toHex()).toEqual('5ebc54');
  });

  it('converts a color to a hex string color` ', () => {
    expect(color.toHexString()).toEqual('#5ebc54');
  });

  it('converts a color to a hsb color` ', () => {
    expect(color.toHsb()).toEqual([114, 55, 74]);
  });

  it('converts a color to a rgb color` ', () => {
    expect(color.toRgb()).toEqual([94, 188, 84]);
  });

  it('converts a color to a rgb string color` ', () => {
    expect(color.toRgbString()).toEqual('rgb(94, 188, 84)');
  });

  it('generate color palette and converts it to a hex string color` ', () => {
    const palette = color.palette();

    expect(Object.keys(palette).length).toEqual(11);

    expect(palette.base.toHexString()).toEqual('#5ebc54');
    expect(palette.shade1.toHexString()).toEqual('#569e4f');
    expect(palette.shade2.toHexString()).toEqual('#4b7f46');
    expect(palette.shade3.toHexString()).toEqual('#3e603a');
    expect(palette.shade4.toHexString()).toEqual('#2d422b');
    expect(palette.shade5.toHexString()).toEqual('#1b261a');
    expect(palette.tint1.toHexString()).toEqual('#76c96c');
    expect(palette.tint2.toHexString()).toEqual('#8ed686');
    expect(palette.tint3.toHexString()).toEqual('#a9e2a3');
    expect(palette.tint4.toHexString()).toEqual('#c6efc2');
    expect(palette.tint5.toHexString()).toEqual('#e8ffe5');
  });

  it('returns a ratio for base : black', () => {
    expect(color.getContrastRatio('#293033')).toEqual(5.641025641025641);
  });

  it('returns a ratio for base : white', () => {
    expect(color.getContrastRatio('#ffffff')).toEqual(2.3863636363636362);
  });
});
