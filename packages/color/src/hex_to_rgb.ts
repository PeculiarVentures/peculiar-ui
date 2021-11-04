/**
 * HEX color to RGB color.
 * @example
 *  hexToRgb('#FFCCFF') // => [255,204,255]
 *  or
 *  hexToRgb('#FCF') // => [255,204,255]
 */
export function hexToRgb(hex: string): [r: number, g: number, b: number] {
  const clearHex = hex.replace(/^#?/, '');
  const isShortHex = clearHex.length === 3;

  const [r, g, b] = isShortHex
    ? clearHex.match(/.{1}/g).map((value) => parseInt(value + value, 16))
    : clearHex.match(/.{2}/g).map((value) => parseInt(value, 16));

  return [r, g, b];
}
