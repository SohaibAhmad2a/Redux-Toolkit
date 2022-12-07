import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  start: "a"
};
const sliceConcat = createSlice({
  name: "Concating",
  initialState,
  reducers: {
    concat: (stat) => {
      stat.start = stat.start + "a";
    }
  }
});

export const { concat } = sliceConcat.actions;
export const ConcatingReducer = sliceConcat.reducer;