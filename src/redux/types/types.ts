export interface ThemeConfig {
  theme: string;
}

export interface AxiosConfig {
  headers: {
    "Content-Type": "application/json";
    Authorization?: string;
  };
}

export enum ModeType {
  DARK = "dark",
  LIGHT = "light",
}
