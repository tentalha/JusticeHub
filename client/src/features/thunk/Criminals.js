import { createAsyncThunk } from "@reduxjs/toolkit";
import { delete_Criminal, get_All_Criminals } from "services";

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

export const deleteCriminal = createAsyncThunk(
  "deleteCriminal",
  async (id) => {
    try {
      const response = await delete_Criminal(id);
      return response?.data;
    } catch (error) {
      throw error; // Let Redux Toolkit handle the error by rejecting the promise
    }
  }
);
