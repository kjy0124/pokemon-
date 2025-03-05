import { createSlice } from "@reduxjs/toolkit";
import { fetchMultiplePokemonById } from "./thunk";
import Favorite from "../pages/Favorite";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    data: [],
    loading: true,
  },
  //동기적으로 상태를 변경할 때 reducers 사용

  reducers: {},

  //비동기적으로 상태 변경해야할 때
  extraReducers: (builder) => {
    builder
      .addCase(fetchMultiplePokemonById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMultiplePokemonById.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchMultiplePokemonById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});
// => action, reducer이 만들어짐
//reducer이 만들어졌다는 것은 reducer를 전달해서 store를 생성할 수 있다는 뜻

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [1, 2, 3],
  reducers: {
    addToFavorite(state, action) {
      state.push(action.payload.pokemonId);
    },
    removeFromFavorite(state, action) {
      const index = state.indexOf(action.payload.pokemonId);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});
