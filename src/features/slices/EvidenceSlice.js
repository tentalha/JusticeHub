import { createSlice } from "@reduxjs/toolkit";
import { getEvidenceWithFIRId, uploadNewEvidence } from "features/thunk";
import { toast } from "react-toastify";

const initialState = {
  evidences: [],
  error: null,
  loading: false,
};

const criminalSlice = createSlice({
  name: "evidence",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEvidenceWithFIRId.fulfilled, (state, { payload }) => {
      state.evidences = payload?.evidences;
    });
    builder.addCase(uploadNewEvidence.fulfilled, (state, { payload }) => {
      toast.success("Uploaded Successfully!");
      state.evidences = [...state.evidences, ...payload.data];
    });
    builder.addCase(uploadNewEvidence.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(uploadNewEvidence.rejected, (state) => {
      state.loading = true;
      toast.error("Uploaded Failed!");
    });
  },
});

export default criminalSlice.reducer;
