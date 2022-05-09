import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//GET FAV FROM LOCAL STORAGE
const fav = JSON.parse(localStorage.getItem("fav"));

//INITIAL STATE
const initialState = {
  favourites: fav,
  isLike: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//SLICE
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
});

export const { addFav, removeFav } = favouriteSlice.actions;
export default favouriteSlice.reducer;
