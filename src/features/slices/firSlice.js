import { createSlice } from "@reduxjs/toolkit";
import { IdentifyErrorForFIR } from "errors";
import { approveFir, createNewFir, deleteFIR, getActiveFIRS, getAllFIRS, getClosedFIRS, getCompletedFIRS, getPendingFIRS, updateStatus } from "features";

const initialState = {
  firs: [],
  pendingFir:[],
  activeFir:[],
  completedFir:[],
  closedFir:[],
  data: null,
  error: null,
  loading: false,
  isSuccess: false,
};

const firSlice = createSlice({
  name: "firSlice",
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
    builder.addCase(
      getAllFIRS.fulfilled,(state, { payload: { payload } }) => {
        state.firs = payload.firs;
        state.loading = false;
      })
    builder.addCase(getAllFIRS.pending, (state) => {
      state.error = null;
      state.loading = true;
    })
    builder.addCase(getAllFIRS.rejected, (state, { payload: error }) => {
      state.loading = false;
    })
    builder.addCase(getPendingFIRS.fulfilled,(state, { payload: { payload } }) => {
        state.pendingFir = payload.firs;
        state.loading = false;
      })
    builder.addCase(getPendingFIRS.pending, (state) => {
      state.error = null;
      state.loading = true;
    })
    builder.addCase(getPendingFIRS.rejected, (state, { payload: error }) => {
      state.loading = false;
    })
    builder.addCase(getActiveFIRS.fulfilled,(state, { payload: { payload } }) => {
      state.activeFir = payload.firs;
      state.loading = false;
    })
    builder.addCase(getActiveFIRS.pending, (state) => {
    state.error = null;
    state.loading = true;
    })
    builder.addCase(getActiveFIRS.rejected, (state, { payload: error }) => {
    state.loading = false;
    })
    builder.addCase(getCompletedFIRS.fulfilled,(state, { payload: { payload } }) => {
      state.completedFir = payload.firs;
      state.loading = false;
    })
    builder.addCase(getCompletedFIRS.pending, (state) => {
    state.error = null;
    state.loading = true;
    })
    builder.addCase(getCompletedFIRS.rejected, (state, { payload: error }) => {
    state.loading = false;
    })
    builder.addCase(getClosedFIRS.fulfilled,(state, { payload: { payload } }) => {
      state.closedFir = payload.firs;
      state.loading = false;
      })
    builder.addCase(getClosedFIRS.pending, (state) => {
      state.error = null;
      state.loading = true;
    })
    builder.addCase(getClosedFIRS.rejected, (state, { payload: error }) => {
      state.loading = false;
    })
    builder.addCase(approveFir.fulfilled,(state, { payload: { payload } }) => {
      state.data = payload;
      state.loading = false;
  })
  builder.addCase(approveFir.pending, (state) => {
    state.error = null;
    state.loading = true;
  })
  builder.addCase(approveFir.rejected, (state, { payload: error }) => {
    state.loading = false;
  })
  .addCase(deleteFIR.fulfilled, (state, { payload }) => {
    let id = (payload.payload.firs._id)
    state.loading = false;
    state.firs = state.firs.filter((elem) => elem._id !== id);
   })
   .addCase(deleteFIR.pending, (state) => {
     state.error = null;
     state.loading = true;
   })
   .addCase(deleteFIR.rejected, (state, { error }) => {
     state.loading = false;
     state.error = error.message; // Assuming error.message contains a readable error message
   })
   .addCase(updateStatus.fulfilled, (state, { payload }) => {
    state.loading = false;
   })
   .addCase(updateStatus.pending, (state) => {
     state.error = null;
     state.loading = true;
   })
   .addCase(updateStatus.rejected, (state, { error }) => {
     state.loading = false;
     state.error = error.message; // Assuming error.message contains a readable error message
   });
  
  
  
  },
});

export const { resetState } = firSlice.actions;
export default firSlice.reducer;
