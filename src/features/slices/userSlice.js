import { createSlice } from "@reduxjs/toolkit";
import { IdentifyErrorForAuth } from "errors";
import {
  forgetPassword,
  resetPassword,
  signInUser,
  signUpUser,
} from "features";

const initialState = {
  user: {},
  error: null,
  loading: false,
  link: "",
  isSuccess: false,
  userSocket: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setUserSocket: (state, { payload }) => {
      state.userSocket = payload;
    },
    nullifyError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.fulfilled, (state, { payload: { payload } }) => {
        state.user = payload.user;
        state.loading = false;
      })
      .addCase(signInUser.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(signInUser.rejected, (state, { payload: error }) => {
        state.loading = false;
        state.error = IdentifyErrorForAuth(error);
      })
      .addCase(signUpUser.fulfilled, (state, { payload: { payload } }) => {
        state.user = payload.user;
        state.loading = false;
      })
      .addCase(signUpUser.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(signUpUser.rejected, (state, { payload: error }) => {
        state.loading = false;
        state.error = IdentifyErrorForAuth(error);
      })
      .addCase(forgetPassword.fulfilled, (state, { payload: { payload } }) => {
        state.link = payload.link;
        state.loading = false;
      })
      .addCase(forgetPassword.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(forgetPassword.rejected, (state, { payload: error }) => {
        state.loading = false;
        state.error = IdentifyErrorForAuth(error);
      })
      .addCase(resetPassword.fulfilled, (state, { payload: { payload } }) => {
        state.loading = false;
        state.isSuccess = true;
      })
      .addCase(resetPassword.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(resetPassword.rejected, (state, { payload: error }) => {
        state.loading = false;
        state.error = IdentifyErrorForAuth(error);
      });
  },
});

export const { setUser, setUserSocket, nullifyError } = userSlice.actions;
export default userSlice.reducer;
