import { getLuminance } from './get_luminance';

describe('getLuminance', () => {
  it('returns a valid luminance for black', () => {
    expect(getLuminance('#000000')).toEqual(0);
    expect(getLuminance([0, 0, 0])).toEqual(0);
  });

  it('returns a valid luminance for white', () => {
    expect(getLuminance('#ffffff')).toEqual(1);
    expect(getLuminance([255, 255, 255])).toEqual(1);
  });
});
