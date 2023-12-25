import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteEvidenceId, getEvidences, postEvidence } from "services";

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

export const deleteEvidence = createAsyncThunk(
  "deleteEvidence",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await deleteEvidenceId(id);
      return response.data.payload;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
