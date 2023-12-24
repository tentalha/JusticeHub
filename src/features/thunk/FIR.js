import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  approve_FIR,
  create_fir,
  delete_FIR,
  get_Active_FIRS,
  get_All_FIRS,
  get_Closed_FIRS,
  get_Completed_FIRS,
  get_Pending_FIRS,
  update_Status,
} from "services";

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

export const getAllFIRS = createAsyncThunk(
  "getAllFIRS",
  async (_, { rejectWithValue }) => {
    try {
      const response = await get_All_FIRS();
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getPendingFIRS = createAsyncThunk(
  "getPendinglFIRS",
  async (_, { rejectWithValue }) => {
    try {
      const response = await get_Pending_FIRS();
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getActiveFIRS = createAsyncThunk(
  "getActiveFIRS",
  async (_, { rejectWithValue }) => {
    try {
      const response = await get_Active_FIRS();
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getCompletedFIRS = createAsyncThunk(
  "getCompletedFIRS",
  async (_, { rejectWithValue }) => {
    try {
      const response = await get_Completed_FIRS();
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getClosedFIRS = createAsyncThunk(
  "getClosedFIRS",
  async (_, { rejectWithValue }) => {
    try {
      const response = await get_Closed_FIRS();
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const approveFir = createAsyncThunk(
  "approveFIR",
  async ({ id, selected }, { rejectWithValue }) => {
    try {
      const response = await approve_FIR(id, selected);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const deleteFIR = createAsyncThunk(
  "deleteFIR",
  async (id, { rejectWithValue }) => {
    try {
      const response = await delete_FIR(id);
      return response?.data;
    } catch (error) {
      // Let Redux Toolkit handle the error by rejecting the promise
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const updateStatus = createAsyncThunk(
  "updateStatus",
  async ({ id, statusValue }, { rejectWithValue }) => {
    try {
      const response = await update_Status(id, statusValue);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);
