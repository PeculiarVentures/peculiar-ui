import { addons } from '@storybook/addons';
import { themeLight } from './themes';

addons.setConfig({
  isFullscreen: false,
  showPanel: true,
  panelPosition: 'bottom',
  isToolshown: true,
  theme: themeLight,
  sidebar: {
    filters: {
      patterns: (item) => {
        return !item.name.includes('Example');
      },
    },
  },
});
