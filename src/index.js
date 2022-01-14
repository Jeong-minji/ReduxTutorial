import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";

import Count from "./Count";
import User from "./User";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <User />
  </Provider>,
  document.getElementById("root")
);
