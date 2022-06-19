import { create } from "@storybook/theming";
import logo from './Github_Social_Preview.png';

const shared = {
  base: "light",
  appBorderRadius: 8,
  fontBase: '"Mulish", sans-serif',
  fontCode: "Monaco, Consolas, monospace",
  appContentBg: "white",
};

export const UI_THEME = create({
  ...shared,

  // logo/branding
  brandTitle: "NRB UI",
  brandUrl: "https://github.com/narendrapatil11/nrb-ui",
  brandImage: logo,
  //
  // colorPrimary: azul,
  // colorSecondary: darkCove,
  //
  // // Page background
  // appBg: lightSand,
  //
  // // Toolbar active tab/control
  // barSelectedColor: azul,
});