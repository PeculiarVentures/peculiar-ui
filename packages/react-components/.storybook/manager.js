import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
import PackageInfo from './../package.json';

const theme = create({
  base: 'light',
  brandTitle: `${PackageInfo.name} v${PackageInfo.version}`,
});

addons.setConfig({
  isFullscreen: false,
  showPanel: true,
  panelPosition: 'bottom',
  isToolshown: true,
  theme,
});
