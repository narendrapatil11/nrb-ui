import { addons } from '@storybook/addons';
import { UI_THEME } from './theme/theme';

addons.setConfig({
  theme: UI_THEME,
  toolbar: 'hidden'
});