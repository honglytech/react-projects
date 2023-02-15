import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentLine: 0,
  song: null,
};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    setCurrentLine: (state, action) => {
      state.currentLine = action.payload;
    },
    setSong: (state, action) => {
      state.song = action.payload;
      state.currentLine = 0;
    },
  },
});

export const { setCurrentLine, setSong } = songSlice.actions;

export default songSlice;
