import React from 'react';
import { Typography } from '../Typography';

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
