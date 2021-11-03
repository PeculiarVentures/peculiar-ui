import { hsbToRgb } from './hsb_to_rgb';

describe('hsbToRgb', () => {
  it('converts a hsb color to a rgb color` ', () => {
    expect(hsbToRgb(281, 60, 57)).toEqual([117, 58, 145]);
  });
});
