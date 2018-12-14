import { lighten, darken } from "../../utils/helpers";

const primary = "rgb(36,140,204)";
const secondary = "rgb(203,160,83)";

export const theme = {
  colors: {
    primary: {
      dark: darken(primary)(1 / 4),
      main: primary,
      light: lighten(primary)(1 / 4),
      contrast: "rgba(255,255,255,0.85)",
    },
    secondary: {
      dark: darken(secondary)(1 / 4),
      main: secondary,
      light: lighten(secondary)(1 / 4),
      contrast: "rgba(255,255,255,0.85)",
    },
  },
  fonts: {
    sans: "Catamaran",
  },
};
