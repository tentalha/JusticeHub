import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "features/slices/userSlice";
import operatorReducer from "features/slices/operatorSlice";
import investigatorReducer from "features/slices/investigatorSlice";
import criminalReducer from "features/slices/criminalSlice";
import firReducer from "features/slices/firSlice";
import evidenceReducer from "features/slices/EvidenceSlice";

export const reducer = combineReducers({
  user: userReducer,
  operator: operatorReducer,
  investigator: investigatorReducer,
  criminal: criminalReducer,
  fir: firReducer,
  evidence: evidenceReducer,
});
