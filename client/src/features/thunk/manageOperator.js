import { createAsyncThunk } from "@reduxjs/toolkit";
import { get_All_Operators } from "services";
import { create_New_Operator } from "services";
import { delete_Operator } from "services";

export const getAllOperators = createAsyncThunk(
  "getAllOperators",
  async (_, { rejectWithValue }) => {
    try {
      const response = await get_All_Operators();
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const createNewOperator = createAsyncThunk(
  "createNewOperator",
  async (data , { rejectWithValue }) => {
    try {
      const response = await create_New_Operator(data);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const deleteOperator = createAsyncThunk(
  'deleteOperator',
  async (id) => {
    try {
      const response = await delete_Operator(id);
      return response?.data
    } catch (error) {
      throw error; // Let Redux Toolkit handle the error by rejecting the promise
    }
    
  }
);