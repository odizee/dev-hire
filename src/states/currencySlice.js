import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "./apiService";

const initialState = {
  currencies: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Freelancer data
export const getCurrencies = createAsyncThunk(
  "currencies/getAll",
  async (thunkApi) => {
    try {
      return await apiService.currencies();
    } catch (error) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const currenciesSlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrencies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrencies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.currencies = action.payload;
      })
      .addCase(getCurrencies.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default currenciesSlice.reducer;
