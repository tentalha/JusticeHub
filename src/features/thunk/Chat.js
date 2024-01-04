import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchContacts, fetchMessages } from "services";

export const getContacts = createAsyncThunk(
  "getContacts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchContacts();
      return response?.data?.payload;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getMessages = createAsyncThunk(
  "getMessages",
  async ({ selectedContact }, { rejectWithValue }) => {
    try {
      const response = await fetchMessages(selectedContact);
      return response?.data?.payload;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
