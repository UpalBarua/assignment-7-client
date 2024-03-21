import { createSlice } from "@reduxjs/toolkit";

type UIState = {
  isDarkMode: boolean;
};

const initialState: UIState = {
  isDarkMode:
    localStorage.getItem("isDarkMode") !== undefined
      ? JSON.parse(localStorage.getItem("isDarkMode") as string)
      : false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("isDarkMode", JSON.stringify(state.isDarkMode));
    },
  },
});

export const { toggleMode } = uiSlice.actions;
export default uiSlice.reducer;
