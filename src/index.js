import React from "react";
import ReactDOM from "react-dom";
import User from "./pages/User"

import {Provider} from "react-redux";
import configureStore from "./redux/store/configureStore";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <User />
    </Provider>,
  document.getElementById("root")
);

