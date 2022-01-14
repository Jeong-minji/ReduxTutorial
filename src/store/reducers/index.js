// root reducer
import { combineReducers } from "@reduxjs/toolkit";
import countReducer from "./countReducer";
import userReducer from "./userReducer";

export default combineReducers({ count: countReducer, user: userReducer });

// redux 에서 제공하는 combineReducers 를 통해 주제별로 나눈 조각 reducer들을 rootReducer 로 모아줍니다.
// rootReducer는 전체 파일을 렌더하고 있는 index.js에서 사용 가능
