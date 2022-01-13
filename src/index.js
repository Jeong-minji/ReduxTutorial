import React from "react";
import ReactDOM from "react-dom";
import Count from "./Count";

import { createStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Count />
  </Provider>,
  document.getElementById("root")
);
