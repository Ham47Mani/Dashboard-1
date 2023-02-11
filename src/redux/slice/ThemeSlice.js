import { createSlice } from "@reduxjs/toolkit";

export const ThemeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: 'theme-mode-light',
    color: 'theme-color-blue'
  },
  reducers: {
    SET_MODE: (state, action) => {
      return {
        ...state,
        mode: action.payload
      }
    },
    SET_COLOR: (state, action) => {
      return {
        ...state,
        color: action.payload
      }
    },
    GET_THEME: (state) => {
      return {
        ...state
      }
    }
  }
});

export default ThemeSlice.reducer;