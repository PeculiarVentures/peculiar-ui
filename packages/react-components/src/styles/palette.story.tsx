import * as React from 'react';
import { Color } from '@peculiar/color';
import { Typography } from '../typography';

const PaletteItem = (props: { color: Color; name: string; light?: boolean; }) => {
  const { color, name, light } = props;

  return (
    <div
      style={{
        width: '100%',
        background: color.toHexString(),
        minHeight: 40,
        padding: 6,
      }}
    >
      <Typography
        variant="b2"
        color={light ? 'white' : 'black'}
      >
        {name}
      </Typography>
      <Typography
        variant="c2"
        color={light ? 'white' : 'black'}
      >
        hex:&nbsp;
        {color.toHexString()}
      </Typography>
      <Typography
        variant="c2"
        color={light ? 'white' : 'black'}
      >
        rgb:&nbsp;
        {color.toRgb().join(', ')}
      </Typography>
      <Typography
        variant="c2"
        color={light ? 'white' : 'black'}
      >
        hsb:&nbsp;
        {color.toHsb().join(', ')}
      </Typography>
    </div>
  );
};

PaletteItem.defaultProps = {
  light: false,
};

const PaletteList = (props: { palette: any }) => {
  const { palette } = props;

  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <PaletteItem
        name="tint5"
        color={palette.tint5}
      />
      <PaletteItem
        name="tint4"
        color={palette.tint4}
      />
      <PaletteItem
        name="tint3"
        color={palette.tint3}
      />
      <PaletteItem
        name="tint2"
        color={palette.tint2}
      />
      <PaletteItem
        name="tint1"
        color={palette.tint1}
      />
      <PaletteItem
        name="base"
        color={palette.base}
        light
      />
      <PaletteItem
        name="shade1"
        color={palette.shade1}
        light
      />
      <PaletteItem
        name="shade2"
        color={palette.shade2}
        light
      />
      <PaletteItem
        name="shade3"
        color={palette.shade3}
        light
      />
      <PaletteItem
        name="shade4"
        color={palette.shade4}
        light
      />
      <PaletteItem
        name="shade5"
        color={palette.shade5}
        light
      />
    </div>
  );
};

const rgbaColorStringToArray = (rgb: string) => (
  rgb
    .replace('rgba(', '')
    .replace(')', '')
    .split(',')
);

export const Palette = (args: any) => {
  const primaryRgb = rgbaColorStringToArray(args.colorPrimary);
  const secondaryRgb = rgbaColorStringToArray(args.colorSecondary);
  const wrongRgb = rgbaColorStringToArray(args.colorWrong);

  const primary = new Color([
    Number(primaryRgb[0]),
    Number(primaryRgb[1]),
    Number(primaryRgb[2]),
  ]);
  const secondary = new Color([
    Number(secondaryRgb[0]),
    Number(secondaryRgb[1]),
    Number(secondaryRgb[2]),
  ]);
  const wrong = new Color([
    Number(wrongRgb[0]),
    Number(wrongRgb[1]),
    Number(wrongRgb[2]),
  ]);

  const palette = {
    primary: primary.palette(),
    secondary: secondary.palette(),
    wrong: wrong.palette(),
  };

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <PaletteList palette={palette.primary} />
      <PaletteList palette={palette.secondary} />
      <PaletteList palette={palette.wrong} />
    </div>
  );
};

Palette.args = {
  colorPrimary: 'rgba(94,188,84,1)',
  colorSecondary: 'rgba(55,127,244,1)',
  colorWrong: 'rgba(222,70,65,1)',
};

export default {
  title: 'Palette',
  argTypes: {
    colorPrimary: { control: 'color' },
    colorSecondary: { control: 'color' },
    colorWrong: { control: 'color' },
  },
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
  },
};
