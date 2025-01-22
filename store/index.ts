import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices/apiSlice";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
