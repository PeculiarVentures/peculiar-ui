import { useEnhancedEffect } from './use_enhanced_effect';

/**
 * React hook that runs a callback only once when the component mounts.
 * @param callback The callback function to run on mount.
 */
export function useMount(callback: () => void) {
  useEnhancedEffect(callback, []);
}
