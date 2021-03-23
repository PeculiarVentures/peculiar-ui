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

export const Palette = (args: any) => {
  const rgb = args.color
    .replace('rgba(', '')
    .replace(')', '')
    .split(',');
  const color = new Color([Number(rgb[0]), Number(rgb[1]), Number(rgb[2])]);
  const palette = color.palette();

  return (
    <>
      <div>
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
    </>
  );
};

Palette.args = {
  color: 'rgba(94,188,84,1)',
};

export default {
  title: 'Palette',
  argTypes: {
    color: { control: 'color' },
  },
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
  },
};
