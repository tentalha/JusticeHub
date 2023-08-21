import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "features/slices/userSlice";

export const reducer = combineReducers({
  user: userReducer,
});
