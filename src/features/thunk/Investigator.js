import { createAsyncThunk } from "@reduxjs/toolkit";
import { get_All_Investigators, update_Investigator } from "services";
import { create_New_Investigator } from "services";
import { delete_Investigator } from "services";

export const getAllInvestigators = createAsyncThunk(
  "getAllInvestigators",
  async (_, { rejectWithValue }) => {
    try {
      const response = await get_All_Investigators();
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const createNewInvestigator = createAsyncThunk(
   "createNewInvestigator",
   async (data , { rejectWithValue }) => {
     try {
       const response = await create_New_Investigator(data);
       return response?.data;
     } catch (error) {
       return rejectWithValue(error?.response?.data);
     }
   }
 );

export const deleteInvestigator = createAsyncThunk(
  'deleteInvestiagtor',
  async (id) => {
    try {
      const response = await delete_Investigator(id);
      return response?.data;
    } catch (error) {
      throw error; // Let Redux Toolkit handle the error by rejecting the promise
    }
  }
);

export const updateInvestigator = createAsyncThunk(
  "updateInvestigator",
  async ({id, data} , { rejectWithValue }) => {
    try {
      const response = await update_Investigator(id,data);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);