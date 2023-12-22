import { createSlice } from "@reduxjs/toolkit";
import { IdentifyErrorForCriminal } from "errors";
import { checkCriminalStatus, createNewCriminal, deleteCriminal, getAllCriminals, updateCriminal } from "features/thunk";


const initialState = {
  criminals: [],
  error: null,
  loading: false,
  message: "",
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
        state.criminals = [...state.criminals, payload?.payload?.criminals];
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
        state.loading = false;
        let id = (payload.payload.criminal._id)
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
      .addCase(updateCriminal.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCriminal.fulfilled, (state, action) => {
        state.loading = false;
        state.criminals = state.criminals.map((elem)=>
          elem._id === action.payload._id ? action.payload : elem        
        )
      })
      .addCase(updateCriminal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(
        checkCriminalStatus.fulfilled,(state, action) => {
          state.loading = false;
          state.message = action.payload.message;
        }
      )
      .addCase(checkCriminalStatus.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(checkCriminalStatus.rejected, (state, { payload: error }) => {
        state.loading = false;
        state.message = error.message; // Assuming error.message contains a readable error message
      })
      
  },
});

export const {} = criminalSlice.actions;
export default criminalSlice.reducer;
