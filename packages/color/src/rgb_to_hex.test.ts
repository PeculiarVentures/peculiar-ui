import { describe, it, expect } from 'vitest';
import { rgbToHex } from './rgb_to_hex';

describe('rgbToHex', () => {
  it('converts an rgb color to a hex color` ', () => {
    expect(rgbToHex(169, 79, 211)).toEqual('a94fd3');
  });
});
