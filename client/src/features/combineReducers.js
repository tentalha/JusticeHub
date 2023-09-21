import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "features/slices/userSlice";
import operatorReducer from "features/slices/operatorSlice";
import investigatorReducer from "features/slices/investigatorSlice";


export const reducer = combineReducers({
  user: userReducer,
  operator: operatorReducer,
  investigator: investigatorReducer,
});
