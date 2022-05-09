import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "./apiService";

const selectedCurrency = JSON.parse(localStorage.getItem("selectedCurrency"));

const initialState = {
  selectedCurrency: selectedCurrency,
};

export const selectedCurrencySlice = createSlice({
  name: "selectedCurrency",
  initialState,
  reducers: {
    selectCurrency: (state, actions) => {
      state.isLoading = false;
      state.selectedCurrency = actions.payload;
      localStorage.setItem(
        "selectedCurrency",
        JSON.stringify(state.selectedCurrency)
      );
    },
  },
});

export const { selectCurrency } = selectedCurrencySlice.actions;
export default selectedCurrencySlice.reducer;
