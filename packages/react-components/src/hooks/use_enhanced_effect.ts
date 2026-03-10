import React from 'react';

export const IS_SERVER = typeof window === 'undefined';

export const useEnhancedEffect = IS_SERVER ? React.useEffect : React.useLayoutEffect;
