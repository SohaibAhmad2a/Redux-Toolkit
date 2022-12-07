import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 5
};
// createSlice will return {name : string, reducer : ReducerFunction, actions : Record<string, ActionCreator>, caseReducers: Record<string,CaseReducer>.getInitialState: () => State}
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
