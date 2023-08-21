import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "features/combineReducers";

export const store = configureStore({
  reducer,
});
