export type ColorType = (
  'primary-tint-5' |
  'primary-tint-4' |
  'primary-tint-3' |
  'primary-tint-2' |
  'primary-tint-1' |
  'primary' |
  'primary-shade-1' |
  'primary-shade-2' |
  'primary-shade-3' |
  'primary-shade-4' |
  'primary-shade-5' |
  'secondary-tint-5' |
  'secondary-tint-4' |
  'secondary-tint-3' |
  'secondary-tint-2' |
  'secondary-tint-1' |
  'secondary' |
  'secondary-shade-1' |
  'secondary-shade-2' |
  'secondary-shade-3' |
  'secondary-shade-4' |
  'secondary-shade-5' |
  'wrong-tint-5' |
  'wrong-tint-4' |
  'wrong-tint-3' |
  'wrong-tint-2' |
  'wrong-tint-1' |
  'wrong' |
  'wrong-shade-1' |
  'wrong-shade-2' |
  'wrong-shade-3' |
  'wrong-shade-4' |
  'wrong-shade-5' |
  'success' |
  'attention' |
  'extra-1' |
  'extra-2' |
  'black' |
  'gray-10' |
  'gray-9' |
  'gray-8' |
  'gray-7' |
  'gray-6' |
  'gray-5' |
  'gray-4' |
  'gray-3' |
  'gray-2' |
  'gray-1' |
  'white'
);

export type ShadowType = (
  'light-low' |
  'light-medium' |
  'light-hight' |
  'dark-medium' |
  'dark-hight'
);

export type TypographyPropertiesType = {
  weight: string;
  size: string;
  height: string;
  spacing: string;
};

export type TypographyType = (
  'h1' |
  'h2' |
  'h3' |
  'h4' |
  'h5' |
  's1' |
  's2' |
  'b1' |
  'b2' |
  'b3' |
  'btn1' |
  'btn2' |
  'c1' |
  'c2'
);

export type SizeType = (
  'base-half' |
  'base' |
  'base-2' |
  'base-3' |
  'base-4' |
  'base-5' |
  'base-6' |
  'base-7' |
  'base-8' |
  'base-9' |
  'base-10' |
  'base-11' |
  'base-12' |
  'base-14' |
  'base-16'
);

export type ThemeType = {
  palette: Record<ColorType, string>;
  shadows: Record<ShadowType, string>;
  typography: Record<TypographyType, TypographyPropertiesType>;
  size: Record<SizeType, string>;
};
