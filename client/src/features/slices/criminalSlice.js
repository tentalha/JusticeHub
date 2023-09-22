import { createSlice } from "@reduxjs/toolkit";
import { getAllCriminals } from "features/thunk";


const initialState = {
  criminals: [],
  error: null,
  loading: false,
};

const criminalSlice = createSlice({
  name: "criminalSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getAllCriminals.fulfilled,
        (state, { payload: { payload } }) => {
          state.criminals = payload.criminals;
          state.loading = false;
        }
      )
      .addCase(getAllCriminals.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getAllCriminals.rejected, (state, { payload: error }) => {
        state.loading = false;
      })
      
  },
});

export const {} = criminalSlice.actions;
export default criminalSlice.reducer;
