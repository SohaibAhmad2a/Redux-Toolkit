import { configureStore } from "@reduxjs/toolkit";
import { CountingReducer } from "./slices.js";
import { ConcatingReducer } from "./slicesConcat.js";

export const safe = configureStore({
  reducer: {
    Counting: CountingReducer,
    Concating: ConcatingReducer
  }
});
