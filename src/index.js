import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import UsersPage from "./pages/Users";
import configureStore from "./redux/store/configureStore";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <UsersPage />
  </Provider>,
  document.getElementById("root")
);
