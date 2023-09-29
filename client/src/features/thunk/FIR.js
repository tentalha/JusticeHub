import { createAsyncThunk } from "@reduxjs/toolkit";
import { create_fir } from "services";

export const createNewFir = createAsyncThunk(
  "createFIR",
  async (data, { rejectWithValue }) => {
    try {
      const response = await create_fir(data);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);
