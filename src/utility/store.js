import { configureStore } from "@reduxjs/toolkit";
import cricketDataReducer from "./cricketDataSlice";
const store = configureStore({
  reducer: {
    cricketData: cricketDataReducer,
  },
});

export default store;
