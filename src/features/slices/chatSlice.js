import { createSlice } from "@reduxjs/toolkit";
import { getContacts, getMessages } from "features";

const initialState = {
  messages: [],
  contacts: [],
  error: null,
  loading: false,
  success: true,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    pushNewMessage: (state, { payload }) => {
      state.messages = [...state.messages, payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getContacts.fulfilled, (state, { payload }) => {
      state.contacts = payload.contacts;
    });
    builder.addCase(getContacts.rejected, (_, { payload }) => {
      console.log(payload);
    });
    builder.addCase(getMessages.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.messages = payload.messages;
    });
    builder.addCase(getMessages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMessages.rejected, (state, { payload }) => {
      state.loading = false;
      console.log(payload);
    });
  },
});

export const { pushNewMessage } = chatSlice.actions;
export default chatSlice.reducer;
