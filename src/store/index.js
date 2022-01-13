import { configureStore, createSlice } from "@reduxjs/toolkit";

const store = createSlice({
  name: "storeReducer",
  initialState: { text: "", count: 0 },
  reducers: {
    add: (state, action) => {
      state.text = action.payload;
    },
    plus: (state, action) => {
      state.count++;
    },
  },
});

export const { add, plus } = store.actions; // store에서의 action 중, add와 plus를 내보냄

export default configureStore({ reducer: store.reducer }); // Store를 생성함 (createStore 대체)
