import { hexToRgb } from './hex_to_rgb';
import { rgbToHsb } from './rgb_to_hsb';
import { rgbToHex } from './rgb_to_hex';
import { hsbToRgb } from './hsb_to_rgb';
import { getContrastRatio } from './get_contrast_ratio';

type TPaletteTypes = (
  'tint5' |
  'tint4' |
  'tint3' |
  'tint2' |
  'tint1' |
  'base' |
  'shade1' |
  'shade2' |
  'shade3' |
  'shade4' |
  'shade5'
);

export class Color {
  private red: number;

  private green: number;

  private blue: number;

  private saturationMinMax = [10, 30];

  private brightnessMinMax = [15, 100];

  constructor(color: string | [r: number, g: number, b: number]) {
    const [r, g, b] = typeof color === 'string' ? hexToRgb(color) : color;

    this.red = r;
    this.green = g;
    this.blue = b;
  }

  toHex() {
    return rgbToHex(this.red, this.green, this.blue);
  }

  toHexString() {
    return `#${this.toHex()}`;
  }

  toRgb() {
    return [this.red, this.green, this.blue];
  }

  toRgbString() {
    return `rgb(${this.toRgb().join(', ')})`;
  }

  toHsb() {
    return rgbToHsb(this.red, this.green, this.blue);
  }

  palette(): Record<TPaletteTypes, Color> {
    const [h, s, b] = this.toHsb();
    const steps = 5;
    let saturationTintStep = (s - this.saturationMinMax[0]) / steps;
    let saturationShadeStep = (s - this.saturationMinMax[1]) / steps;
    let brightnessTintStep = (this.brightnessMinMax[1] - b) / steps;
    let brightnessShadeStep = (b - this.brightnessMinMax[0]) / steps;

    if (brightnessTintStep < 0) {
      brightnessTintStep = 0;
    }

    if (brightnessShadeStep < 0) {
      brightnessShadeStep = 0;
    }

    if (saturationTintStep < 0) {
      saturationTintStep = 0;
    }

    if (saturationShadeStep < 0) {
      saturationShadeStep = 0;
    }

    const tints: Color[] = [];
    const shades: Color[] = [];

    for (let i = 1; i <= steps; i += 1) {
      const tintRgb = hsbToRgb(
        h,
        Math.floor(s - saturationTintStep * i),
        Math.floor(b + brightnessTintStep * i),
      );
      const shadeRgb = hsbToRgb(
        h,
        Math.floor(s - saturationShadeStep * i),
        Math.floor(b - brightnessShadeStep * i),
      );

      tints.push(new Color(tintRgb));
      shades.push(new Color(shadeRgb));
    }

    return {
      tint5: tints[4],
      tint4: tints[3],
      tint3: tints[2],
      tint2: tints[1],
      tint1: tints[0],
      base: this,
      shade1: shades[0],
      shade2: shades[1],
      shade3: shades[2],
      shade4: shades[3],
      shade5: shades[4],
    };
  }

  getContrastRatio(color: string | [r: number, g: number, b: number]) {
    return getContrastRatio([this.red, this.green, this.blue], color);
  }
}
