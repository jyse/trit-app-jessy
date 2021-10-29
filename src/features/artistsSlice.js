import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  artists: null,
  searchTerm: null,
};

const artistsSlice = createSlice({
  name: "Artists",
  initialState,
  reducers: {
    setArtists: (state, action) => {
      state.initialArtists = action.payload.initialArtists;
      state.artists = action.payload.artists;
      state.searchTerm = action.payload.searchTerm;
    },
  },
});

export const { setArtists } = artistsSlice.actions;
export const selectInitialArtists = (state) => state.artists.InitialArtists;
export const selectArtists = (state) => state.artists.artists;
export const selectSearchTerm = (state) => state.artists.searchTerm;

console.log(selectSearchTerm, "what is in selectSearchTerm?");
export default artistsSlice.reducer;
