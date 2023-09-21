import { createSlice } from "@reduxjs/toolkit";
import { IdentifyErrorForOperator } from "errors";
import { getAllOperators } from "features/thunk/manageOperator";
import { createNewOperator } from "features/thunk/manageOperator";
import { deleteOperator } from "features/thunk/manageOperator";


const initialState = {
  operators : [],
  error: null,
  loading: false,
};

const operatorSlice = createSlice({
  name: "operator",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder)=>{
    builder
  .addCase(getAllOperators.fulfilled, (state, { payload: { payload } }) => {
    state.operators = payload.operators;
    state.loading = false;
  })
  .addCase(getAllOperators.pending, (state) => {
    state.error = null;
    state.loading = true;
  })
  .addCase(getAllOperators.rejected, (state, { payload: error }) => {
    state.loading = false;
    state.error = IdentifyErrorForOperator(error);

  })
  .addCase(createNewOperator.fulfilled, (state, { payload: { payload } }) => {
    state.operators.push(payload);
    state.loading = false;
  })
  .addCase(createNewOperator.pending, (state) => {
    state.error = null;
    state.loading = true;
  })
  .addCase(createNewOperator.rejected, (state, { payload: error }) => {
    state.loading = false;
    state.error = IdentifyErrorForOperator(error);

  })
 .addCase(deleteOperator.fulfilled, (state, { payload }) => {
    state.loading = false;
    const { _id } = payload; // Assuming your payload contains an ID
    state.operators = state.operators.filter((elem) => elem._id !== _id);
  })
  .addCase(deleteOperator.pending, (state) => {
    state.error = null;
    state.loading = true;
  })
  .addCase(deleteOperator.rejected, (state, { error }) => {
    state.loading = false;
    state.error = error.message; // Assuming error.message contains a readable error message
  });
}
});

export const { } = operatorSlice.actions;
export default operatorSlice.reducer;
