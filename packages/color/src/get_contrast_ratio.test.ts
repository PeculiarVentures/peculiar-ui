import { getContrastRatio } from './get_contrast_ratio';

describe('getContrastRatio', () => {
  it('returns a ratio for black : white', () => {
    expect(getContrastRatio('#000000', '#FFFFFF')).toEqual(21);
  });

  it('returns a ratio for black : black', () => {
    expect(getContrastRatio('#000000', '#000000')).toEqual(1);
  });

  it('returns a ratio for white : white', () => {
    expect(getContrastRatio('#FFFFFF', '#FFFFFF')).toEqual(1);
  });

  it('returns a ratio for dark-grey : light-grey', () => {
    expect(getContrastRatio('#707070', '#E5E5E5')).toEqual(3.9339622641509435);
  });

  it('returns a ratio for black : light-grey', () => {
    expect(getContrastRatio('#000000', '#888888')).toEqual(5.919999999999999);
  });
});
