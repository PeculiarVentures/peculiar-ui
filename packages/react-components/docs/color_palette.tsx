import React from 'react';
import { Color } from '@peculiar/color';
import { Typography } from '../src/Typography';
import {
  themeCSSVariablePrefix,
  contrastThreshold,
} from '../src/styles/utils';
import {
  generatePrimaryColors,
  generateSecondaryColors,
  generateWrongColors,
  generateAttentionColors,
  grayscale,
  additional,
} from '../src/styles/colors';

type PaletteItemProps = {
  color: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
};

const PaletteItem: React.FC<PaletteItemProps> = (props) => {
  const {
    color,
    name,
    onChange,
  } = props;

  const textContrastRatio = new Color(color).getContrastRatio(grayscale.white);

  return (
    <div
      style={{
        width: '100%',
        background: color,
        padding: 10,
        display: 'flex',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
      }}
    >
      <Typography
        variant="c2"
        color={textContrastRatio > contrastThreshold ? 'white' : 'black'}
      >
        {name}
      </Typography>
      <div
        style={{
          display: 'flex',
        }}
      >
        {onChange && (
          <input
            type="color"
            defaultValue={color}
            onChange={onChange}
            style={{
              marginRight: 10,
            }}
          />
        )}
        <Typography
          variant="c2"
          color={textContrastRatio > contrastThreshold ? 'white' : 'black'}
        >
          {color}
        </Typography>
      </div>
    </div>
  );
};

/**
 * Palette primary section.
 */
export const ColorPalettePrimary: React.FC = () => {
  const [color, setColor] = React.useState<string>();

  const palette = generatePrimaryColors(color);
  const paletteKeys = Object.keys(palette) as Array<keyof typeof palette>;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <>
      {paletteKeys.map((keyName) => (
        <PaletteItem
          key={keyName}
          color={palette[keyName]}
          name={`--${themeCSSVariablePrefix}-${keyName}`}
          onChange={keyName === 'primary' ? handleChange : undefined}
        />
      ))}
    </>
  );
};

/**
 * Palette secondary section.
 */
export const ColorPaletteSecondary: React.FC = () => {
  const [color, setColor] = React.useState<string>();

  const palette = generateSecondaryColors(color);
  const paletteKeys = Object.keys(palette) as Array<keyof typeof palette>;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <>
      {paletteKeys.map((keyName) => (
        <PaletteItem
          key={keyName}
          color={palette[keyName]}
          name={`--${themeCSSVariablePrefix}-${keyName}`}
          onChange={keyName === 'secondary' ? handleChange : undefined}
        />
      ))}
    </>
  );
};

/**
 * Palette wrong section.
 */
export const ColorPaletteWrong: React.FC = () => {
  const [color, setColor] = React.useState<string>();

  const palette = generateWrongColors(color);
  const paletteKeys = Object.keys(palette) as Array<keyof typeof palette>;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <>
      {paletteKeys.map((keyName) => (
        <PaletteItem
          key={keyName}
          color={palette[keyName]}
          name={`--${themeCSSVariablePrefix}-${keyName}`}
          onChange={keyName === 'wrong' ? handleChange : undefined}
        />
      ))}
    </>
  );
};

/**
 * Palette attention section.
 */
export const ColorPaletteAttention: React.FC = () => {
  const [color, setColor] = React.useState<string>();

  const palette = generateAttentionColors(color);
  const paletteKeys = Object.keys(palette) as Array<keyof typeof palette>;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <>
      {paletteKeys.map((keyName) => (
        <PaletteItem
          key={keyName}
          color={palette[keyName]}
          name={`--${themeCSSVariablePrefix}-${keyName}`}
          onChange={keyName === 'attention' ? handleChange : undefined}
        />
      ))}
    </>
  );
};

/**
 * Palette grayscale section.
 */
export const ColorPaletteGrayscale: React.FC = () => {
  const palette = grayscale;
  const paletteKeys = Object.keys(palette) as Array<keyof typeof palette>;

  return (
    <>
      {paletteKeys.map((keyName) => (
        <PaletteItem
          key={keyName}
          color={palette[keyName]}
          name={`--${themeCSSVariablePrefix}-${keyName}`}
        />
      ))}
    </>
  );
};

/**
 * Palette additional section.
 */
export const ColorPaletteAdditional: React.FC = () => {
  const palette = additional;
  const paletteKeys = Object.keys(palette) as Array<keyof typeof palette>;

  return (
    <>
      {paletteKeys.map((keyName) => (
        <PaletteItem
          key={keyName}
          color={palette[keyName]}
          name={`--${themeCSSVariablePrefix}-${keyName}`}
        />
      ))}
    </>
  );
};
