import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./slices.js";
import { concat } from "./slicesConcat.js";

export function App() {
  const number = useSelector((state) => state.Counting.value);
  const word = useSelector((state) => state.Concating.start);
  //const words = useSelector((state) => state); This will return an object {Counting: {…}, Concating: {…}}
  const dispatch = useDispatch();
  return (
    <div>
      Number is {number}
      <br />
      <button onClick={() => dispatch(increase())}>Increment by 5</button>
      <button onClick={() => dispatch(decrease())}>Decrement by 5</button>
      <br />
      Word is {word}
      <br />
      <button onClick={() => dispatch(concat())}>Concating</button>
    </div>
  );
}
