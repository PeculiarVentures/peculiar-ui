/**
 * HEX color to RGB color.
 * @example
 *  hexToRgb('#FFCCFF') // => [255,204,255]
 */
export function hexToRgb(hex: string): [r: number, g: number, b: number] {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

  const rgb = hex
    .replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b)
    .replace(/^#?/, '')
    .match(/.{2}/g)
    .map((value) => parseInt(value, 16));

  return [rgb[0], rgb[1], rgb[2]];
}
