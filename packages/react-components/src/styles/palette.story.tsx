import * as React from 'react';
import { Color } from '@peculiar/color';
import { Typography } from '../Typography';

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

type PalettrArgs = {
  colorPrimary: string;
  colorSecondary: string;
  colorWrong: string;
};

export const Palette = (args: PalettrArgs) => {
  const { colorPrimary, colorSecondary, colorWrong } = args;
  const primary = new Color(colorPrimary);
  const secondary = new Color(colorSecondary);
  const wrong = new Color(colorWrong);

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
  colorPrimary: '#5ebc54',
  colorSecondary: '#377ff4',
  colorWrong: '#de4641',
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
