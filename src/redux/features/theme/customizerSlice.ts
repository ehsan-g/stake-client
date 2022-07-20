import { createSlice } from "@reduxjs/toolkit";
import { ModeType } from "../../types/types";

export interface CustomizeState {
  activeMode?: "light" | "dark" | "loading";
  status?: "success" | "loading" | "failed";
}

const initialState: CustomizeState = {
  activeMode: "dark", // light or dark
  status: "loading",
};

export const custumizerSlice = createSlice({
  name: "themeCustomizer",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeMode: (state) => {
      if (state.activeMode === ModeType.DARK) {
        state.activeMode = ModeType.LIGHT;
      } else if (state.activeMode === ModeType.LIGHT) {
        state.activeMode = ModeType.DARK;
      }
    },
  },
});

export const { changeMode } = custumizerSlice.actions;
export default custumizerSlice.reducer;
