import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  start: "a"
};
// createSlice will return {name : string, reducer : ReducerFunction, actions : Record<string, ActionCreator>, caseReducers: Record<string,CaseReducer>.getInitialState: () => State}
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