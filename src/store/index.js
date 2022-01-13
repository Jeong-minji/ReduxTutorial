import { createStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

export default store;

// createStore: store 생성 함수
// 첫번째 인수로 rootReducer
