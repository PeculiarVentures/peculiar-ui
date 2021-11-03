import { getLuminance } from './get_luminance';

/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 */
export function getContrastRatio(
  foreground: string | [r: number, g: number, b: number],
  background: string | [r: number, g: number, b: number],
) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);

  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
