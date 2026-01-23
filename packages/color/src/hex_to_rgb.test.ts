import { describe, it, expect } from 'vitest';
import { hexToRgb } from './hex_to_rgb';

describe('hexToRgb', () => {
  it('converts a long hex color to a rgb color` ', () => {
    expect(hexToRgb('#a94fd3')).toEqual([169, 79, 211]);
  });

  it('converts a short hex color to a rgb color` ', () => {
    expect(hexToRgb('#fcf')).toEqual([255, 204, 255]);
  });
});
