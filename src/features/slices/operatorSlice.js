import { createSlice } from "@reduxjs/toolkit";
import { IdentifyErrorForOperator } from "errors";
import { getAllOperators, updateOperator } from "features/thunk/manageOperator";
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
   let id = (payload.payload.operator._id)
    state.loading = false;
    state.operators = state.operators.filter((elem) => elem._id !== id);
  })
  .addCase(deleteOperator.pending, (state) => {
    state.error = null;
    state.loading = true;
  })
  .addCase(deleteOperator.rejected, (state, { error }) => {
    state.loading = false;
    state.error = error.message; // Assuming error.message contains a readable error message
  })
  .addCase(updateOperator.pending, (state) => {
    state.loading = true;
  })
  .addCase(updateOperator.fulfilled, (state, action) => {
    state.loading = false;
    console.log(action.payload);
    state.operators = state.operators.map((elem)=>
      elem._id === action.payload._id ? action.payload : elem        
    )
  })
  .addCase(updateOperator.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error.message;
  });
  
}
});

export const { } = operatorSlice.actions;
export default operatorSlice.reducer;
