import { rgbToHsb } from './rgb_to_hsb';

describe('rgbToHsb', () => {
  it('converts a rgb color to a hsb color` ', () => {
    expect(rgbToHsb(117, 58, 145)).toEqual([281, 60, 57]);
  });
});
