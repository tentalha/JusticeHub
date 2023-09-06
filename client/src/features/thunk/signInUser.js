import { createAsyncThunk } from "@reduxjs/toolkit";
import { login_user } from "services";

export const signInUser = createAsyncThunk(
  "signInUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await login_user(data);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);
