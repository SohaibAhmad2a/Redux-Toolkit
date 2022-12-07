import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { safe } from "./store.js";
import { App } from "./App.js";

ReactDOM.render(
  <Provider store={safe}>
    <App />
  </Provider>,
  document.getElementById("root")
);
