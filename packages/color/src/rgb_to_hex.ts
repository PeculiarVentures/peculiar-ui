/**
 * RGB color to HEX color.
 * @example
 *  rgbToHex(255, 255, 255) // =>
 */
export function rgbToHex(r: number, g: number, b: number) {
  return [r, g, b]
    .map((value) => value.toString(16).padStart(2, '0')).join('');
}
