import { createAsyncThunk } from "@reduxjs/toolkit";
import { forget_password, login_user, reset_password } from "services";

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

export const forgetPassword = createAsyncThunk(
  "forgetPassword",
  async (data, { rejectWithValue }) => {
    try {
      const response = await forget_password(data);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);


export const resetPassword = createAsyncThunk(
  "resetPassword",
  async ({token, id, password}, { rejectWithValue }) => {
    try {
      const response = await reset_password(token, id, password);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);


