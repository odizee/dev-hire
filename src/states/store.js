import { configureStore } from "@reduxjs/toolkit";
import freelancersReducer from "./freelancersSlice";
import currenciesReducer from "./currencySlice";
import favouriteReducer from "./favouriteSlice";
import selectedCurrencyReducer from "./selectedCurrencySlice";

//Configure store to be sent to index.js
export default configureStore({
  reducer: {
    freelancers: freelancersReducer,
    currencies: currenciesReducer,
    favourite: favouriteReducer,
    selectedCurrency: selectedCurrencyReducer,
  },
});
