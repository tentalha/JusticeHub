import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  check_criminal_status,
  create_New_Criminal,
  delete_Criminal,
  get_All_Criminals,
  update_Criminal,
} from "services";

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

export const createNewCriminal = createAsyncThunk(
  "createNewCriminal",
  async (data, { rejectWithValue }) => {
    try {
      const response = await create_New_Criminal(data);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const deleteCriminal = createAsyncThunk(
  "deleteCriminal",
  async (id, { rejectWithValue }) => {
    try {
      const response = await delete_Criminal(id);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateCriminal = createAsyncThunk(
  "updateCriminal",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await update_Criminal(id, data);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const checkCriminalStatus = createAsyncThunk(
  "checkCriminalStatus",
  async (CNIC, { rejectWithValue }) => {
    try {
      const response = await check_criminal_status(CNIC);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);
