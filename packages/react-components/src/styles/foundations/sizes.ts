export const generateSize = (grid = 5) => ({
  'base-half': `${grid / 2}px`,
  'base': `${grid}px`,
  'base-2': `${grid * 2}px`,
  'base-3': `${grid * 3}px`,
  'base-4': `${grid * 4}px`,
  'base-5': `${grid * 5}px`,
  'base-6': `${grid * 6}px`,
  'base-7': `${grid * 7}px`,
  'base-8': `${grid * 8}px`,
  'base-9': `${grid * 9}px`,
  'base-10': `${grid * 10}px`,
  'base-11': `${grid * 11}px`,
  'base-12': `${grid * 12}px`,
  'base-14': `${grid * 14}px`,
  'base-16': `${grid * 16}px`,
});

export const size = generateSize();
