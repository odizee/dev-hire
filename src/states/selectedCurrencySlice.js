import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "./apiService";

//GET CURRENCY FROM LOCAL STORAGE
const selectedCurrency =
  JSON.parse(localStorage.getItem("selectedCurrency")) === null
    ? []
    : JSON.parse(localStorage.getItem("selectedCurrency"));

//INITIAL STATE
const initialState = {
  selectedCurrency: selectedCurrency,
};

//SLICE
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
