import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";

import User from "./User";
import Count from "./Count";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    {/* <Count /> */}
    <User />
  </Provider>,
  document.getElementById("root")
);
