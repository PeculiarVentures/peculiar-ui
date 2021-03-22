/**
 * HEX color to RGB color.
 * @example
 *  hexToRgb('#fff') // =>
 */
export function hexToRgb(hex: string): [r: number, g: number, b: number] {
  const rgb = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`)
    .substring(1)
    .match(/.{2}/g)
    .map((value) => parseInt(value, 16));

  return [rgb[0], rgb[1], rgb[2]];
}
