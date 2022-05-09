import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "./apiService";

//INITIAL STATE
const initialState = {
  freelancers: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Freelancer data
export const getFreelancers = createAsyncThunk(
  "freelancers/getAll",
  async (thunkApi) => {
    try {
      return await apiService.freelancers();
    } catch (error) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkApi.rejectWithValue(message);
    }
  }
);

//SLICE
export const freelancersSlice = createSlice({
  name: "freelancers",
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
      .addCase(getFreelancers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFreelancers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.freelancers = action.payload;
      })
      .addCase(getFreelancers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.freelancers = action.payload;
      });
  },
});

export const { reset } = freelancersSlice.actions;
export default freelancersSlice.reducer;
