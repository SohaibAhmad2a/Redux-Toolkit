import { configureStore } from "@reduxjs/toolkit";
import { CountingReducer } from "./slices.js";
import { ConcatingReducer } from "./slicesConcat.js";
//configureStore will return {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, @@observable: ƒ}
export const safe = configureStore({
  reducer: {
    Counting: CountingReducer, //CountingReducer is a reducer function for Counting
    Concating: ConcatingReducer //ConcatingReducer is a reducer function for Concating
  }
});
