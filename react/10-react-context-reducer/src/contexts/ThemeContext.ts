import { createContext } from "react";

export interface ITheme {
  name: string;
  background: string;
  color: string;
}

interface IThemes {
  dark: ITheme;
  light: ITheme;
}

export const themes: IThemes = {
  dark: {
    name: "Dark",
    background: "black",
    color: "whitesmoke",
  },
  light: {
    name: "Light",
    background: "whitesmoke",
    color: "black",
  },
};

export const ThemeContext = createContext<ITheme>(themes.light);
