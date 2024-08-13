import { createContext } from "react";

export interface ITheme {
  name: string;
  backgroundColor: string;
  foregroundColor: string;
}

export interface IThemes {
  dark: ITheme;
  light: ITheme;
}

export const themes: IThemes = {
  dark: {
    name: "Night",
    backgroundColor: "black",
    foregroundColor: "white",
  },
  light: {
    name: "Day",
    backgroundColor: "white",
    foregroundColor: "maroon",
  },
};

export const ThemeContext = createContext<ITheme>(themes.light);
