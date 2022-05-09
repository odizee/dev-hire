import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "./apiService";

const fav = JSON.parse(localStorage.getItem("fav"));

const initialState = {
  favourites: [],
  isLike: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Freelancer data
export const getFavs = createAsyncThunk(
  "favourites/create",
  async (thunkApi) => {
    try {
      return "name";
    } catch (error) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFav: (state, actions) => {
      state.isLoading = false;
      state.favourites.push(actions.payload);
      localStorage.setItem("fav", JSON.stringify(state.favourites));
    },
    removeFav: (state, actions) => {
      state.isLoading = false;
      // state.favourites.filter((value) => value !== actions.payload);
      state.favourites = state.favourites.filter(
        (arrow) => arrow !== actions.payload
      );

      localStorage.setItem("fav", JSON.stringify(state.favourites));
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getFreelancers.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(getFreelancers.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.isSuccess = true;
  //       state.freelancers = action.payload;
  //     })
  //     .addCase(getFreelancers.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.isError = true;
  //       state.message = action.payload;
  //       state.freelancers = action.payload;
  //     });
  // },
});

export const { addFav, removeFav } = favouriteSlice.actions;
export default favouriteSlice.reducer;
