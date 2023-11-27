import { createSlice } from "@reduxjs/toolkit";
import { IdentifyErrorForInvestigator } from "errors";
import { getAllInvestigators, updateInvestigator } from "features/thunk";
import { createNewInvestigator } from "features/thunk";
import { deleteInvestigator } from "features/thunk";


const initialState = {
  investigators : [],
  error: null,
  loading: false,
};

const investigatorSlice = createSlice({
  name: "investigator",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder)=>{
    builder
  .addCase(getAllInvestigators.fulfilled, (state, { payload: { payload } }) => {
    state.investigators = payload.investigators;
    state.loading = false;
  })
  .addCase(getAllInvestigators.pending, (state) => {
    state.error = null;
    state.loading = true;
  })
  .addCase(getAllInvestigators.rejected, (state, { payload: error }) => {
    state.loading = false;
    state.error = IdentifyErrorForInvestigator(error);
})
.addCase(createNewInvestigator.fulfilled, (state, { payload: { payload } }) => {
    state.investigators.push(payload);
    state.loading = false;
  })
  .addCase(createNewInvestigator.pending, (state) => {
    state.error = null;
    state.loading = true;
  })
  .addCase(createNewInvestigator.rejected, (state, { payload: error }) => {
    state.loading = false;
    state.error = IdentifyErrorForInvestigator(error);

  })
  .addCase(deleteInvestigator.fulfilled, (state, { payload }) => {
    let id = (payload.payload.investigator._id)
    state.loading = false;
    state.investigators = state.investigators.filter((elem) => elem._id !== id);
   })
   .addCase(deleteInvestigator.pending, (state) => {
     state.error = null;
     state.loading = true;
   })
   .addCase(deleteInvestigator.rejected, (state, { error }) => {
     state.loading = false;
     state.error = error.message; // Assuming error.message contains a readable error message
   })
   .addCase(updateInvestigator.pending, (state) => {
    state.loading = true;
  })
  .addCase(updateInvestigator.fulfilled, (state, action) => {
    state.loading = false;
    console.log(action.payload);
    state.investigators = state.investigators.map((elem)=>
      elem._id === action.payload._id ? action.payload : elem        
    )
  })
  .addCase(updateInvestigator.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error.message;
  });

}
 
});

export const { } = investigatorSlice.actions;
export default investigatorSlice.reducer;
