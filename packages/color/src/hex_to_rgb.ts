/**
 * HEX color to RGB color.
 * @example
 *  hexToRgb('#FFFFFF') // =>
 */
export function hexToRgb(hex: string): [r: number, g: number, b: number] {
  const rgb = hex
    .replace(/^#?/, '')
    .match(/.{2}/g)
    .map((value) => parseInt(value, 16));

  return [rgb[0], rgb[1], rgb[2]];
}
