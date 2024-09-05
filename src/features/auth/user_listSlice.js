import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  sendAdditionalUserDataApi,
  sendOtpApi,
  sendUserDataApi,
  sendUserEmployementDataApi,
  UserLoginfoApi,
  verifyOtpApi,
} from "./user_listAPI";

const initialState = {
  phoneNumber: "",
  otpSent: false,
  verified: false,
  loading: false,
  error: null,
  jwt: null,
  isBasicRegistrationCompleted: null,
  userLogInfo: {},
};

export const sendOtp = createAsyncThunk(
  "auth/sendOtp",
  async ({ phoneNumber, countryCode }, { rejectWithValue }) => {
    try {
      const data = await sendOtpApi(phoneNumber, countryCode);
      return { ...data, phoneNumber };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async ({ phoneNumber, countryCode, otp }, { rejectWithValue }) => {
    try {
      const data = await verifyOtpApi(phoneNumber, countryCode, otp);
      return { ...data, phoneNumber };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const UserLoginfo = createAsyncThunk(
  "auth/UserLoginfo",
  async (_, { rejectWithValue }) => {
    try {
      const data = await UserLoginfoApi();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const sendUserData = createAsyncThunk(
  "auth/sendUserData",
  async ({ userData, jwt }, { rejectWithValue }) => {
    try {
      
      const data = await sendUserDataApi(userData, jwt);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const sendAdditionalUserData = createAsyncThunk(
  "auth/sendAdditionalUserData",
  async ({ userData, jwt }, { rejectWithValue }) => {
    try {
      console.log("sendUserData function from slice", { userData, jwt });
      const data = await sendAdditionalUserDataApi(userData, jwt);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const sendUserEmployementData = createAsyncThunk(
  "auth/sendUserEmployementData",
  async ({ userData, jwt }, { rejectWithValue }) => {
    try {
      console.log("sendUserEmployementData function from slice", { userData, jwt });
      const data = await sendUserEmployementDataApi(userData, jwt);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.phoneNumber = "";
      state.otpSent = false;
      state.verified = false;
      state.loading = false;
      state.error = null;
      state.jwt = null;
      state.isBasicRegistrationCompleted = null;
      state.userLogInfo = {};
    },
    logout: (state) => {
      state.phoneNumber = "";
      state.jwt = null;
      state.isBasicRegistrationCompleted = null;
      state.userLogInfo = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.otpSent = true;
        state.phoneNumber = action.payload.phoneNumber;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        console.log("verifyOtp fulfilled action:", action);
        state.loading = false;
        state.verified = true;
        state.phoneNumber = action.payload.phoneNumber;
        state.jwt = action.payload.jwt;
        state.isBasicRegistrationCompleted =
          action.payload.isBasicRegistrationCompleted;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(UserLoginfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(UserLoginfo.fulfilled, (state, action) => {
        state.loading = false;
        state.otpSent = true;
        state.userLogInfo = action.payload;
      })
      .addCase(UserLoginfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(sendUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.userLogInfo = { ...state.userLogInfo, ...action.payload };
      })
      .addCase(sendUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(sendAdditionalUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendAdditionalUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.userLogInfo = { ...state.userLogInfo, ...action.payload };
      })
      .addCase(sendAdditionalUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { reset, logout } = authSlice.actions;

export const selectPhoneNumber = (state) => state.auth.phoneNumber;
export const selectisBasicRegistrationCompleted = (state) =>
  state.auth.isBasicRegistrationCompleted;
export const selectJwt = (state) => state.auth.jwt;
export const selectUserLogInfo = (state) => state.auth.userLogInfo;
export const selectAuthLoading = (state) => state.auth.loading;
export const selectAuthError = (state) => state.auth.error;

export default authSlice.reducer;
