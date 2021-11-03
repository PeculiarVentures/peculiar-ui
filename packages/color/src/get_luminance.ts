import { hexToRgb } from './hex_to_rgb';

/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 */
export function getLuminance(color: string | [r: number, g: number, b: number]) {
  let rgb: number[] = typeof color === 'string' ? hexToRgb(color) : color;

  rgb = rgb.map((val) => {
    // eslint-disable-next-line no-param-reassign
    val /= 255; // normalized

    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });

  // Truncate at 3 digits
  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
