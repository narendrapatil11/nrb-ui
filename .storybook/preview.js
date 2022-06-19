import { UI_THEME } from "./theme/theme";
import "./story-style.css";
import { Layout } from "./Layout";

export const parameters = {
  viewMode: "docs",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    page: () => <Layout />,
    theme: UI_THEME,
  },
}