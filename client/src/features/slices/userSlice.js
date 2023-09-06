import { createSlice } from "@reduxjs/toolkit";
import { IdentifyErrorForAuth } from "errors";
import { signInUser, signUpUser } from "features";

const initialState = {
  user: {},
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
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
      });
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
