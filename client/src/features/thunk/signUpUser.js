import { createAsyncThunk } from "@reduxjs/toolkit";
import { register_user } from "services";

export const signUpUser = createAsyncThunk(
  "signUpUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await register_user(data);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
