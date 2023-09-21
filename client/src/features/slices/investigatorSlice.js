import { createSlice } from "@reduxjs/toolkit";
import { IdentifyErrorForInvestigator } from "errors";
import { getAllInvestigators } from "features/thunk";
import { createNewInvestigator } from "features/thunk";

const initialState = {
  investigators: [],
  error: null,
  loading: false,
};

const investigatorSlice = createSlice({
  name: "investigator",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getAllInvestigators.fulfilled,
        (state, { payload: { payload } }) => {
          state.investigators = payload.investigators;
          state.loading = false;
        }
      )
      .addCase(getAllInvestigators.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getAllInvestigators.rejected, (state, { payload: error }) => {
        state.loading = false;
        state.error = IdentifyErrorForInvestigator(error);
      })
      .addCase(
        createNewInvestigator.fulfilled,
        (state, { payload: { payload } }) => {
          state.investigators.push(payload);
          state.loading = false;
        }
      )
      .addCase(createNewInvestigator.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(createNewInvestigator.rejected, (state, { payload: error }) => {
        state.loading = false;
        state.error = IdentifyErrorForInvestigator(error);
      });
  },
});

export const {} = investigatorSlice.actions;
export default investigatorSlice.reducer;
