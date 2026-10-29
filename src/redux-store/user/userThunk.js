import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/login", credentials);
      if (response.data.data.jwt) {
        localStorage.setItem("accessToken", response.data.data.jwt);
      }
      console.log("response", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to login.",
      );
    }
  },
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/signup", credentials);
      if (response.data.data.jwt) {
        localStorage.setItem("accessToken", response.data.data.jwt);
      }
      console.log("response", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to register.",
      );
    }
  },
);

export const fetchCurrentUser = createAsyncThunk(
  "auth/fetchCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/users/profile");
      console.log("Fetch User Profile", response.data);
      return response.data;
    } catch (error) {
      console.log("Fetch User Profile Error:", error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch user profile.",
      );
    }
  },
);
