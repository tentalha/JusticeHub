import { createAsyncThunk } from "@reduxjs/toolkit";
import { getEvidences, postEvidence } from "services";

export const getEvidenceWithFIRId = createAsyncThunk(
  "createFIR",
  async (firId, { rejectWithValue }) => {
    try {
      const response = await getEvidences(firId);
      return response?.data?.payload;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const uploadNewEvidence = createAsyncThunk(
  "uploadEvidence",
  async ({ files, firId }, { rejectWithValue }) => {
    try {
      const response = await postEvidence(firId, files);
      return response.data.payload;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
