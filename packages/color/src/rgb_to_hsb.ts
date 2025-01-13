const RGB_MAX = 255;
const HUE_MAX = 360;
const SV_MAX = 100;

/**
 * RGB color to HSB color.
 * @example
 *  rgbToHsb(255, 255, 255) // =>
 */
export function rgbToHsb(r: number, g: number, b: number): [h: number, s: number, b: number] {
  // It converts [0,255] format, to [0,1]
  r = (r === RGB_MAX) ? 1 : ((r % RGB_MAX) / RGB_MAX);
  g = (g === RGB_MAX) ? 1 : ((g % RGB_MAX) / RGB_MAX);
  b = (b === RGB_MAX) ? 1 : ((b % RGB_MAX) / RGB_MAX);

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const v = max;
  const d = max - min;
  const s = max === 0 ? 0 : d / max;
  let h;

  if (max === min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);

        break;

      case g:
        h = (b - r) / d + 2;

        break;

      case b:
        h = (r - g) / d + 4;

        break;

      default:
        break;
    }

    h /= 6;
  }

  return [
    Math.round(h * HUE_MAX),
    Math.round(s * SV_MAX),
    Math.round(v * SV_MAX),
  ];
}
