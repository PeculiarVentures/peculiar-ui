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
  'danger-tint-5' |
  'danger-tint-4' |
  'danger-tint-3' |
  'danger-tint-2' |
  'danger-tint-1' |
  'danger' |
  'danger-shade-1' |
  'danger-shade-2' |
  'danger-shade-3' |
  'danger-shade-4' |
  'danger-shade-5' |
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

export type ThemeType = {
  palette: Record<ColorType, string>;
  shadows: Record<ShadowType, string>;
  typography: Record<TypographyType, TypographyPropertiesType>;
};
