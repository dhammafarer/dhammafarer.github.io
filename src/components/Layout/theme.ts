import { lighten, darken } from "../../utils/helpers";

const primary = "rgb(36,140,204)";
const primaryDark = darken(primary)(1 / 4);
const primaryLight = lighten(primary)(1 / 4);

const secondary = "rgb(203,160,83)";
const secondaryDark = darken(secondary)(1 / 4);
const secondaryLight = lighten(secondary)(1 / 4);

export const theme = {
  colors: {
    primary: {
      dark: primaryDark,
      main: primary,
      light: primaryLight,
      contrast: "rgba(255,255,255,0.85)",
    },
    secondary: {
      dark: secondaryDark,
      main: secondary,
      light: secondaryLight,
      contrast: "rgba(255,255,255,0.85)",
    },
  },
  fonts: {
    sans: "Catamaran",
  },
};
