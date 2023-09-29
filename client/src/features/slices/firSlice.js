import { createSlice } from "@reduxjs/toolkit";
import { IdentifyErrorForFIR } from "errors";
import { createNewFir } from "features";

const initialState = {
  firs: [],
  error: null,
  loading: false,
  isSuccess: false,
};

const firSlice = createSlice({
  name: "criminalSlice",
  initialState,
  reducers: {
    resetState: (state) => {
      state.error = null;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createNewFir.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.isSuccess = true;
      state.firs = [...state.firs, payload?.payload?.fir];
    });
    builder.addCase(createNewFir.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(createNewFir.rejected, (state, { payload: error }) => {
      state.loading = false;
      state.isSuccess = false;
      state.error = IdentifyErrorForFIR(error);
    });
  },
});

export const { resetState } = firSlice.actions;
export default firSlice.reducer;
