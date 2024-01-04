import { create } from '@storybook/theming';
import PackageInfo from './../package.json';

export const themeLight = create({
  base: 'light',
  brandTitle: `${PackageInfo.name} v${PackageInfo.version}`,
});

export const themeDark = create({
  base: 'dark',
  brandTitle: `${PackageInfo.name} v${PackageInfo.version}`,
  appPreviewBg: '#1B1C1D',
});
