import { createSelector } from "@reduxjs/toolkit";

export const selectPokemonById = (pokemonId) =>
  createSelector(
    //어떤 상태에서 데이터를 들고올 것인지
    (state) => state.pokemon.data,
    (pokemon) => pokemon.find((el) => el.id === pokemonId)
  );

export const selectPokemonByRegExp = (reg) =>
  createSelector(
    (state) => state.pokemon.data,

    //pokemon 이름이 사용자가 입력 받은 정규식과 패턴이 맞는 데이터만 찾아서 반환
    (pokemon) => pokemon.filter((el) => el.name.match(reg))
  );
