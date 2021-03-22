import { hexToRgb } from './hex_to_rgb';
import { rgbToHsb } from './rgb_to_hsb';
import { rgbToHex } from './rgb_to_hex';
import { hsbToRgb } from './hsb_to_rgb';

const saturationMinMax = [10, 30];
const brightnessMinMax = [15, 100];

export class Color {
  private red: number;

  private green: number;

  private blue: number;

  public name: string;

  constructor(color: string | [r: number, g: number, b: number], name: string = 'base') {
    const [r, g, b] = typeof color === 'string' ? hexToRgb(color) : color;

    this.red = r;
    this.green = g;
    this.blue = b;
    this.name = name;
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

  toHsb() {
    return rgbToHsb(this.red, this.green, this.blue);
  }

  palette(steps = 5) {
    const [h, s, b] = this.toHsb();
    const result: Color[] = [this];
    let saturationTintStep = (s - saturationMinMax[0]) / steps;
    let saturationShadeStep = (s - saturationMinMax[1]) / steps;
    let brightnessTintStep = (brightnessMinMax[1] - b) / steps;
    let brightnessShadeStep = (b - brightnessMinMax[0]) / steps;

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

      result.unshift(new Color(tintRgb, `tint-${i}`));
      result.push(new Color(shadeRgb, `shade-${i}`));
    }

    return result;
  }
}
