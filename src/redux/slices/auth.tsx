import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import { AuthUserData } from "../../types";
import { User } from "../../types";

interface UserData {
  data: object | null;
  status: string;
}

const initialState: UserData = {
  data: null,
  status: "loading",
};

export const fetchAuth = createAsyncThunk(
  "/auth/fetchUserData",
  async (params: AuthUserData) => {
    const { data } = await axios.post<User>("/auth/login", params);
    return data;
  }
);

export const fetchRegister = createAsyncThunk(
  "/auth/fetchRegister",
  async (params: AuthUserData) => {
    const { data } = await axios.post<User>("/auth/register", params);
    return data;
  }
);

export const fetchAuthMe = createAsyncThunk("/auth/fetchAuthMe", async () => {
  const { data } = await axios.get<User>("/auth/me");
  return data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.pending, (state) => {
      state.data = null;
      state.status = "loading";
    });
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchAuth.rejected, (state) => {
      state.data = null;
      state.status = "error";
    });
    builder.addCase(fetchAuthMe.pending, (state) => {
      state.data = null;
      state.status = "loading";
    });
    builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchAuthMe.rejected, (state) => {
      state.data = null;
      state.status = "error";
    });
    builder.addCase(fetchRegister.pending, (state) => {
      state.data = null;
      state.status = "loading";
    });
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchRegister.rejected, (state) => {
      state.data = null;
      state.status = "error";
    });
  },
});

export const selectIsAuth = (state: any) => Boolean(state.auth.data);

export const userId = (state: any) => state.auth.data._id;

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
