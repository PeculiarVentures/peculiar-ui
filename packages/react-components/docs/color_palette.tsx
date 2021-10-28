import React from 'react';
import { Typography } from '../src/Typography';
import { palettePrefix } from '../src/styles/utils';
import {
  generatePrimaryColors,
  generateSecondaryColors,
  generateWrongColors,
  additional,
  grayscale,
} from '../src/styles/colors';

type PaletteItemProps = {
  color: string;
  name: string;
  light?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
};

const PaletteItem: React.FC<PaletteItemProps> = (props) => {
  const {
    color,
    name,
    light,
    onChange,
  } = props;

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
        color={light ? 'white' : 'black'}
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
          color={light ? 'white' : 'black'}
        >
          {color}
        </Typography>
      </div>
    </div>
  );
};

PaletteItem.defaultProps = {
  light: false,
};

/**
 * Palette primary section.
 */
export const ColorPalettePrimary: React.FC = () => {
  const [color, setColor] = React.useState<string>();
  const palette = generatePrimaryColors(color);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <>
      {Object.keys(palette).map((keyName) => (
        <PaletteItem
          key={keyName}
          color={palette[keyName]}
          light={keyName.includes('shade') || !keyName.includes('-')}
          name={`--${palettePrefix}-${keyName}`}
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <>
      {Object.keys(palette).map((keyName) => (
        <PaletteItem
          key={keyName}
          color={palette[keyName]}
          light={keyName.includes('shade') || !keyName.includes('-')}
          name={`--${palettePrefix}-${keyName}`}
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <>
      {Object.keys(palette).map((keyName) => (
        <PaletteItem
          key={keyName}
          color={palette[keyName]}
          light={keyName.includes('shade') || !keyName.includes('-')}
          name={`--${palettePrefix}-${keyName}`}
          onChange={keyName === 'wrong' ? handleChange : undefined}
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

  return (
    <>
      {Object.keys(palette).map((keyName) => (
        <PaletteItem
          key={keyName}
          color={palette[keyName]}
          light
          name={`--${palettePrefix}-${keyName}`}
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

  return (
    <>
      {Object.keys(palette).map((keyName) => (
        <PaletteItem
          key={keyName}
          color={palette[keyName]}
          light={keyName.includes('black')}
          name={`--${palettePrefix}-${keyName}`}
        />
      ))}
    </>
  );
};
