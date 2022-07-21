import _ from "lodash";
import { createTheme } from "@mui/material/styles";
import components from "./Override";
import type { RootState } from "../../redux/app/store";
import { useAppSelector } from "../../redux/app/hooks";
import { ThemeConfig } from "../../redux/types/types";

const baseTheme = {
  palette: {
    primary: {
      main: "rgb(112 211 58) ",
      light: "#e6f4ff",
      dark: "#1674f4",
    },
    secondary: {
      main: "#8338ec",
      light: "#f2cc8f",
      dark: "#00c292",
      contrastText: "#ffcc00",
    },
    success: {
      main: "#00c292",
      light: "#ebfaf2",
      dark: "#00964b",
      contrastText: "#ffffff",
    },
    danger: {
      main: "#e46a76",
      light: "#fdf3f5",
    },
    info: {
      main: "#0bb2fb",
      light: "#a7e3f4",
    },
    error: {
      main: "#e46a76",
      light: "#fdf3f5",
      dark: "#e45a68",
    },
    warning: {
      main: "#fec90f",
      light: "#fff4e5",
      dark: "#dcb014",
      contrastText: "#ffffff",
    },
    action: {
      disabledBackground: "rgba(73,82,88,0.12)",
      hoverOpacity: 0.1,
      hover: "rgba(0, 0, 0, 0.03)",
    },
  },

  components,
};

export const BuildTheme = (config: ThemeConfig) => {
  const customize = useAppSelector((state: RootState) => state.custumize);
  const baseMode = {
    palette: {
      mode: customize.activeMode,
      background: {
        default: customize.activeMode === "dark" ? "#20232a" : "#fafbfb",
        paper: customize.activeMode === "dark" ? "#282C34" : "#fafbfb",
      },
      text: {
        primary:
          customize.activeMode === "dark" ? "#ffff" : "rgba(0, 0, 0, 0.87)",
        secondary:
          customize.activeMode === "dark" ? "rgb(112 211 58)" : "#777e89",
        custom: "black",
      },
    },
  };

  const theme = createTheme(_.merge({}, baseMode, baseTheme, {}));
  return theme;
};
