import { hexToRgb } from './hex_to_rgb';

describe('hexToRgb', () => {
  it('converts a long hex color to a rgb color` ', () => {
    expect(hexToRgb('#a94fd3')).toEqual([169, 79, 211]);
  });
});
