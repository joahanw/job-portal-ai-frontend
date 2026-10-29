import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrentUser, loginUser, registerUser } from "./userThunk";

const initialState = {
  user: null,
  token: localStorage.getItem("accessToken") || null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem("accessToken");
    },
  },
  extraReducers: (builder) => {
    // LOGIN USER
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
        state.token = action.payload.data.jwt;
        state.isAuthenticated = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.isLoading = false;
        state.error = action.payload || "Failed to login.";
      });

    // Register User
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
        state.token = action.payload.data.jwt;
        state.isAuthenticated = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.isLoading = false;
        state.error = action.payload || "Failed to Register.";
      });

    // Fetch Current User
    builder
      .addCase(fetchCurrentUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to fech user.";
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        localStorage.removeItem("accessToken");
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
