import React from 'react';
import { Color } from '@peculiar/color';
import { Typography } from '../Typography';
import { colors as colorsTheme } from './foundations';
import { contrastThreshold } from './utils';
import { defaultThemeLight } from './default_theme';

export default {
  title: 'Palette',
};

export const ColorItemExample: React.FC<{ title: string; colors: Record<string, string> }> = (
  props,
) => {
  const { title, colors } = props;

  return (
    <div className="color_item_custom">
      <h3>
        {title}
      </h3>
      <ul className="color_item_custom-list">
        {Object.keys(colors).map((key) => (
          <li
            key={key}
            className="color_item_custom-item"
          >
            <div
              className="color_item_custom-bg"
              style={{
                background: colors[key],
              }}
            />
            <div>
              <Typography>
                {key}
              </Typography>
              <Typography
                color="gray-9"
                variant="b3"
              >
                {colors[key]}
              </Typography>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const PalettePlayground = () => {
  const [color, setColor] = React.useState<string>(colorsTheme.primary.primary);
  const palette = colorsTheme.generateColorPalette('custom', color);

  const contrastColorRatio = new Color(color)
    .getContrastRatio(defaultThemeLight.color.white);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <>
      <div className="color_item_custom-picker">
        <input
          type="color"
          defaultValue={color}
          onChange={handleChange}
          className="color_item_custom-picker_input"
        />
        <h4
          style={{
            color: contrastColorRatio > contrastThreshold
              ? defaultThemeLight.color.white
              : defaultThemeLight.color.black,
          }}
          className="color_item_custom-picker_text"
        >
          {color}
        </h4>
      </div>
      <ColorItemExample
        title="Result"
        colors={palette}
      />
    </>
  );
};
