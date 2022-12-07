import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 5
};
const sliceCount = createSlice({
  name: "Counting",
  initialState,
  reducers: {
    increase: (state) => {
      state.value = state.value + 5;
    },
    decrease: (status) => {
      status.value = status.value - 5;
    }
  }
});
export const { increase, decrease } = sliceCount.actions;
export const CountingReducer = sliceCount.reducer;
