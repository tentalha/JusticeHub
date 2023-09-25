import { createSlice } from "@reduxjs/toolkit";
import { IdentifyErrorForCriminal } from "errors";
import { createNewCriminal, deleteCriminal, getAllCriminals } from "features/thunk";


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
        getAllCriminals.fulfilled,(state, { payload: { payload } }) => {
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
      .addCase(createNewCriminal.fulfilled, (state, { payload: { payload } }) => {
        state.criminals.push(payload);
        state.loading = false;
      })
      .addCase(createNewCriminal.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(createNewCriminal.rejected, (state, { payload: error }) => {
        state.loading = false;
        state.error = IdentifyErrorForCriminal(error);
      })
      .addCase(deleteCriminal.fulfilled,(state, { payload: { payload } }) => {
        let id = (payload.payload.criminal._id)
        state.loading = false;
        state.criminals = state.criminals.filter((elem) => elem._id !== id);
        })
      .addCase(deleteCriminal.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(deleteCriminal.rejected, (state, { payload: error }) => {
        state.loading = false;
        state.error = error.message; // Assuming error.message contains a readable error message
      })
      
  },
});

export const {} = criminalSlice.actions;
export default criminalSlice.reducer;
