import { createAsyncThunk } from "@reduxjs/toolkit";
import { get_All_Criminals } from "services";

export const getAllCriminals = createAsyncThunk(
  "getAllCriminals",
  async (_, { rejectWithValue }) => {
    try {
      const response = await get_All_Criminals();
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);
