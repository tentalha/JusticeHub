import { createSlice } from "@reduxjs/toolkit";
import {
  deleteEvidence,
  getEvidenceWithFIRId,
  uploadNewEvidence,
} from "features/thunk";
import { toast } from "react-toastify";

const initialState = {
  evidences: [],
  error: null,
  loading: false,
  success: false,
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
      state.success = true;
    });
    builder.addCase(uploadNewEvidence.pending, (state) => {
      state.loading = true;
      state.success = false;
    });
    builder.addCase(uploadNewEvidence.rejected, (state) => {
      state.loading = true;
      toast.error("Uploaded Failed!");
      state.success = false;
    });
    builder.addCase(deleteEvidence.fulfilled, (state, { payload }) => {
      state.evidences = state.evidences.filter(
        (i) => i._id !== payload.deletedFIR
      );
      toast.warning("Deleted Successfully!");
    });
    builder.addCase(deleteEvidence.rejected, () => {
      toast.error("Error Deleted Evidence!");
    });
  },
});

export default criminalSlice.reducer;
